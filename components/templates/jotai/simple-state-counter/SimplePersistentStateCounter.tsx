import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Button, Text, VStack } from '@chakra-ui/react';

import { usePersistCountState } from 'hooks/state/jotai/count.state';
import { AtomSectionTitle } from 'components/atoms';

const SimplePersistentStateCounter: FC = (): ReactElement => {
	const [persistCount, setPersistCount] = usePersistCountState();

	return (
		<VStack>
			<AtomSectionTitle
				title="Simple Persistence State Counter"
				subtitle="Not working at the moment, caused missmatch server HTML and client HTML"
			/>

			<Text fontWeight="bold">Counter:</Text>
			<Text fontSize="6xl">{persistCount}</Text>

			<Button onClick={() => setPersistCount(persistCount - 1)}>-</Button>
		</VStack>
	);
};

export default SimplePersistentStateCounter;
