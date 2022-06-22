import React, { useState } from 'react';
import {
	Badge,
	Flex,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	Image,
	Text,
	Spinner,
	Grid,
	Button,
	HStack,
} from '@chakra-ui/react';

import { Layout } from '@/components/layouts';
import { AtomPercentageFormat } from '@/components/atoms';
import { Price, useMarketQuery } from 'hooks/query/market';

const formatNumber = (number: number) => Intl.NumberFormat('id-Id').format(number);

export default function Market() {
	const [page, setPage] = useState(1);
	const { data, isError, isLoading, isFetching, isSuccess } = useMarketQuery(page);

	const next = () => {
		setPage((prev) => prev + 1);
	};

	const previous = () => {
		setPage((prev) => prev - 1);
	};

	return (
		<Layout title="Crypto Market">
			{isFetching && <Spinner color="blue.300" position="fixed" top={10} right={10} />}

			<Table variant="simple">
				<Thead>
					<Tr>
						<Th>Coin</Th>
						<Th>Last Price</Th>
						<Th>24h % Change</Th>
						<Th isNumeric>Total Volume</Th>
						<Th isNumeric>Market Cap</Th>
					</Tr>
				</Thead>

				<Tbody>
					{isError && <Text mt={5}>There was an error requesting your data</Text>}
					{isLoading && <Text>Loading...</Text>}
					{isSuccess &&
						data.map((price: Price) => {
							const {
								id,
								symbol,
								current_price,
								price_change_percentage_24h,
								image,
								total_volume,
								market_cap,
							} = price;

							return (
								<Tr key={id}>
									<Td>
										<Flex alignItems="center">
											<Image
												alt="Token"
												src={image}
												boxSize="24px"
												ignoreFallback={true}
											/>

											<Text
												pl={2}
												fontWeight="bold"
												textTransform="capitalize"
											>
												{id}
											</Text>
											<Badge ml={3}>{symbol}</Badge>
										</Flex>
									</Td>
									<Td>{formatNumber(current_price)}</Td>
									<Td>
										<AtomPercentageFormat value={price_change_percentage_24h} />
									</Td>
									<Td isNumeric>{formatNumber(total_volume)}</Td>
									<Td isNumeric>{formatNumber(market_cap)}</Td>
								</Tr>
							);
						})}
				</Tbody>
			</Table>

			<HStack justifyContent="end" gap={6} mt={10}>
				<Button
					colorScheme="linkedin"
					variant="outline"
					size="sm"
					onClick={previous}
					disabled={page === 1}
				>
					Previous
				</Button>

				<Text>{page}</Text>

				<Button colorScheme="linkedin" variant="outline" size="sm" onClick={next}>
					Next
				</Button>
			</HStack>
		</Layout>
	);
}
