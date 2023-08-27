import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Technology } from '../../types'

type Data = {
	message?: string
	technologies?: Technology[]
}

const query = groq`*[_type == "technology"]`

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method !== 'GET') {
		return res.status(405).json({ message: 'Method not allowed' })
	}

	const technologies: Technology[] = await sanityClient.fetch(query)

	return res.status(200).json({ technologies })
}
