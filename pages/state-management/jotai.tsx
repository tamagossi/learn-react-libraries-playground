import React, { FC, ReactElement } from 'react';
import { Divider } from '@chakra-ui/react';

import {
	SimpleStateCounter,
	DeriveStateTextLength,
	AsyncState,
	SimplePersistentStateCounter,
} from 'components/templates';
import { Layout } from 'components/layouts';

const JotaiPage: FC = (): ReactElement => {
	return (
		<Layout title="Jotai">
			<SimpleStateCounter />
			<Divider mt={10} mb={10} />
			<DeriveStateTextLength />
			<Divider mt={10} mb={10} />
			<AsyncState />
			<Divider mt={10} mb={10} />
			<SimplePersistentStateCounter />
		</Layout>
	);
};

export default JotaiPage;
