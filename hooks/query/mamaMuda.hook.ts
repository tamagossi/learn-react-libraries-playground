import { useMutation, UseMutationResult, useQuery, useQueryClient } from 'react-query';

export type Message = {
	id: number;
	createdAt?: string;
	phoneNumber: number;
	message: string;
	status?: string;
};

export type MessageForm = Pick<Message, 'phoneNumber' | 'message'>;

type MutationCallback = {
	onError?: () => void;
	onMutate?: () => void;
	onSettled?: () => void;
	onSuccess?: () => void;
};

const URL = `http://localhost:3000/api/message`;

const getMessage = async () => {
	const response = await fetch(URL);
	if (!response.ok) throw new Error('Fething error');
	return await response.json();
};

const submitMessage = async (data: MessageForm) => {
	const response = await fetch(URL, {
		method: 'POST',
		body: JSON.stringify(data),
	});

	if (!response.ok) throw new Error('An error has occured');

	return await response.json();
};

export const useMamaMudaQuery = () => {
	return useQuery(['mama-muda'], getMessage);
};

export const useSubmitMessage = ({ onSuccess, onSettled, onMutate, onError }: MutationCallback) => {
	const queryClient = useQueryClient();

	return useMutation(submitMessage, {
		onMutate: async (data) => {
			await queryClient.cancelQueries('mama-muda');

			const previousMessage = queryClient.getQueryData<Message[]>('mama-muda');

			if (previousMessage) {
				const newMessage = { ...data, createdAt: new Date().toISOString() };

				const messages = [...previousMessage, newMessage];
				queryClient.setQueriesData('mama-muda', messages);
			}

			if (onMutate) onMutate();

			return { previousMessage };
		},
		onSuccess: async () => {
			await queryClient.invalidateQueries('mama-muda');

			if (onSuccess) onSuccess();
		},
		onError: (error: any, _variables, context) => {
			if (context?.previousMessage)
				queryClient.setQueryData<Message[]>('mama-muda', context.previousMessage);

			if (onError) onError();
		},
		onSettled: () => {
			if (onSettled) onSettled();
		},
	});
};
