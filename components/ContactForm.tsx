import { useForm } from '../hooks/useForm'
import { formInitialDetails, initialErrors, validateForm } from '../lib'

function ContactForm() {
	const {
		form,
		errors,
		response,
		isSending,
		handleBlur,
		handleChange,
		handleSubmit
	} = useForm(formInitialDetails, initialErrors, validateForm)

	return (
		<form
			onSubmit={handleSubmit}
			className='relative flex flex-col gap-7 w-fit mx-auto'
		>
			<fieldset className='flex flex-wrap gap-7 sm:gap-4'>
				<div className='grid relative flex-1 w-full'>
					<input
						onBlur={handleBlur}
						onChange={handleChange}
						placeholder='First name'
						className={`contact-input ${errors.firstName && 'error'}`}
						type='text'
						name='firstName'
						autoComplete='off'
						value={form.firstName}
					/>
					{errors.firstName && (
						<p className='error-message'>{errors.firstName}</p>
					)}
				</div>
				<div className='grid relative flex-1 w-full'>
					<input
						onBlur={handleBlur}
						onChange={handleChange}
						placeholder='Last name'
						className={`contact-input ${errors.lastName && 'error'}`}
						type='text'
						name='lastName'
						autoComplete='off'
						value={form.lastName}
					/>
					{errors.lastName && (
						<p className='error-message'>{errors.lastName}</p>
					)}
				</div>
			</fieldset>
			<div className='grid relative flex-1 w-full'>
				<input
					onBlur={handleBlur}
					onChange={handleChange}
					placeholder='Email'
					className={`contact-input ${errors.email && 'error'}`}
					type='email'
					name='email'
					autoComplete='off'
					value={form.email}
				/>
				{errors.email && <p className='error-message'>{errors.email}</p>}
			</div>
			<div className='grid relative flex-1 w-full'>
				<textarea
					onBlur={handleBlur}
					onChange={handleChange}
					placeholder='Message'
					className={`h-[20ch] flex-none contact-input ${
						errors.message && 'error'
					}`}
					name='message'
					autoComplete='off'
					autoCorrect='off'
					spellCheck='false'
					value={form.message}
				/>

				{errors.message && <p className='error-message'>{errors.message}</p>}
			</div>

			<button
				disabled={isSending}
				type='submit'
				className={`contact-button ${isSending ? 'animation-pulse' : ''}`}
			>
				{isSending ? 'Sending...' : 'Send'}
			</button>
			{response.message && (
				<p className='absolute top-[102%] left-0 w-full text-center text-md font-medium text-[#FAC213] uppercase tracking-[3px] animate-pulse'>
					{response.message}
				</p>
			)}
			{errors.form && (
				<p className='absolute top-[102%] left-0 w-full text-center text-md font-medium text-red-500 uppercase tracking-[3px] animate-pulse'>
					{errors.form}
				</p>
			)}
		</form>
	)
}

export default ContactForm
