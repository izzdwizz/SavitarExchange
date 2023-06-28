import React from 'react';
import SignUp from './assets/currency-coin-reward-box-6743487-5580576.png';

const SignIn = () => {
	return (
		<>
			{' '}
			<div className='relative w-full h-screen grid grid-cols-2 overflow-hidden'>
				<div className=' bg-slate-900 min-h-screen flex justify-center items-center'>
					<h1 className='w-full fixed top-4 left-4 justify-start text-left text-3xl font-bold text-[#e7a619]'>
						enodatio.{' '}
					</h1>
					<img src={SignUp} alt='SignIn-img' />
				</div>

				<div className='bg-slate-700 min-h-screen'></div>
			</div>
			;
		</>
	);
};

export default SignIn;
