import React from 'react';
import { Box, Divider, Text, VStack } from '@chakra-ui/react';

import { Layout } from 'components/layouts';
import { BasicEventBox, BasicMotionBox } from 'components/templates';

const BasicFramerMotion = () => {
	return (
		<Layout title="🏃🏻 Framer Motion">
			<Text fontSize="2xl" fontWeight="bold" mb="6">
				Animate & Initial Props
			</Text>

			<BasicMotionBox />

			<Divider mt={10} mb={10} />

			<Text fontSize="2xl" fontWeight="bold" mb="6">
				Basic Event Animation
			</Text>

			<BasicEventBox />
		</Layout>
	);
};

export default BasicFramerMotion;
