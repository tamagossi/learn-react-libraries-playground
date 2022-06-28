import React, { FC, ReactElement } from 'react';
import { motion } from 'framer-motion';

import styles from './box.module.css';

const BoxKeyfame: FC = (): ReactElement => {
	return (
		<motion.div
			className={styles.box}
			animate={{
				scale: [1, 1.4, 1.4, 1, 1],
				borderRadius: ['20%', '20%', '50%', '50%', '20%'],
				rotate: [0, 0, 270, 270, 0],
			}}
			transition={{ duration: 2 }}
		/>
	);
};

export default BoxKeyfame;
