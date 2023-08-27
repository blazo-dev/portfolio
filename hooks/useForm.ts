import { useState } from 'react'
import type { FormData, FormErrors, FormResponse } from '../types'
import { hasEmptyValue } from '../lib'
import { handleHttp } from './handleHttp'

export function useForm(
	initialForm: FormData,
	initialErrors: FormErrors,
	validateForm: (form: FormData) => FormErrors
) {
	const [form, setForm] = useState<FormData>(initialForm)
	const { post } = handleHttp()
	const [errors, setErrors] = useState<FormErrors>(initialErrors)
	const [isSending, setIsSending] = useState<boolean>(false)
	const [response, setResponse] = useState<FormResponse>({
		status: 0,
		message: ''
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target

		setForm({
			...form,
			[name]: value
		})
	}

	const handleBlur = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		handleChange(e)
		setErrors(validateForm(form))
		setResponse({
			status: 0,
			message: ''
		})
	}

	const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			setErrors(validateForm(form))

			if (Object.keys(errors).length > 0 || hasEmptyValue(form)) {
				return
			}

			setIsSending(true)

			const formRes: FormResponse = await post('/api/mail', {
				body: form,
				headers: {
					'Content-Type': 'application/json;charset=UTF-8',
					Accept: 'application/json'
				}
			})

			setResponse(formRes)
			setForm(initialForm)
		} catch (error: any) {
			setResponse({
				status: error.status,
				message: error.message
			})

			setErrors({
				...errors,
				form: error.message
			})
		} finally {
			setIsSending(false)
		}
	}

	return {
		form,
		errors,
		isSending,
		response,
		handleChange,
		handleBlur,
		handleSubmit
	}
}
