import React, { useState } from 'react';
import { MdVerified } from 'react-icons/md';
const Buy = () => {
	const [activeNavLink, setActiveNavLink] = useState('Buy');

	const exchangers = [
		{
			name: 'White_Fang',
			icon: 'W',
			orders: Math.floor(Math.random() * 3000) + 1000,
			completion: Math.floor(Math.random() * 100) + 10,
			amount: Math.floor(Math.random() * 10000) + 1000,
			rate: Math.floor(Math.random() * 800) + 600,
			iconStat: false,
		},
		{
			name: 'Uchiha',
			icon: 'U',
			orders: Math.floor(Math.random() * 3000) + 1000,
			completion: Math.floor(Math.random() * 100) + 10,
			amount: Math.floor(Math.random() * 10000) + 1000,
			rate: Math.floor(Math.random() * 800) + 600,
			iconStat: true,
		},
		{
			name: 'Drego',
			icon: 'D',
			orders: Math.floor(Math.random() * 3000) + 1000,
			completion: Math.floor(Math.random() * 100) + 10,
			amount: Math.floor(Math.random() * 10000) + 1000,
			rate: Math.floor(Math.random() * 800) + 600,
			iconStat: false,
		},
		{
			name: 'Quuen-BtC',
			icon: 'W',
			orders: Math.floor(Math.random() * 3000) + 1000,
			completion: Math.floor(Math.random() * 100) + 10,
			amount: Math.floor(Math.random() * 10000) + 1000,
			rate: Math.floor(Math.random() * 800) + 600,
			iconStat: true,
		},
		{
			name: 'Papichulo',
			icon: 'P',
			orders: Math.floor(Math.random() * 3000) + 1000,
			completion: Math.floor(Math.random() * 100) + 10,
			amount: Math.floor(Math.random() * 10000) + 1000,
			rate: Math.floor(Math.random() * 800) + 600,
			iconStat: true,
		},
		{
			name: 'MainCharacter',
			icon: 'I',
			orders: Math.floor(Math.random() * 3000) + 1000,
			completion: Math.floor(Math.random() * 100) + 10,
			amount: Math.floor(Math.random() * 10000) + 1000,
			rate: Math.floor(Math.random() * 800) + 600,
		},
		{
			name: 'Himawari',
			icon: 'H',
			orders: Math.floor(Math.random() * 3000) + 1000,
			completion: Math.floor(Math.random() * 100) + 10,
			amount: Math.floor(Math.random() * 10000) + 1000,
			rate: Math.floor(Math.random() * 800) + 600,
			iconStat: true,
		},
		{
			name: 'Ten-Ten',
			icon: 'T',
			orders: Math.floor(Math.random() * 3000) + 1000,
			completion: Math.floor(Math.random() * 100) + 10,
			amount: Math.floor(Math.random() * 10000) + 1000,
			rate: Math.floor(Math.random() * 800) + 600,
			iconStat: false,
		},
		{
			name: 'Ovito',
			icon: 'O',
			orders: Math.floor(Math.random() * 3000) + 1000,
			completion: Math.floor(Math.random() * 100) + 10,
			amount: Math.floor(Math.random() * 10000) + 1000,
			rate: Math.floor(Math.random() * 800) + 600,
			iconStat: true,
		},
		{
			name: 'FugakU',
			icon: 'F',
			orders: Math.floor(Math.random() * 3000) + 1000,
			completion: Math.floor(Math.random() * 100) + 10,
			amount: Math.floor(Math.random() * 10000) + 1000,
			rate: Math.floor(Math.random() * 800) + 600,
			iconStat: true,
		},
		{
			name: 'Itachi',
			icon: 'I',
			orders: Math.floor(Math.random() * 3000) + 1000,
			completion: Math.floor(Math.random() * 100) + 10,
			amount: Math.floor(Math.random() * 10000) + 1000,
			rate: Math.floor(Math.random() * 800) + 600,
			iconStat: true,
		},
		{
			name: 'ScorpionKing',
			icon: 'S',
			orders: Math.floor(Math.random() * 3000) + 1000,
			completion: Math.floor(Math.random() * 100) + 10,
			amount: Math.floor(Math.random() * 10000) + 1000,
			rate: Math.floor(Math.random() * 800) + 600,
			iconStat: false,
		},
		{
			name: 'General_iroh',
			icon: 'G',
			orders: Math.floor(Math.random() * 3000) + 1000,
			completion: Math.floor(Math.random() * 100) + 10,
			amount: Math.floor(Math.random() * 10000) + 1000,
			rate: Math.floor(Math.random() * 800) + 600,
			iconStat: false,
		},
	];

	const handleNavLinkClick = (navlink) => {
		setActiveNavLink(navlink);
	};
	return (
		<div className='flex flex-col items-center pb-10 mb-52'>
			{' '}
			<div className='bg-transparent flex flex-row justify-center items-center  gap-2 border-[1px] border-[#fbfafa9b] min-h-max min-w-max h-10 w-24 py-[0.1rem] px-[0.1rem] rounded-md '>
				<div
					className={`w-full cursor-pointer justify-center items-center h-full rounded-md flex text-[#fbfafae4] ${
						activeNavLink === 'Buy' ? 'bg-green-400' : ''
					}`}
					onClick={() => handleNavLinkClick('Buy')}
				>
					Buy
				</div>
				<div
					className={`w-full cursor-pointer justify-center items-center h-full rounded-md rounded- flex text-[#fbfafae4] ${
						activeNavLink === 'Sell' ? 'bg-red-400' : ''
					}`}
					onClick={() => handleNavLinkClick('Sell')}
				>
					Sell
				</div>
			</div>
			<div className=' h-screen bg-transparent relative mt-[70rem] md:mt-2'>
				<div className='flex flex-col md:grid md:grid-cols-3 md:grid-flow-row mt-[8rem] justify-center items-center gap-4 mb-10 pb-10 	h-screen w-full'>
					{exchangers.map((exchanger, i) => (
						<div className='flex-wrap py-4'>
							<div className=' flex flex-col scale-90 bg-slate-800  text-sm  text-[#fbfafae4] w-[20rem] p-4 h-max  rounded-md  '>
								<div className=' col-span-2  w-full flex flex-row justify-start items-start p-1 gap-2 border-b border-[#fbfafa6c]'>
									<p className='rounded-full h-6 w-6 flex items-center justify-center bg-blue-600 '>
										{exchanger.icon}
									</p>
									<div className='font-bold flex flex-row justify-center items-center gap-1 text-lg'>
										{exchanger.name}
										{''}
										<span className='text-[#e7a619]'>
											{exchanger.iconStat && <MdVerified />}
										</span>
									</div>
								</div>
								<div className='rowhold '>
									<div className='mt-2 row2'>
										<div className=' border-l-slate-300 mb-2'>
											<span className='font-bold'>
												Orders:{''}
												{''}
											</span>

											{''}

											{exchanger.orders}
										</div>
									</div>
									<div className='row3 mb-2'>
										<span className='font-bold'>Completions:</span> {''}
										{exchanger.completion}%
									</div>

									<div className='row4'>
										<span className='font-bold'>Available Amount:</span> $
										{exchanger.amount}
									</div>

									<div className='row5'>
										<span className='font-bold'>Rate:</span> {exchanger.rate}/$
									</div>

									<button
										className={`row6  rounded-md text-[#fbfafae4] mt-2 p-2 hover:scale-105 ease-in-out duration-500 col-span-2 ${
											activeNavLink === 'Sell' ? 'bg-red-400' : 'bg-green-400'
										}`}
									>
										{activeNavLink} USDT
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Buy;
