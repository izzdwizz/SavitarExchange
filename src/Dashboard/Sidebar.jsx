import React, { useState } from 'react';
import { SiHomeassistant } from 'react-icons/si';
import { GiTrade } from 'react-icons/gi';
import { SiSellfy } from 'react-icons/si';
import { MdAccountBalance } from 'react-icons/md';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';
import { Link, NavLink } from 'react-router-dom';
import { RiCloseFill } from 'react-icons/ri';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Sidebar = () => {
	const [active, setActive] = useState(false);
	const [toggled, setToggled] = useState(true);
	const HandleNav = () => {
		setToggled(!toggled);
	};

	console.log(toggled);
	return (
		<>
			<div
				onClick={HandleNav}
				className='cursor-pointer z-[60] bg-transparent relative top-2 left-0'
			>
				{toggled ? (
					<AiOutlineClose
						size={20}
						className='text-[#fbfafacc] w-10 md:py-1 bg-gray-800 relative left-[11.6rem] md:left-[16rem] ease-in duration-1000  rounded-full '
					/>
				) : (
					<AiOutlineMenu
						size={20}
						className='text-[#fbfafacc] bg-gray-800 relative  rounded-full  '
					/>
				)}
			</div>
			<div
				className={
					toggled
						? ' fixed p-8 flex flex-col items-start   justify-start top-0 left-0 w-[60%] z-50 md:w-[20%] bg-slate-950 min-h-screen border-r border-gray-600 ease-in-out duration-1000'
						: 'fixed left-[-100%]'
				}
			>
				{/* <RiCloseFill className='text-[#fbfafa9b] bg-gray-800 relative top-0 left-[8.7rem] rounded-full p-1 w-4 ' /> */}
				<h1 className='w-full absolute top-5 left-6 justify-start text-left text-xl font-bold text-[#e7a619]'>
					enodatio.{' '}
				</h1>
				<ul className='text-[#fbfafa9b] mt-20 flex flex-col gap-4 w-full'>
					<NavLink
						to='/account/home'
						className='flex flex-row items-center gap-4 border-b mb-4 border-b-gray-600  hover:rounded-full border-0 ease-out duration-500 p-2 text-sm md:text-base md:p-4 bg-transparent hover:bg-gray-800 cursor-pointer 
 					'
						onClick={() => {
							setActive(true);
						}}
					>
						<SiHomeassistant />
						Home
					</NavLink>
					<NavLink
						to='/account/buy'
						className='flex flex-row gap-4 items-center w-full border-b mb-4 border-b-gray-600 hover:rounded-full border-0 ease-out duration-500 p-2 text-sm md:text-base md:p-4 bg-transparent hover:bg-gray-800 cursor-pointer '
						onClick={() => {
							setActive(true);
						}}
					>
						{' '}
						<GiTrade />
						Buy
					</NavLink>
					<NavLink
						to='/account/sell'
						className='flex flex-row items-center gap-4 border-b  mb-4 border-b-gray-600 hover:rounded-full border-0 ease-out duration-500 p-2 text-sm md:text-base md:p-4 bg-transparent hover:bg-gray-800 cursor-pointer '
					>
						<SiSellfy />
						Sell
					</NavLink>
					<NavLink
						to='/account/account'
						className='flex flex-row items-center gap-4 border-b  mb-4 border-b-gray-600 hover:rounded-full border-0 ease-out duration-500 p-2 md:p-4 bg-transparent hover:bg-gray-800 cursor-pointer text-sm md:text-base'
					>
						<MdAccountBalance />
						Account Info
					</NavLink>
					{/* <NavLink  className='flex flex-row items-center gap-4 border-b  mb-4 border-b-gray-600 hover:rounded-full border-0 ease-out duration-500 p-4 bg-transparent hover:bg-gray-800 cursor-pointer '>
						<MdOutlineAccountCircle />
						Account Settings
					</NavLink> */}
				</ul>
				<Link
					to='/'
					className='flex mt-10 md:mt-20 flex-row items-center gap-4 justify-center relative text-sm md:text-base py-2 px-8 md:px-14  hover:bg-gray-800 rounded-md outline-none border-2 border-[#e7a619] hover:bg-transparent hover:border-white hover:text-[#e7a619] font-semibold ease-in-out duration-500'
				>
					<CiLogout className='text-[#fbfafadb] cursor-pointer   relative w-8 h-8 md:w-[3rem] md:h-[3rem]' />
					<p className='text-[#fbfafadb]'>Logout</p>
				</Link>
			</div>
		</>
	);
};

export default Sidebar;
