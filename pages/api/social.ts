import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Social } from '../../types'

type Data = {
	message?: string
	socials?: Social[]
}

const query = groq`*[_type == "social"]`

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method !== 'GET') {
		return res.status(405).json({ message: 'Method not allowed' })
	}

	const socials: Social[] = await sanityClient.fetch(query)

	return res.status(200).json({ socials })
}
