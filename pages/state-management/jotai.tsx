import React, { FC, ReactElement } from 'react';
import { Divider } from '@chakra-ui/react';

import { SimpleStateCounter, DeriveStateTextLength } from 'components/templates';
import { Layout } from 'components/layouts';

const JotaiPage: FC = (): ReactElement => {
	return (
		<Layout title="Jotai">
			<SimpleStateCounter />

			<Divider mt={10} mb={10} />

			<DeriveStateTextLength />
		</Layout>
	);
};

export default JotaiPage;
