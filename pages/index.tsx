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
import { Experience, PageInfo, Project, Social, Technology } from '../types'

interface Props {
	pageInfo: PageInfo
	technologies: Technology[]
	experience: Experience[]
	projects: Project[]
	socials: Social[]
}

const Home = ({
	experience,
	pageInfo,
	projects,
	socials,
	technologies
}: Props) => {
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
			<Hero pageInfo={pageInfo} />
			<About pageInfo={pageInfo} />
			<WorkExperience experience={experience} />
			<Projects projects={projects} />
			<ContactMe pageInfo={pageInfo} />
			<Footer />
		</div>
	)
}

export default Home

export async function getStaticProps() {
	try {
		const { get } = handleHttp()
		const API_URL = process.env.NEXT_PUBLIC_BASE_URL

		const [
			{ pageInfo },
			{ technologies },
			{ projects },
			{ experience },
			{ socials }
		] = await Promise.all([
			get(`${API_URL}/api/page-info`),
			get(`${API_URL}/api/technology`),
			get(`${API_URL}/api/project`),
			get(`${API_URL}/api/experience`),
			get(`${API_URL}/api/social`)
		])

		return {
			props: {
				socials,
				pageInfo,
				technologies,
				projects,
				experience
			},

			revalidate: 10
		}
	} catch (error) {
		console.log(error)

		return {
			props: {
				pageInfo: [],
				technologies: [],
				experience: [],
				projects: [],
				socials: []
			}
		}
	}
}
