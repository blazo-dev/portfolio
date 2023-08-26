import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
	return (
		<footer className='fixed bottom-24 sm:bottom-32 lg:bottom-20 right-[5%] lg:right-[10%] xl:right-[20%]'>
			<Link href='#home'>
				<Image
					width={40}
					height={40}
					src='/images/arrow-up.svg'
					alt='Arrow Up'
					className='bg-[#FAC213] rounded-full opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-500'
				/>
			</Link>
		</footer>
	)
}

export default Footer
