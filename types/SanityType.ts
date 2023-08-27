export interface SanityBody {
	_createdAt: string
	_id: string
	_rev: string
	_updatedAt: string
}

export interface Image {
	_type: 'image'
	asset: {
		_ref: string
		_type: 'reference'
	}
}

export interface PageInfo extends SanityBody {
	_type: 'pageInfo'
	bioParagraph: string[]
	bioTitle: string
	email: string
	heroImage: Image
	heroPhrase: string[]
	name: string
	phoneNumber: string
	profileImage: Image
	role: string
	socials: Social[]
}

export interface Social extends SanityBody {
	_type: 'social'
	title: string
	url: string
}

export interface Experience extends SanityBody {
	_type: 'experience'
	activities: string[]
	company: string
	dateEnded: number
	dateStarted: number
	description: string
	jobTitle: string
	technologies: Technology[]
}

export interface Technology extends SanityBody {
	_type: 'skill'
	image: Image
	title: string
}

export interface Project extends SanityBody {
	_type: 'project'
	image: Image
	technologies: Technology[]
	title: string
	url: string
	repository: string
}
