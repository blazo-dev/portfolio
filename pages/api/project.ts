import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Project } from '../../types'

type Data = {
	message?: string
	projects?: Project[]
}

const query = groq`*[_type == "project"] {
	...,
	technologies[]->
}`

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data> 
) {
	if (req.method !== 'GET') {
		return res.status(405).json({ message: 'Method not allowed' })
	}

	const projects: Project[] = await sanityClient.fetch(query)

	return res.status(200).json({ projects })
}
