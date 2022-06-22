import React, { FC, ReactElement } from 'react';
import { Text } from '@chakra-ui/react';

interface AtomPercentageFormatPropsInterface {
	value: number;
}

const AtomPercentageFormat: FC<AtomPercentageFormatPropsInterface> = ({
	value,
}: AtomPercentageFormatPropsInterface): ReactElement => {
	const percent = Intl.NumberFormat('id-Id', {
		style: 'percent',
		minimumFractionDigits: 1,
		maximumFractionDigits: 1,
	}).format(value / 100);

	const color = value > 0 ? 'green.500' : 'red.500';

	return <Text color={color}>{percent}</Text>;
};

export default AtomPercentageFormat;
