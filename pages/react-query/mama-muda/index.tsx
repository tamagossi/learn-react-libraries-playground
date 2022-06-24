import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	Box,
	Flex,
	Text,
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Button,
	Textarea,
} from '@chakra-ui/react';

import { Layout } from 'components/layouts';
import MamaTable from 'components/templates/mama-muda/MamaTable';
import { MessageForm, useSubmitMessage } from 'hooks/query/mamaMuda.hook';

const MamaMudaPage = () => {
	const { mutate } = useSubmitMessage({
		onSuccess: () => {
			reset();
			clearErrors();
		},
	});
	const {
		handleSubmit,
		register,
		reset,
		clearErrors,
		formState: { errors },
	} = useForm<MessageForm>();

	const submitMessage = async (data: MessageForm) => {
		await mutate(data);
	};

	return (
		<Layout title="💌 Mama Muda" subTitle="Minta Pulsa">
			<Flex>
				<Box>
					<Box w="md" p={5} mr={4} border="1px" borderColor="gray.200" boxShadow="md">
						<Text
							fontSize="xl"
							fontWeight="bold"
							mb={4}
							pb={2}
							borderBottom="1px"
							borderColor="gray.200"
						>
							✍️ Request Pulsa
						</Text>

						<form>
							<FormControl pb={4} isInvalid={errors.phoneNumber ? true : false}>
								<FormLabel
									htmlFor="phoneNumber"
									fontWeight="bold"
									fontSize="xs"
									letterSpacing="1px"
									textTransform="uppercase"
								>
									Phone Number
								</FormLabel>

								<Input
									placeholder="Phone Number"
									{...register('phoneNumber', { required: 'message required' })}
								/>

								{errors.phoneNumber && (
									<FormErrorMessage>
										{errors.phoneNumber.message}
									</FormErrorMessage>
								)}
							</FormControl>

							<FormControl>
								<FormLabel
									htmlFor="name"
									fontWeight="bold"
									fontSize="xs"
									letterSpacing="1px"
									textTransform="uppercase"
								>
									Message
								</FormLabel>

								<Textarea
									placeholder="Bullshit Message"
									{...register('message', { required: 'message required' })}
								/>

								{errors.message && (
									<FormErrorMessage>{errors.message.message}</FormErrorMessage>
								)}
							</FormControl>

							<Button
								mt={4}
								colorScheme="teal"
								type="submit"
								onClick={handleSubmit(submitMessage)}
							>
								Send
							</Button>
						</form>
					</Box>
				</Box>

				<MamaTable />
			</Flex>
		</Layout>
	);
};

export default MamaMudaPage;
