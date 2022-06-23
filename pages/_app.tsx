import { AppProps } from 'next/app';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<ChakraProvider theme={theme}>
					<Component {...pageProps} />
				</ChakraProvider>

				<ReactQueryDevtools />
			</Hydrate>
		</QueryClientProvider>
	);
}

export default MyApp;
