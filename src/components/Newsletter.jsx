import React from 'react';

const Newsletter = () => {
	return (
		<div className='w-full py-16 text-white px-4'>
			<div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 text-left'>
				<div className='lg:col-span-2 my-4'>
					<h1 className='md:text-4xl text-left sm:text-3xl text-2xl font-bold text'>
						Wants tips & tricks to optimize your flow?
					</h1>
					<p className='md:text-left'>
						Sign up to our newsletter and stay up to date!
					</p>
				</div>
				<div className='my-4'>
					<div className='flex flex-col sm:flex-row items-center justify-between w-full'>
						<input
							type='email'
							className='p-3 flex w-full rounded-lg text-black '
							placeholder='Enter Email'
						/>
						<button className='cursor-pointer bg-[#e7a619] w-[200px] rounded-lg font-medium my-6 ml-4 mx-auto py-3 text-black hover:scale-105 duration-300'>
							Notify Me
						</button>
					</div>
					<p>
						We care about the protection of your data. {''}
						<span className='text-[#e7a619] cursor-pointer hover:opacity-70 '>
							{' '}
							Read our Privacy Policy.
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
