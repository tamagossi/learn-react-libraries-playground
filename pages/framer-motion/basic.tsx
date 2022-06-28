import React from 'react';
import { Divider } from '@chakra-ui/react';

import { AtomSectionTitle } from 'components/atoms';
import { Layout } from 'components/layouts';
import {
	BasicEventBox,
	BasicKeyframeBox,
	BasicMotionBox,
	BasicUseAnimation,
	BasicVariantBox,
} from 'components/templates';

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

			<Divider mt={10} mb={10} />

			<AtomSectionTitle title="Basic Keyframe" />
			<BasicKeyframeBox />
			<Divider mt={10} mb={10} />

			<AtomSectionTitle title="Basic useAnimation" />
			<BasicUseAnimation />
		</Layout>
	);
};

export default BasicFramerMotion;
