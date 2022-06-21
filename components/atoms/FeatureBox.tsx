import React, { FC, ReactElement } from 'react';
import NextLink from 'next/link';
import { Box, Text, Icon, Badge } from '@chakra-ui/react';

import { Feature } from 'interfaces/features.interface';

const AtomFeatureBox: FC<Feature> = ({ path, icon, title, tag }: Feature): ReactElement => {
	return (
		<NextLink href={path} passHref>
			<Box
				bg="white"
				borderColor="grey.10"
				borderWidth={1}
				boxShadow="xs"
				cursor="pointer"
				p="6"
				rounded="md"
				textAlign="center"
				width={300}
				_hover={{
					bg: 'gray.50',
					borderWidth: '1px',
					borderColor: 'red.200',
				}}
			>
				<Icon as={icon} w={20} h={20} />

				<Text
					fontSize="xl"
					display="block"
					fontWeight="semibold"
					style={{ textDecoration: 'none' }}
				>
					{title}
				</Text>

				<Badge>{tag}</Badge>
			</Box>
		</NextLink>
	);
};

export default AtomFeatureBox;
