import { motion } from 'framer-motion'
import { PageInfo } from '../types'
import { urlFor } from '../sanity'

interface Props {
	pageInfo: PageInfo
}

function About({ pageInfo: { bioTitle, bioParagraph, profileImage } }: Props) {
	return (
		<motion.section
			id='about'
			className='relative flex flex-col pt-40 md:flex-row items-center gap-6 justify-center md:justify-evenly p-5 sm:px-0 max-w-7xl mx-auto min-h-[100vh]'
		>
			<h2 className='absolute top-24 text-gray-500 text-2xl tracking-[10px] md:tracking-[20px] uppercase ps-[10px] md:ps-[20px]'>
				ABOUT
			</h2>
			<motion.img
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1 }}
				src={urlFor(profileImage).url()}
				className='w-56 h-56 md:w-64 md:h-auto xl:w-96 rounded-full md:rounded-sm object-cover'
			/>
			<div className='grid gap-2 text-center md:text-left'>
				<h4 className='text-xl md:text-2xl font-semibold text-[#FAC213]'>
					{bioTitle}
				</h4>
				{bioParagraph.map((paragraph) => (
					<p key={paragraph.substring(5)} className='text-lg md:text-xl'>
						{paragraph}
					</p>
				))}
			</div>
		</motion.section>
	)
}

export default About
