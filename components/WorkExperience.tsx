import React from 'react'
import WorkExperienceCard from './WorkExperienceCard'

function WorkExperience() {
	return (
		<section
			className='relative flex flex-col items-center justify-center pt-40 p-5 sm:px-0 md:flex-row gap-6 max-w-7xl mx-auto min-h-screen'
			id='experience'
		>
			<h2 className='absolute top-24 text-gray-500 text-2xl tracking-[10px] md:tracking-[20px] uppercase ps-[10px] md:ps-[20px]'>
				Experience
			</h2>
			<div className='flex flex-wrap justify-center gap-6 h-full w-full'>
				<WorkExperienceCard />
				<WorkExperienceCard />
				{/* <WorkExperienceCard /> */}
			</div>
		</section>
	)
}

export default WorkExperience
