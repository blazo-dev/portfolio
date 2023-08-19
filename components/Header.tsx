import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

function Header() {
	return (
		<header className='flex items-start justify-between p-5 fixed top-0 w-full max-w-7xl mx-auto z-20 xl:items-center text-[#F8C43A]'>
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.3 }}
				className='flex items-center'
			>
				{/* Social icons */}
				<SocialIcon
					url='https://linkedin.com/in/bryanlazodev/'
					target='_blank'
					fgColor='currentColor'
					bgColor='transparent'
				/>
				<SocialIcon
					url='https://linkedin.com/in/bryanlazodev/'
					target='_blank'
					fgColor='currentColor'
					bgColor='transparent'
				/>
			</motion.div>
			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.3 }}
				className='flex items-center text-[currentColor] cursor-pointer'
			>
				{/* Email */}
				<SocialIcon
					network='email'
					fgColor='currentColor'
					bgColor='transparent'
					className='cursor-pointer'
				/>
				<span className='uppercase hidden md:inline-block text-sm'>
					Get In Touch
				</span>
			</motion.div>
		</header>
	)
}

export default Header
