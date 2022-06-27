import * as React from 'react';
import { Box, Text, VStack, Grid, Flex } from '@chakra-ui/react';
import { FcBullish, FcBusinesswoman, FcSerialTasks, FcSportsMode } from 'react-icons/fc';

import { AtomColorModeSwitcher, AtomFeatureBox, AtomLogo } from 'components/atoms';
import { Feature } from 'interfaces/features.interface';

const FEATURES: Feature[] = [
	{
		path: '/react-query/crypto-market',
		title: 'Crypto Market',
		icon: FcBullish,
		tags: ['react-query'],
	},
	{
		path: '/react-query/mama-muda',
		title: 'Mama Muda',
		icon: FcBusinesswoman,
		tags: ['react-query', 'hooks-form'],
	},
	{
		path: '/state-management/jotai',
		title: 'Jotai',
		icon: FcSerialTasks,
		tags: ['state-management | jotai'],
	},
	{
		path: '/framer-motion/basic',
		title: 'Basic Motion',
		icon: FcSportsMode,
		tags: ['framer-motion'],
	},
];

const App = () => (
	<Box textAlign="center" fontSize="xl">
		<Grid minH="50vh" p={3}>
			<AtomColorModeSwitcher justifySelf="flex-end" />

			<VStack>
				<AtomLogo h="15vmin" pointerEvents="none" />
				<Text fontSize="6xl" fontWeight="900">
					React Tutorial
				</Text>

				<Flex gap={8} flexWrap="wrap" justifyContent="center" padding={10} px={20}>
					{FEATURES.map(
						(feature: Feature, index): React.ReactNode => (
							<AtomFeatureBox {...feature} key={`${feature.title}-index`} />
						)
					)}
				</Flex>
			</VStack>
		</Grid>
	</Box>
);

export default App;
