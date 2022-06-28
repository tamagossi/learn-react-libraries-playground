import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './box.module.css';

const BasicEventBox = () => {
	return (
		<motion.div
			className={styles.box}
			whileTap={{ scale: 0.9 }}
			drag
			dragConstraints={{ left: 0, right: 920, bottom: 0, top: 0 }}
			whileHover={{
				scale: 1.1,
			}}
		/>
	);
};

export default BasicEventBox;
