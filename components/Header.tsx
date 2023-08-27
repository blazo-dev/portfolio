import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '../types'

type Props = {
	socials: Social[]
}

function Header({ socials }: Props) {
	return (
		<header className='flex items-start justify-between p-5 fixed top-0 w-full rounded-b-md max-w-7xl mx-auto z-20 xl:items-center bg-[#2b2b2b8f] text-[#F8C43A] backdrop-blur-md'>
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.3 }}
				className='flex items-center'
			>
				{socials.map(({ _id, url }: Social) => (
					<SocialIcon
						key={_id}
						url={url}
						fgColor='currentColor'
						bgColor='transparent'
						target='_blank'
						className='cursor-pointer'
					/>
				))}
			</motion.div>
			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.3 }}
				className='flex items-center text-[currentColor] cursor-pointer'
			>
				<SocialIcon
					url='#contact'
					network='email'
					fgColor='currentColor'
					bgColor='transparent'
					className='cursor-pointer'
				/>
				<Link href='#contact'>
					<span className='uppercase hidden md:inline-block text-sm'>
						Get In Touch
					</span>
				</Link>
			</motion.div>
		</header>
	)
}

export default Header
