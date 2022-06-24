import { Badge } from '@chakra-ui/react';
import React from 'react';
import { ReactElement } from 'react';
import { FC } from 'react';

interface StatusBadgePropsInterface {
	status: string;
}

const StatusBadge: FC<StatusBadgePropsInterface> = ({
	status,
}: StatusBadgePropsInterface): ReactElement => {
	let color = 'yellow';
	let text = status;

	if (status === 'failed') color = 'red';
	if (status === 'success') color = 'green';

	return <Badge colorScheme={color}>{text}</Badge>;
};

export default StatusBadge;
