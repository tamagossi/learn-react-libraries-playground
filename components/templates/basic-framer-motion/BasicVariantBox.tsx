import React, { FC, ReactElement } from 'react';
import { motion } from 'framer-motion';

import styles from './box.module.css';

const BasicVariantBox: FC = (): ReactElement => {
	const boxVariant = {
		hidden: {
			x: '-100vw',
		},
		visible: {
			x: 0,
			transition: {
				delay: 0.5,
				when: 'beforeChildren',
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariant = {
		hidden: {
			x: -10,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
	};

	return (
		<motion.div className={styles.box} variants={boxVariant} animate="visible" initial="hidden">
			{[1, 2, 3].map((box) => {
				return (
					<motion.div variants={itemVariant} className={styles['box-item']} key={box} />
				);
			})}
		</motion.div>
	);
};

export default BasicVariantBox;
