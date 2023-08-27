import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../sanity'
import { Project } from '../types'
import { SocialIcon } from 'react-social-icons'

interface Props extends Project {
	numberProjects: number
	position: number
}

function ProjectCard({
	position,
	_id,
	title,
	image,
	url,
	numberProjects,
	technologies,
	repository
}: Props) {
	return (
		<article className='flex flex-col justify-center items-center  gap-2 px-20 md:px-44 h-full flex-grow-1 flex-shrink-0 snap-center'>
			<header>
				<motion.img
					initial={{ y: -200, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					src={urlFor(image).url()}
					alt={title}
					className='w-[250px] sm:w-[350px] md:w-[450px] lg:w-[625px] object-cover rounded-md'
				/>
			</header>
			<div className='flex flex-wrap gap-2'>
				{technologies.map((technology) => (
					<Image
						key={technology._id}
						src={urlFor(technology.image).url()}
						alt={technology.title}
						width={32}
						height={32}
					/>
				))}
			</div>
			<div className='grid gap-3 w-[250px] sm:w-[450px]'>
				<h3 className='text-2xl sm:text-4xl font-semibold text-center'>
					{title}
				</h3>
				<span className='justify-self-center text-lg sm:text-xl font-semibold border-b-2 border-[#F8C43A]/80'>
					Project #{position} of {numberProjects}
				</span>
				<div className='flex flex-wrap gap-4 justify-center'>
					<SocialIcon
						url={url}
						fgColor='currentColor'
						bgColor='transparent'
						network='sharethis'
						label='Live Demo'
						target='_blank'
						className='hover:text-[#F8C43A] transition-colors duration-500 cursor-pointer'
					/>
					<SocialIcon
						url={repository}
						network='github'
						fgColor='currentColor'
						bgColor='transparent'
						label='Github Repository'
						target='_blank'
						className='hover:text-[#F8C43A] transition-colors duration-500 cursor-pointer'
					/>
					
				</div>
			</div>
		</article>
	)
}

export default ProjectCard
