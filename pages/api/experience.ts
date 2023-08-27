import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Experience } from '../../types'

type Data = {
	message?: string
	experience?: Experience[]
}

const query = groq`*[_type == "experience"] {
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

	const experience: Experience[] = await sanityClient.fetch(query)

	return res.status(200).json({ experience })
}
