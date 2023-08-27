import { motion } from 'framer-motion'
import Image from 'next/image'
import { Experience } from '../types'
import { urlFor } from '../sanity'

interface Props {
	experience: Experience
}

function WorkExperienceCard({
	experience: {
		activities,
		description,
		dateEnded,
		dateStarted,
		company,
		jobTitle,
		technologies
	}
}: Props) {
	return (
		<motion.article
			initial={{ y: -100, scale: 0 }}
			transition={{ duration: 1 }}
			whileInView={{ y: 0, scale: 1 }}
			viewport={{ once: true }}
			className='flex flex-col items-center gap-4 rounded-md flex-grow-1 w-full h-full p-6 sm:p-12 snap-center bg-[#2b2b2b]'
		>
			<header className='w-full grid gap-3'>
				<div className='grid gap-2'>
					<h2 className='text-xl sm:text-4xl xl:text-5xl font-light'>
						{jobTitle}
					</h2>
					<h3 className='font-bold text-lg sm:text-2xl xl:text-3xl text-[#FAC213]'>
						{company}
					</h3>
					<time className='text-gray-400 text-sm sm:text-md xl:text-lg'>
						{dateStarted} - {dateEnded === 0 ? 'Present' : dateEnded}
					</time>
				</div>
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
			</header>
			<div className='grid gap-3 place-content-center'>
				<p className='text-sm sm:text-lg xl:text-xl'>{description}</p>
				<ul className='grid gap-2 w-full list-disc pl-5 text-sm sm:text-lg xl:text-xl'>
					{activities.map((activity) => (
						<li key={activity}>{activity}</li>
					))}
				</ul>
			</div>
		</motion.article>
	)
}

export default WorkExperienceCard
