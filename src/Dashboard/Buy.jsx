import React, { useState } from 'react';
const Buy = () => {
	const [activeNavLink, setActiveNavLink] = useState('buy');

	const handleNavLinkClick = (navlink) => {
		setActiveNavLink(navlink);
	};
	return (
		<>
			{' '}
			<div className='bg-transparent flex flex-row justify-center items-center  gap-2 border-[1px] border-[#fbfafa9b] min-h-max min-w-max h-10 w-24 py-[0.1rem] px-[0.1rem] rounded-md '>
				<div
					className={`w-full justify-center items-center h-full rounded-md flex text-[#fbfafae4] ${
						activeNavLink === 'buy' ? 'bg-green-400' : ''
					}`}
					onClick={() => handleNavLinkClick('buy')}
				>
					Buy
				</div>
				<div
					className={`w-full justify-center items-center h-full rounded-md rounded- flex text-[#fbfafae4] ${
						activeNavLink === 'sell' ? 'bg-red-400' : ''
					}`}
					onClick={() => handleNavLinkClick('sell')}
				>
					Sell
				</div>
			</div>
			<div className='TFB h-screen bg-transparent'>
				<div className='flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 justify-center items-center gap-4	h-screen w-full'>
					<div className='bg-slate-800 h-32 w-full  p-4 rounded-md '></div>
					<div className=' flex flex-col bg-transparent border-[1px] text-sm border-[#fbfafa9b] text-[#fbfafae4] h-32 w-full p-4 min-h-max min-w-max rounded-md overflow-hidden '>
						<div className=' col-span-2  w-full flex flex-row justify-start items-start p-2 gap-2 border-b border-[#fbfafa9b]'>
							<p className='rounded-full h-6 w-6 flex items-center justify-center bg-blue-600 '>
								T
							</p>
							<div>
								The_Black_Eye et it<span>icon</span>
							</div>
						</div>
						<div className='rowhold '>
							<div className='mt-2 row2'>
								<div className=' border-l-slate-300'>1125 orders</div>
							</div>
							<div className='row3'> 98.40% Completion</div>

							<div className='row4'>Available Amount: $54500</div>

							<div className='row5'>Rate: 680</div>

							<button className='row6 bg-green-400 rounded-md text-[#fbfafae4] mt-4 font-bold'>
								Buy USDT
							</button>
						</div>
					</div>
					<div className='bg-gray-600 h-32 w-full p-4 rounded-md '></div>
					<div className='bg-gray-600 h-32 w-full p-4 rounded-md '></div>
				</div>
			</div>
		</>
	);
};

export default Buy;
