import type { FormData, FormErrors } from '../types'

export function validateForm(form: FormData): FormErrors {
	const { firstName, email, lastName, message } = form
	const errors: FormErrors = {}

	if (!firstName.trim()) {
		errors.firstName = 'First name is required.'
	} else if (!isValidName(firstName)) {
		errors.firstName = 'Invalid first name.'
	}

	if (!lastName.trim()) {
		errors.lastName = 'Last name is required.'
	} else if (!isValidName(lastName)) {
		errors.lastName = 'Invalid last name.'
	}

	if (!email.trim()) {
		errors.email = 'Email is required.'
	} else if (!isValidEmail(email)) {
		errors.email = 'Invalid email.'
	}

	if (!message.trim()) {
		errors.message = 'Message is required.'
	} else if (!isValidLength(message, 10, 500)) {
		errors.message =
			'Message from 10 to 500 characters.'
	}

	return errors
}

function isValidEmail(email: string): boolean {
	const emailRegex: RegExp = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
	return emailRegex.test(email)
}

function isValidName(name: string): boolean {
	const nameRegex: RegExp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
	return nameRegex.test(name)
}

function isValidLength(
	item: string,
	minLength: number,
	maxLength: number
): boolean {
	const messageRegex: RegExp = new RegExp(`^.{${minLength},${maxLength}}$`)
	return messageRegex.test(item)
}

function isValidPhoneNumber(phoneNumber: string): boolean {
	const phoneNumberRegex: RegExp = /^\d+$/
	return phoneNumberRegex.test(phoneNumber)
}
