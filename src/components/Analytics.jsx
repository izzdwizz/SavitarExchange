import React from 'react';
import pic from '../assets/bitcoin-exchange-5341941-4466119.png';

const Analytics = () => {
	return (
		<div className='w-full bg-white py-16 px-4'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
				<img
					src={pic}
					alt='laptop'
					className='w-[350px] mx-auto my-4 hover:scale-110 ease-in-out duration-700'
				/>
				<div className='flex flex-col justify-center md:items-start'>
					<p className='text-[#e7a619] uppercase font-bold'>
						Exchange Dashboard
					</p>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
						Manage your portfolio centrally
					</h1>
					<p className='text-left'>
						{' '}
						Discover the power of our crypto platform, offering lightning-fast
						and secure transactions that ensure your funds reach their
						destination in record time. With our ironclad security measures, you
						can enjoy peace of mind knowing that your assets are protected
						throughout every transaction. Plus, we believe in fairness,
						providing transparent and fairly priced transactions with
						competitive fees that won't break the bank.{' '}
					</p>

					<button className='cursor-pointer text-[#e7a619] w-[200px] rounded-lg font-medium my-6 mx-auto md:mx-0 py-3 bg-black hover:scale-105 duration-300'>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
