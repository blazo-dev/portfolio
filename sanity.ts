import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! ?? 'ulv6epqn',
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
	useCdn: process.env.NODE_ENV === 'production',
	apiVersion: '2021-03-25'
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) =>
	createImageUrlBuilder(config).image(source)
