import React from 'react';
import { Box, Divider, Text, VStack } from '@chakra-ui/react';

import { AtomSectionTitle } from 'components/atoms';
import { Layout } from 'components/layouts';
import { BasicEventBox, BasicMotionBox } from 'components/templates';

const BasicFramerMotion = () => {
	return (
		<Layout title="🏃🏻 Framer Motion">
			<AtomSectionTitle title="Animate & Initial Props" />
			<BasicMotionBox />

			<Divider mt={10} mb={10} />

			<AtomSectionTitle title="Basic Event Animation" />
			<BasicEventBox />
		</Layout>
	);
};

export default BasicFramerMotion;
