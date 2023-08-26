import { motion } from 'framer-motion'
import { Project } from '../types'

interface Props extends Project {
	numberProjects: number
}

function ProjectCard({ id, title, description, image, numberProjects }: Props) {
	return (
		<article className='flex flex-col justify-center items-center  gap-2 px-20 md:px-44 h-full flex-grow-1 flex-shrink-0 snap-center'>
			<header>
				<motion.img
					initial={{ y: -200, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.5 }}
					viewport={{ once: true }}
					src={image}
					alt={title}
					className='w-[200px] sm:w-[350px] object-cover'
				/>
			</header>
			<div className='grid gap-3 w-[250px] sm:w-[450px]'>
				<h3 className='text-2xl sm:text-4xl font-semibold text-center'>
					{title}
					<br />
					<span className='border-b-2 border-[#F8C43A]/80'>
						Project #{id} of {numberProjects}
					</span>
				</h3>

				<p className='text-sm sm:text-lg text-center'>{description}</p>
			</div>
		</article>
	)
}

export default ProjectCard
