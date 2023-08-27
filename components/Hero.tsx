import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import { PageInfo } from '../types/SanityType'
import { urlFor } from '../sanity'

interface Props {
	pageInfo: PageInfo
}

function Hero({ pageInfo: { heroImage, heroPhrase, role } }: Props) {
	const [text] = useTypewriter({
		words: heroPhrase,
		loop: true,
		delaySpeed: 2500,
		typeSpeed: 50,
		deleteSpeed: 50
	})

	return (
		<section
			id='home'
			className='relative flex flex-col gap-6 w-full items-center justify-center min-h-[100vh] p-5 max-w-7xl mx-auto text-[#F7F7F7] text-center'
		>
			<BackgroundCircles />
			<p className='z-10 h-[60px] mt-[50px] md:h-auto text-2xl md:text-3xl lg:text-4xl font-bold'>
				{text} <Cursor cursorColor='#F8C43A' />
			</p>
			<Image
				src={urlFor(heroImage).url()}
				className='block z-10 object-cover rounded-full bg-[#FAC213]'
				alt='Bryan Lazo Picture'
				width={250}
				height={250}
			/>
			<div className='relative z-10 flex flex-col gap-4 justify-center items-center text-center'>
				<h1 className='text-sm md:text-base uppercase text-gray-500 tracking-[8px] md:tracking-[10px]'>
					{role}
				</h1>

				<div className='flex flex-wrap justify-center md:flex-row gap-4 py-2'>
					<Link href='#about' className='hero-button'>
						About
					</Link>
					<Link href='#experience' className='hero-button'>
						Experience
					</Link>
					<Link href='#projects' className='hero-button'>
						Projects
					</Link>
					<Link href='#contact' className='hero-button'>
						Contact
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Hero
