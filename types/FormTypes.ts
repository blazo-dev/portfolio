export type FormData = {
	firstName: string
	lastName: string
	email: string
	message: string
}

export interface FormErrors {
	firstName?: string
	lastName?: string
	email?: string
	message?: string
	form?: string
}

export interface FormResponse {
	status: number
	message: string
}
