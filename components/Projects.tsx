import { motion } from 'framer-motion'
import { Project } from '../types'
import ProjectCard from './ProjectCard'

function Projects() {
	const projects: Project[] = [
		{
			id: 1,
			title: 'Country API Rest',
			description:
				"If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.",
			image: '/images/hero.webp'
		},
		{
			id: 2,
			title: 'Calculator App',
			description:
				"This calculator app will be a great test of your CSS and JS skills especially. If you're wanting to practice using Grid, this challenge will be perfect for you!",
			image: '/images/hero.webp'
		},
		{
			id: 3,
			title: 'Project 3',
			description: 'Description 3',
			image: '/images/hero.webp'
		}
	]

	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			viewport={{ once: true }}
			id='projects'
			className='relative  flex flex-col items-center justify-center pt-40 py-5 md:flex-row gap-6 w-full max-w-7xl mx-auto h-screen'
		>
			<h2 className='absolute top-24 text-gray-500 text-2xl tracking-[10px] md:tracking-[20px] uppercase ps-[10px] md:ps-[20px]'>
				Projects
			</h2>
			<div className='w-screen absolute h-[500px] bg-[#F8C43A]/10 z-1 -skew-y-12 top-[25%]' />
			<div className='relative scroll-custom flex items-center justify-between gap-20 md:gap-44 h-full w-full overflow-y-hidden overflow-x-scroll snap-mandatory snap-x px-20 md:px-96'>
				{projects.map((project) => (
					<ProjectCard
						key={project.id}
						numberProjects={projects.length}
						{...project}
					/>
				))}
			</div>
		</motion.section>
	)
}

export default Projects
