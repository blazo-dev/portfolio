import Head from 'next/head'
import {
	About,
	ContactMe,
	Footer,
	Header,
	Hero,
	Projects,
	Skeleton,
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
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		loadProps()
			.then((props) => setProps(props))
			.finally(() => setLoading(false))
	}, [])

	return loading ? (
		<Skeleton />
	) : (
		<main className='flex flex-col items-center justify-between bg-[#252525] text-[#F7F7F7] min-h-screen overflow-x-hidden'>
			<Head>
				<title>Bryan&#39;s Portfolio</title>
				<meta
					name='description'
					content='Bryan Lazo is a Front End Developer'
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
		</main>
	)
}

export default Home

export async function loadProps(): Promise<Props> {
	try {
		const { get } = handleHttp()

		const [{ pageInfo }, { projects }, { experience }, { socials }] =
			await Promise.all([
				get('/api/page-info'),
				get('/api/project'),
				get('/api/experience'),
				get('/api/social')
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
