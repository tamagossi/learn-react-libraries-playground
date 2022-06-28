import React from 'react';
import { Box, Divider, Text, VStack } from '@chakra-ui/react';

import { AtomSectionTitle } from 'components/atoms';
import { Layout } from 'components/layouts';
import { BasicEventBox, BasicMotionBox, BasicVariantBox } from 'components/templates';

const BasicFramerMotion = () => {
	return (
		<Layout title="🏃🏻 Framer Motion">
			<AtomSectionTitle title="Animate & Initial Props" />
			<BasicMotionBox />

			<Divider mt={10} mb={10} />

			<AtomSectionTitle title="Basic Event Animation" />
			<BasicEventBox />

			<Divider mt={10} mb={10} />

			<AtomSectionTitle title="Basic Variant" />
			<BasicVariantBox />
		</Layout>
	);
};

export default BasicFramerMotion;
