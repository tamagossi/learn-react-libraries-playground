import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Center } from '@chakra-ui/react';

import { Layout } from 'components/layouts';

const images = [
	'/images/image-1.jpg',
	'/images/image-2.jpg',
	'/images/image-3.jpg',
	'/images/image-4.jpg',
	'/images/image-5.jpg',
];

const FramerMotionSlider = () => {
	const carousel = useRef() as React.MutableRefObject<HTMLDivElement>;
	const [width, setWidth] = useState(0);

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<Layout title="🌇 Slider">
			<Center>
				<motion.div
					className="carousel"
					ref={carousel}
					style={{ cursor: 'grab', overflow: 'hidden' }}
					whileTap={{ cursor: 'grabbing' }}
				>
					<motion.div
						className="inner-carousel"
						style={{ display: 'flex' }}
						drag="x"
						dragConstraints={{ right: 0, left: -width }}
					>
						{images.map((image) => {
							return (
								<motion.div
									className="item"
									key={image}
									style={{
										minHeight: '40rem',
										width: '30rem',
										padding: '40px',
										minWidth: '30rem',
										pointerEvents: 'none',
									}}
								>
									<Image
										src={image}
										alt={image}
										layout="responsive"
										height={19}
										width={14}
										style={{ borderRadius: '2rem' }}
									/>
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</Center>
		</Layout>
	);
};

export default FramerMotionSlider;
