import React, { FC, ReactElement } from 'react';
import { Button, HStack } from '@chakra-ui/react';

import { useCountState } from 'hooks/state/jotai/count.state';

const CounterModificationButton: FC = (): ReactElement => {
	const [, setCount] = useCountState();

	return (
		<>
			<HStack>
				<Button onClick={() => setCount((prev: number) => prev - 1)}>-</Button>
				<Button onClick={() => setCount((prev: number) => prev + 1)}>+</Button>
			</HStack>
		</>
	);
};

export default CounterModificationButton;
