import React, { FC, ReactElement } from 'react';
import { motion, useAnimation } from 'framer-motion';

import styles from './box.module.css';
import { Button, HStack } from '@chakra-ui/react';

const BoxKeyfame: FC = (): ReactElement => {
	const boxControl = useAnimation();

	return (
		<>
			<HStack mb="7">
				<Button
					onClick={() => {
						boxControl.start({
							x: '65vw',
							transition: { stiffness: 100, type: 'spring' },
						});
					}}
				>
					Move Right
				</Button>

				<Button
					onClick={() => {
						boxControl.start({ x: 0, transition: { stiffness: 100, type: 'spring' } });
					}}
				>
					Move Left
				</Button>

				<Button
					onClick={() => {
						boxControl.start({
							borderRadius: '50%',
							transition: { duration: 0.2 },
						});
					}}
				>
					Circle
				</Button>

				<Button
					onClick={() => {
						boxControl.start({
							borderRadius: 0,
							transition: { duration: 0.2 },
						});
					}}
				>
					Square
				</Button>
			</HStack>

			<motion.div className={styles.box} animate={boxControl} />
		</>
	);
};

export default BoxKeyfame;
