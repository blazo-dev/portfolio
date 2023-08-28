function Skeleton() {
	return (
		<main className='flex flex-col items-center justify-between gap-8  bg-[#252525] text-[#F7F7F7] h-screen overflow-x-hidden'>
			<header className='flex items-start justify-between p-6 w-full rounded-b-md max-w-7xl mx-auto z-20 xl:items-center bg-[#2b2b2b] text-[#F8C43A] backdrop-blur-md animate-pulse'>
				<div className='flex gap-4'>
					<div className='rounded-full bg-[#252525] h-10 w-10 animate-pulse'></div>
					<div className='rounded-full bg-[#252525] h-10 w-10 animate-pulse'></div>
				</div>
				<div>
					<div className='rounded-full bg-[#252525] h-10 w-10 animate-pulse'></div>
				</div>
			</header>

			<section className='relative flex flex-col items-center justify-center w-full p-5 sm:px-0 gap-6 max-w-7xl mx-auto h-full bg-[#2b2b2b] text-center animate-pulse'>
				<div className='space-y-3 w-full max-w-2xl'>
					<div className='h-2 bg-[#252525] rounded'></div>
					<div className='h-2 bg-[#252525] rounded'></div>
				</div>
				<div className='rounded-full bg-[#252525] h-40 w-40 animate-pulse'></div>
				<div className='space-y-3 w-full max-w-2xl'>
					<div className='grid grid-cols-3 gap-4'>
						<div className='h-2 bg-[#252525] rounded col-span-2'></div>
						<div className='h-2 bg-[#252525] rounded col-span-1'></div>
					</div>
					<div className='h-2 bg-[#252525] rounded'></div>
				</div>
			</section>
		</main>
	)
}

export default Skeleton
