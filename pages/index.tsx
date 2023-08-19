import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Hero } from '../components'
import About from '../components/About'

const Home: NextPage = () => {
	return (
		<div className='flex flex-col items-center snap-y snap-proximity bg-[#252525] text-[#F7F7F7] h-screen overflow-hidden overflow-y-scroll scroll-smooth'>
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
			{/* Experience */}
			{/* About */}
			<About />

			{/* Projects */}
			{/* Contact me */}
		</div>
	)
}

export default Home
