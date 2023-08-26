// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { FormData } from '../../types'
import { transporter, mailOptions } from '../../config'

type Data = {
	status: number
	message: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method !== 'POST')
		return res.status(405).json({ status: 405, message: 'Method not allowed' })

	const { email, message, firstName, lastName }: FormData = req.body

	if (!email || !message || !firstName || !lastName)
		return res
			.status(405)
			.json({ status: 405, message: 'Some of your fields were empty' })

	try {
		await transporter.sendMail({
			...mailOptions,
			subject: `Contact form from Portfolio`,
			text: message,
			html: `<h3>${firstName} ${lastName}</h3><h3>${email}</h3><h1>${message}</h1>`
		})

		return res.status(200).json({ status: 200, message: 'Form has been sent!' })
	} catch (error: any) {
		console.error(error)
		return res
			.status(404)
			.json({ status: 404, message: error.message || 'Not found' })
	}
}
