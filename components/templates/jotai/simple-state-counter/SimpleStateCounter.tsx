import { Text, VStack } from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';

import { useCountState } from 'hooks/state/jotai/count.state';
import CounterModificationButton from './CounterModificationButton';

const SimpleStateCounter: FC = (): ReactElement => {
	const [count] = useCountState();

	return (
		<VStack>
			<Text fontSize="2xl" fontWeight="bold" mb="6">
				Simple State Counter
			</Text>

			<Text fontWeight="bold">Counter:</Text>
			<Text fontSize="6xl">{count}</Text>

			<CounterModificationButton />
		</VStack>
	);
};

export default SimpleStateCounter;
