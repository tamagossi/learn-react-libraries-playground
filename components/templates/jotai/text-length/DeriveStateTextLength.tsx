import { Input, InputGroup, InputLeftElement, Text, VStack } from '@chakra-ui/react';
import { BiSearchAlt2 } from 'react-icons/bi';
import React, { FC, ReactElement } from 'react';

import { useTextState } from 'hooks/state/jotai/text.state';

const SimpleStateCounter: FC = (): ReactElement => {
	const { text, setText, textLength } = useTextState();

	return (
		<VStack>
			<Text fontSize="2xl" fontWeight="bold" mb="6">
				Text Length with Derived State
			</Text>

			<InputGroup mb={5} w="50%">
				<InputLeftElement pointerEvents="none">
					<BiSearchAlt2 color="gray.300" />
				</InputLeftElement>

				<Input
					type="text"
					placeholder="Change text"
					onChange={(event) => setText(event.target.value)}
				/>
			</InputGroup>

			<Text fontWeight="bold">{text || '-'}</Text>
			<Text>Text length: {textLength}</Text>
		</VStack>
	);
};

export default SimpleStateCounter;
