import Image from 'next/image'
import { WorkExperienceItem } from '../types'
import { motion } from 'framer-motion'

interface Props extends WorkExperienceItem {}

function WorkExperienceCard({}: Props) {
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
						Front End Developer
					</h2>
					<h3 className='font-bold text-lg sm:text-2xl xl:text-3xl text-[#FAC213]'>
						Applaudo Studios
					</h3>
					<time className='text-gray-400 text-sm sm:text-md xl:text-lg'>
						2022 - 2023
					</time>
				</div>
				<div className='flex flex-wrap gap-2'>
					<Image
						src='https://www.vectorlogo.zone/logos/angular/angular-icon.svg'
						alt='Angular icon'
						width={32}
						height={32}
					/>
					<Image
						src='https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
						alt='Angular icon'
						width={32}
						height={32}
					/>
					<Image
						src='https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
						alt='Angular icon'
						width={32}
						height={32}
					/>
				</div>
			</header>
			<div className='grid gap-3 place-content-center'>
				<p className='text-sm sm:text-lg xl:text-xl'>
					Top-notch software development company renowned for crafting custom
					digital solutions, specializing in mobile app development, web
					development, and software engineering.
				</p>
				<ul className='grid gap-2 w-full list-disc pl-5 text-sm sm:text-lg xl:text-xl'>
					<li>
						Developing responsive user interfaces using Angular framework.
					</li>
					<li>
						Implementing front-end features and functionalities based on design
						specifications.
					</li>
					<li>
						Collaborating with the backend team to integrate APIs and manage
						data interactions.
					</li>
					<li>
						Conducting code reviews and ensuring adherence to coding standards.
					</li>
					<li>
						Optimizing application performance and addressing cross-browser
						compatibility issues.
					</li>
					<li>
						Troubleshooting and debugging frontend issues to deliver a seamless
						user experience.
					</li>
				</ul>
			</div>
		</motion.article>
	)
}

export default WorkExperienceCard
