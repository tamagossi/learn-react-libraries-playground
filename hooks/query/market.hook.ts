import { useQuery } from 'react-query';

export type Price = {
	current_price: number;
	id: string;
	image: string;
	market_cap: number;
	name: string;
	price_change_percentage_24h: number;
	symbol: string;
	total_volume: number;
};

export const getMarket = async (page: number = 1): Promise<Price[]> => {
	const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10&page=${page}`;

	const response = await fetch(URL);

	if (!response.ok) throw new Error('Fething error');
	return await response.json();
};

export const useMarketQuery = (page: number = 1, initialData?: Price[]) => {
	return useQuery(['market', page], () => getMarket(page), { initialData });
};
