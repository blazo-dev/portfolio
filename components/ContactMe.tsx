import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import ContactForm from './ContactForm'
import { PageInfo } from '../types/SanityType'

interface Props {
	pageInfo: PageInfo
}

function ContactMe({ pageInfo: { email, phoneNumber } }: Props) {
	return (
		<section
			id='contact'
			className='relative flex flex-col pt-40 md:flex-row items-center gap-6 justify-center md:justify-evenly p-5 pb-10 sm:px-0 max-w-7xl mx-auto w-full min-h-screen'
		>
			<h2 className='absolute top-24 text-gray-500 text-2xl tracking-[10px] md:tracking-[20px] uppercase ps-[10px] md:ps-[20px]'>
				Contact
			</h2>

			<div className='flex flex-col justify-center gap-6 md:gap-8 h-full w-full'>
				<h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center'>
					Coffee, Creativity, and Chat.
					<br />
					<span className='border-b-2 border-[#F8C43A]/80'>
						Let&#39;s talk!
					</span>
				</h3>

				<div className='grid gap-4'>
					<div className='flex items-center justify-center'>
						<a href={`tel:${phoneNumber}`} className='contact-link'>
							<PhoneIcon className='text-[currentColor] h-7 w-7 animate-pulse' />
							{phoneNumber}
						</a>
					</div>
					<div className='flex items-center justify-center'>
						<a href={`mailto:${email}`} className='contact-link'>
							<EnvelopeIcon className='text-[currentColor] h-7 w-7 animate-pulse' />
							{email}
						</a>
					</div>
				</div>

				<ContactForm />
			</div>
		</section>
	)
}

export default ContactMe
