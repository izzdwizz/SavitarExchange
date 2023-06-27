import React, { useState, useEffect } from 'react';
import pic2 from '../assets/euro-payment-schedule-5624308-4687610.png';
import pic3 from '../assets/payment-schedule-6151264-5024874.png';
import pic4 from '../assets/pound-payment-schedule-5624331-4687565.png';
import { useStateContext } from '../Context/ContextProvider';
const Cards = () => {
	let [bulk_rate, setbulk_rate] = useState();
	let [bits_rate, setbits_rate] = useState();
	let [mega_rate, setmega_rate] = useState();
	let { price } = useStateContext();
	let Btcprice = parseFloat(price).toFixed(2);

	//Rate Calculation Function using switch statement

	const rateValue = () => {
		if (Btcprice > 0 && Btcprice <= 20000) {
			setbulk_rate((800 + Btcprice * 0.0025).toFixed(0));
			setmega_rate((800 - Btcprice * 0.0025).toFixed(0));
			setbits_rate((800 + Btcprice * 0.005).toFixed(0));
		} else if (Btcprice > 20000 && Btcprice <= 30000) {
			setbulk_rate((750 + Btcprice * 0.0025).toFixed(0));
			setmega_rate((750 - Btcprice * 0.0025).toFixed(0));
			setbits_rate((750 + Btcprice * 0.005).toFixed(0));
		} else if (Btcprice > 30000 && Btcprice <= 40000) {
			setbulk_rate((750 + Btcprice * 0.0025).toFixed(0));
			setmega_rate((750 - Btcprice * 0.0025).toFixed(0));
			setbits_rate((750 + Btcprice * 0.005).toFixed(0));
		} else {
			setbulk_rate(700);
			setmega_rate(650);
			setbits_rate(800);
		}
	};

	useEffect(() => {
		rateValue();
	}, [price, rateValue]);

	console.log(bulk_rate, mega_rate, bits_rate);
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
					<p className='text-4xl font-bold text-center'>{bits_rate}</p>
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
					<p className='text-4xl font-bold text-center'>{bulk_rate}</p>
					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8 '>Only Bulk payments</p>
						<p className='py-2 border-b mx-8'>$499 - $5,999</p>
						<p className='py-2 border-b mx-8'>Paid with Priority</p>
						<p className='py-2 border-b mx-8 mt-8 text-sm'>
							Current BTC price:{' '}
							<span>
								${''}
								{Btcprice}
							</span>
						</p>
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
					<p className='text-4xl font-bold text-center'>{mega_rate}</p>
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
