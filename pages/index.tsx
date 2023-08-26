import type { NextPage } from 'next'
import Head from 'next/head'
import {
	About,
	ContactMe,
	Footer,
	Header,
	Hero,
	Projects,
	WorkExperience
} from '../components'

const Home: NextPage = () => {
	return (
		<div className='flex flex-col items-center justify-between bg-[#252525] text-[#F7F7F7] min-h-screen overflow-x-hidden'>
			<Head>
				<title>Bryan&#39;s Personal Website</title>
				<meta
					name='description'
					content='Personal website for Bryan Lazo fullstack developer'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<Hero />
			<About />
			<WorkExperience />
			<Projects />
			<ContactMe />
			<Footer />
		</div>
	)
}

export default Home
