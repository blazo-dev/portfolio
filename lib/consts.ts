import type { FormData, FormErrors } from '../types'

export const formInitialDetails: FormData = {
	firstName: '',
	lastName: '',
	email: '',
	message: ''
}

export const initialErrors: FormErrors = {}

export const hasEmptyValue = (form: FormData) =>
	Object.values(form).some((value) => !value)
