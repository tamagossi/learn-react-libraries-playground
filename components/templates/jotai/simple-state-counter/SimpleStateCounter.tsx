import { Text, VStack } from '@chakra-ui/react';
import React, { FC, ReactElement } from 'react';

import CounterModificationButton from './CounterModificationButton';
import { useCountState } from 'hooks/state/jotai/count.state';
import { AtomSectionTitle } from 'components/atoms';

const SimpleStateCounter: FC = (): ReactElement => {
	const [count] = useCountState();

	return (
		<VStack>
			<AtomSectionTitle title="Simple State Counter" />

			<Text fontWeight="bold">Counter:</Text>
			<Text fontSize="6xl">{count}</Text>

			<CounterModificationButton />
		</VStack>
	);
};

export default SimpleStateCounter;
