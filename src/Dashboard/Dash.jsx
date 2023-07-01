import React, { useState } from 'react';
import { SiHomeassistant } from 'react-icons/si';
import { GiTrade } from 'react-icons/gi';
import { SiSellfy } from 'react-icons/si';
import { MdAccountBalance } from 'react-icons/md';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useStateContext } from '../Context/ContextProvider';

const Dash = () => {
	const { toggled, setToggled } = useStateContext();

	return (
		<>
			<div className='relative flex flex-row bg-slate-800'>
				{/* <div className=' fixed p-8 flex flex-col items-start  justify-start top-0 left-0 w-[20%] bg-slate-950 min-h-screen border-r border-gray-600'>
					<h1 className='w-full absolute top-8 left-6 justify-start text-left text-xl font-bold text-[#e7a619]'>
						enodatio.{' '}
					</h1>
					<ul className='text-[#fbfafa9b] mt-20 flex flex-col gap-4 w-full'>
						<NavLink
							className='flex flex-row items-center gap-4 border-b mb-4 border-b-gray-600  hover:rounded-full border-0 ease-out duration-500 p-4 bg-transparent hover:bg-gray-800 cursor-pointer 
 					'
							onClick={() => {
								setActive(true);
							}}
						>
							<SiHomeassistant />
							Home
						</NavLink>
						<NavLink
							to='/Home'
							className='flex flex-row gap-4 items-center w-full border-b mb-4 border-b-gray-600 hover:rounded-full border-0 ease-out duration-500 p-4 bg-transparent hover:bg-gray-800 cursor-pointer '
							onClick={() => {
								setActive(true);
							}}
						>
							{' '}
							<GiTrade />
							Buy
						</NavLink>
						<NavLink className='flex flex-row items-center gap-4 border-b  mb-4 border-b-gray-600 hover:rounded-full border-0 ease-out duration-500 p-4 bg-transparent hover:bg-gray-800 cursor-pointer '>
							<SiSellfy />
							Sell
						</NavLink>
						<NavLink className='flex flex-row items-center gap-4 border-b  mb-4 border-b-gray-600 hover:rounded-full border-0 ease-out duration-500 p-4 bg-transparent hover:bg-gray-800 cursor-pointer '>
							<MdAccountBalance />
							Account
						</NavLink>
						<NavLink className='flex flex-row items-center gap-4 border-b  mb-4 border-b-gray-600 hover:rounded-full border-0 ease-out duration-500 p-4 bg-transparent hover:bg-gray-800 cursor-pointer '>
							<MdOutlineAccountCircle />
							Account Settings
						</NavLink>
					</ul>
					<Link
						to='/'
						className='flex mt-20 flex-row items-center gap-4 justify-center'
					>
						<CiLogout className='text-[#fbfafadb] cursor-pointer  relative w-[3rem] h-[3rem]' />
						<p className='text-[#fbfafadb]'>Logout</p>
					</Link>
				</div> */}
				<Sidebar />

				<div className=' bg-slate-900 p-8 h-screen w-full'>
					<div
						className={`flex flex-col z-50 min-h-screen  w-full ${
							toggled ? 'md:ml-80' : ''
						} `}
					>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default Dash;
