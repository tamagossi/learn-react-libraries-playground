import React, { FC, ReactElement } from 'react';
import { TextProps, Text, VStack, Box } from '@chakra-ui/react';

type AtomSectionTitlePropsInterface = TextProps & { title: string; subtitle?: string };

const AtomSectionTitle: FC<AtomSectionTitlePropsInterface> = ({
	title,
	subtitle,
	...props
}: AtomSectionTitlePropsInterface): ReactElement => {
	return (
		<Box mb="6" w="full">
			<Text fontSize="2xl" fontWeight="bold" {...props}>
				{title}
			</Text>

			{subtitle && <Text fontSize="md">{subtitle}</Text>}
		</Box>
	);
};

export default AtomSectionTitle;
