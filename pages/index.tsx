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
import { handleHttp } from '../hooks'
import { Experience, PageInfo, Project, Social } from '../types'
import { useEffect, useState } from 'react'

interface Props {
	pageInfo: PageInfo | null
	experience: Experience[]
	projects: Project[]
	socials: Social[]
}

const initialProps: Props = {
	pageInfo: null,
	experience: [],
	projects: [],
	socials: []
}

const Home = () => {
	const [{ experience, pageInfo, projects, socials }, setProps] =
		useState<Props>(initialProps)

	useEffect(() => {
		loadProps().then((props) => setProps(props))
	}, [])

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

			<Header socials={socials} />
			{pageInfo && <Hero pageInfo={pageInfo} />}
			{pageInfo && <About pageInfo={pageInfo} />}
			<WorkExperience experience={experience} />
			<Projects projects={projects} />
			{pageInfo && <ContactMe pageInfo={pageInfo} />}
			<Footer />
		</div>
	)
}

export default Home

export async function loadProps(): Promise<Props> {
	try {
		const { get } = handleHttp()
		const API_URL = process.env.NEXT_PUBLIC_BASE_URL

		const [{ pageInfo }, { projects }, { experience }, { socials }] =
			await Promise.all([
				get(`${API_URL}/api/page-info`),
				get(`${API_URL}/api/project`),
				get(`${API_URL}/api/experience`),
				get(`${API_URL}/api/social`)
			])

		if (!pageInfo || !projects || !experience || !socials) {
			throw new Error('Algunos datos son indefinidos o nulos')
		}

		return {
			socials,
			pageInfo,
			projects,
			experience
		}
	} catch (error) {
		console.log(error)
		return {
			socials: [],
			pageInfo: null,
			projects: [],
			experience: []
		}
	}
}
