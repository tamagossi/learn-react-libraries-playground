import { atom, useAtom } from 'jotai';

export type Todo = {
	completed: boolean;
	id: number;
	title: string;
	userId: number;
};

type UseTodoState = {
	todos: Todo[];
	setTodos: () => void;
};

const todoState = atom<Promise<Todo[]>>(async (): Promise<Todo[]> => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');

	if (!response.ok) throw new Error('error when fetching leagues todo');

	return response.json();
});

export const useTodoState = (): UseTodoState => {
	const [todos, setTodos] = useAtom(todoState);

	return { todos, setTodos };
};
