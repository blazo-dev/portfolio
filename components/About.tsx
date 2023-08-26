import { motion } from 'framer-motion'

function About() {
	return (
		<motion.section id='about' className='relative flex flex-col pt-40 md:flex-row items-center gap-6 justify-center md:justify-evenly p-5 sm:px-0 max-w-7xl mx-auto min-h-[100vh]'>
			<h2 className='absolute top-24 text-gray-500 text-2xl tracking-[10px] md:tracking-[20px] uppercase ps-[10px] md:ps-[20px]'>
				ABOUT
			</h2>
			<motion.img
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1 }}
				src='/images/about.webp'
				className='w-56 h-56 md:w-64 md:h-auto xl:w-96 rounded-full md:rounded-sm object-cover'
			/>
			<div className='grid gap-2 text-center md:text-left'>
				<h4 className='text-xl md:text-2xl font-semibold text-[#FAC213]'>
					Hello, Bryan Lazo here! Navigating through code, design, and
					creativity to craft the next wave of amazing web experiences.
				</h4>
				<p className='text-lg md:text-xl'>
					Started my career focusing mainly on Front-End development. Gained
					experience in creating user interfaces using Angular. Honed my skills
					in implementing features based on design specifications, collaborating
					with teams to integrate APIs and solve cross-browser compatibility
					issues.
				</p>
				<p className='text-lg md:text-xl'>
					Expanded my skill set by working as a Full Stack developer. Here, my
					focus diversified to include Back-End technologies such as Java and
					Oracle, as well as automation of tasks with UC4. Gained experience in
					database management using PL/SQL and SQL queries.
				</p>
				<p className='text-lg md:text-xl'>
					In my career path, the return to Front-End development is evident.
					Modern technologies such as React, Astro and Next.js now form the core
					of my approach. This professional evolution underscores a deep passion
					and preference for Front-End development, allowing me to apply
					previous experience and an unwavering enthusiasm for the latest trends
					to create exceptional user experiences.
				</p>
			</div>
		</motion.section>
	)
}

export default About
