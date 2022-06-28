import React, { FC, ReactElement } from 'react';
import { Checkbox, HStack, Text, VStack } from '@chakra-ui/react';

import { AtomSectionTitle } from 'components/atoms';
import { Todo, useTodoState } from 'hooks/state/jotai/todo.state';

const AsyncState: FC = (): ReactElement => {
	const { todos }: { todos: Todo[] } = useTodoState();

	return (
		<VStack>
			<AtomSectionTitle title="Async source state" />

			<HStack gap={4} flexWrap="wrap" justifyContent="center">
				{todos.slice(0, 10).map((todo: Todo): ReactElement => {
					const { title, completed } = todo;

					return (
						<HStack key={title} p={4} borderRadius={10} bg="white">
							<Checkbox checked={completed} border="1px solid lightgray" />

							<Text textColor="gray.900">{title}</Text>
						</HStack>
					);
				})}
			</HStack>
		</VStack>
	);
};

export default AsyncState;
