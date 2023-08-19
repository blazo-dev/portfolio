import React from 'react'
import { motion } from 'framer-motion'
function BackgroundCircles() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
				scale: [1, 2, 1.5, 1]
			}}
			transition={{ duration: 2.5 }}
			className='absolute z-0 top-0 left-0 flex items-center justify-center overflow-hidden w-full h-screen'
		>
			<div className='border border-[#393E46] rounded-full h-[200px] absolute w-[200px] animate-ping' />
			<div className='border border-[#393E46] rounded-full h-[300px] absolute w-[300px] animate-ping' />
			<div className='border border-[#393E46] rounded-full h-[500px] absolute w-[500px] animate-ping' />
			<div className='border border-[#F8C43A] rounded-full h-[300px] absolute w-[300px] animate-pulse opacity-5' />
			<div className='border border-[#F8C43A] rounded-full h-[600px] absolute w-[600px] animate-pulse opacity-5' />
			<div className='border border-[#F8C43A] rounded-full h-[900px] absolute w-[900px] animate-pulse opacity-5' />
		</motion.div>
	)
}

export default BackgroundCircles
