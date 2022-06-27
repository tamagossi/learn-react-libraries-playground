import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Box, Container, Flex, Heading, Spacer, Text, useColorMode } from '@chakra-ui/react';

import { AtomColorModeSwitcher } from '../atoms';

type Props = {
	children?: ReactNode;
	title?: string;
	subTitle?: string;
};

const Layout = ({ children, title = 'This is the default title', subTitle }: Props) => {
	const { colorMode } = useColorMode();

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Container maxW={{ xl: '1200px' }} h="100vh">
				<Flex pt={10} pb={10}>
					<Box>
						<Heading>{title}</Heading>

						<Text
							bgGradient="linear(to-l, #7928CA,#FF0080)"
							bgClip="text"
							fontWeight="extrabold"
						>
							{subTitle}
						</Text>
					</Box>

					<Spacer />
					<AtomColorModeSwitcher />
				</Flex>

				<Box minH="70vh" pb={10}>
					{children}
				</Box>

				<Box
					// position="fixed"
					background={colorMode === 'dark' ? 'gray.800' : 'white'}
					bottom="0"
					left="0"
					zIndex="sticky"
					borderTop="1px"
					borderColor="gray.200"
					py={2}
					mt={8}
					w="full"
				>
					<footer>
						<Container maxW={{ xl: '1200px' }}>
							<Flex>
								<Box>
									<span>React Tutorial Collection</span>
								</Box>
							</Flex>
						</Container>
					</footer>
				</Box>
			</Container>
		</div>
	);
};

export default Layout;
