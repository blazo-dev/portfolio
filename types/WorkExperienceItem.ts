export interface WorkExperienceItem {
	id: number
	title: string
	company: string
	date: WorkExperienceDate
	description: string
	activities: WorkExperienceActivity[]
	technologies: WorkExperienceTechnology[]
	web: string
}

interface WorkExperienceActivity {
	id: number
	description: string
}

interface WorkExperienceTechnology {
	id: number
	url: string
	alt: string
}

interface WorkExperienceDate {
	startDate: string
	endDate: string
}
