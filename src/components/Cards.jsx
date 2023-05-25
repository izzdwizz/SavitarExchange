import React from 'react';
import pic2 from '../assets/euro-payment-schedule-5624308-4687610.png';
import pic3 from '../assets/payment-schedule-6151264-5024874.png';
import pic4 from '../assets/pound-payment-schedule-5624331-4687565.png';
const Cards = () => {
	return (
		<div className='w-full py-[10rem] px-4 bg-[#fefefef2]'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
				<div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-xl scale-90 hover:scale-95 duration-700'>
					<img
						className='w-40 bg-transparent mx-auto mt-[-5rem]'
						src={pic2}
						alt='single'
					/>
					<h2 className='text-2xl font-bold text-center py-8 uppercase text-[#e7a619]'>
						Regular
					</h2>
					<p className='text-4xl font-bold text-center'>$20</p>
					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8 '>Only bit payments</p>
						<p className='py-2 border-b mx-8'>$10 - $499</p>
						<p className='py-2 border-b mx-8'>Paid without Priority</p>
					</div>
					<button className='cursor-pointer bg-[#e7a619] w-[200px] rounded-lg font-medium my-6 mx-auto py-3 text-black'>
						Start Now
					</button>
				</div>
				<div className='w-full shadow-xl flex flex-col p-4 my-4 md:scale-105 rounded-xl scale-100 hover:scale-110 duration-700'>
					<img
						className='w-40 bg-transparent mx-auto mt-[-5rem]'
						src={pic3}
						alt='single'
					/>
					<h2 className='text-2xl font-bold text-center py-8 uppercase text-[#e7a619]'>
						Lite
					</h2>
					<p className='text-4xl font-bold text-center'>$70</p>
					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8 '>Only Bulk payments</p>
						<p className='py-2 border-b mx-8'>$499 - $5,999</p>
						<p className='py-2 border-b mx-8'>Paid with Priority</p>
					</div>
					<button className='cursor-pointer text-[#e7a619] w-[200px] rounded-lg font-medium my-6 mx-auto py-3 bg-black'>
						Start Now
					</button>
				</div>
				<div className='w-full shadow-xl flex flex-col p-4 my-4 scale-90 rounded-xl hover:scale-95 duration-700'>
					<img
						className='w-40 mx-auto bg-transparent mt-[-5rem] '
						src={pic4}
						alt='single'
					/>
					<h2 className='text-2xl font-bold text-center py-8 uppercase text-[#e7a619]'>
						Pro
					</h2>
					<p className='text-4xl font-bold text-center'>$150</p>
					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8 '>
							Only Bulk and Mega payments
						</p>
						<p className='py-2 border-b mx-8'>$5,999 - $99,999</p>
						<p className='py-2 border-b mx-8'>Paid with Priority</p>
					</div>
					<button className='cursor-pointer bg-[#e7a619] w-[200px] rounded-lg font-medium my-6 mx-auto py-3 text-black'>
						Start Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cards;
