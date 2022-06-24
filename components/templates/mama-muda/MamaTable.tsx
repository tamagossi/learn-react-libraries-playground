import React, { ReactElement, FC } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr, Badge, Text } from '@chakra-ui/react';

import StatusBadge from './StatusBadge';
import { Message, useMamaMudaQuery } from 'hooks/query/mamaMuda.hook';

const formatDate = (date: string) => new Date(date).toLocaleString('id-ID');

const MamaTable: FC = (): ReactElement => {
	const { data, isSuccess, isLoading, isFetching } = useMamaMudaQuery();

	if (isLoading) return <Text>Loading data..</Text>;
	if (isFetching) return <Text>Fetching message..</Text>;

	return isSuccess ? (
		<Table variant="simple">
			<Thead>
				<Tr>
					<Th>Date</Th>
					<Th>Phone Number</Th>
					<Th>Message</Th>
					<Th>Status</Th>
				</Tr>
			</Thead>

			<Tbody>
				{data.map(({ status, id, createdAt, phoneNumber, message }: Message) => {
					return (
						<Tr key={id}>
							<Td>{formatDate(createdAt!)}</Td>
							<Td>{phoneNumber}</Td>
							<Td>{message}</Td>
							<Td>
								<StatusBadge status={status!} />
							</Td>
						</Tr>
					);
				})}
			</Tbody>
		</Table>
	) : (
		<Text>There was an error displaying message table</Text>
	);
};

export default MamaTable;
