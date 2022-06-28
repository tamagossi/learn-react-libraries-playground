import React, { ChangeEvent, FC, ReactElement } from 'react';
import { Input, InputGroup, InputLeftElement, Text, VStack } from '@chakra-ui/react';
import { BiSearchAlt2 } from 'react-icons/bi';

import { AtomSectionTitle } from 'components/atoms';
import { useTextState } from 'hooks/state/jotai/text.state';

const SimpleStateCounter: FC = (): ReactElement => {
	const { text, changeText, textLength } = useTextState();

	return (
		<VStack>
			<AtomSectionTitle title="Text Length with Derived State" />

			<InputGroup mb={5} w="50%">
				<InputLeftElement pointerEvents="none">
					<BiSearchAlt2 color="gray.300" />
				</InputLeftElement>

				<Input
					type="text"
					placeholder="Change text"
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						changeText(event.target.value)
					}
				/>
			</InputGroup>

			<Text fontWeight="bold">{text || '-'}</Text>
			<Text>Text length: {textLength}</Text>
		</VStack>
	);
};

export default SimpleStateCounter;
