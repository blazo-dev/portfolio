import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { PageInfo } from '../../types'

type Data = {
	message?: string
	pageInfo?: PageInfo
}

const query = groq`*[_type == "pageInfo"][0]{
	...,
	socials[]->
}`

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method !== 'GET') {
		return res.status(405).json({ message: 'Method not allowed' })
	}

	const pageInfo: PageInfo = await sanityClient.fetch(query)

	return res.status(200).json({ pageInfo })
}
