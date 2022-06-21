import * as React from 'react';
import {
	chakra,
	keyframes,
	ImageProps,
	forwardRef,
	usePrefersReducedMotion,
} from '@chakra-ui/react';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AtomLogo = forwardRef<ImageProps, 'img'>((props, ref) => {
	const prefersReducedMotion = usePrefersReducedMotion();

	const animation = prefersReducedMotion ? undefined : `${spin} infinite 20s linear`;
	return (
		<chakra.img
			animation={animation}
			src="https://iconape.com/wp-content/files/zk/93042/svg/react.svg"
			ref={ref}
			{...props}
		/>
	);
});

export default AtomLogo;
