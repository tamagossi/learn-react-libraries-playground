import React, { FC, ReactElement } from 'react';
import { TextProps, Text } from '@chakra-ui/react';

type AtomSectionTitlePropsInterface = TextProps & { title: string };

const AtomSectionTitle: FC<AtomSectionTitlePropsInterface> = ({
	title,
	...props
}: AtomSectionTitlePropsInterface): ReactElement => {
	return (
		<Text fontSize="2xl" fontWeight="bold" mb="6" {...props}>
			{title}
		</Text>
	);
};

export default AtomSectionTitle;
