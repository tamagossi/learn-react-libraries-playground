import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './box.module.css';

const BasicMotionBox = () => {
	const [isAnimating, setIsAnimating] = useState(false);

	return (
		<motion.div
			onClick={() => setIsAnimating((prev) => !prev)}
			className={styles.box}
			animate={{
				x: isAnimating ? '50vw' : 0,
				opacity: isAnimating ? 1 : 0.2,
				rotate: isAnimating ? 360 : 0,
			}}
			transition={{
				// damping: 100, slow down the end of the animation
				// duration: 2, always work with type teen and no bouncing effect
				type: 'spring',
				stiffness: 50,
			}}
		/>
	);
};

export default BasicMotionBox;
