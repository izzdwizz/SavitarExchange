import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import avatar from '../assets/prof.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [toggled, setToggled] = useState(false);
	const [logged, setLogged] = useState(false);
	const HandleNav = () => {
		setToggled(!toggled);
	};
	return (
		<div className='flex justify-between items-center h-24  max-w-[1240px] mx-auto px-4 text-white z-50'>
			<h1 className='w-full justify-start text-left text-3xl font-bold text-[#e7a619]'>
				enodatio.{' '}
			</h1>

			<ul className='hidden md:flex '>
				<li className='p-4 cursor-pointer hover:opacity-80'>Home</li>

				<li className='p-4 cursor-pointer hover:opacity-80'>Company</li>

				<li className='p-4 cursor-pointer hover:opacity-80'>Resources</li>

				<li className='p-4  w-max cursor-pointer hover:opacity-80'>About Us</li>

				<li className='p-4 cursor-pointer hover:opacity-80'>Contact</li>
			</ul>

			{!logged ? (
				<Link to='/sign-in'>
					<div className='hidden md:block w-[10rem]  py-[0.6rem] rounded-md cursor-pointer relative outline-none border-2 ml-8 border-[#e7a619] hover:bg-transparent hover:border-white hover:text-[#e7a619] font-semibold ease-in-out duration-500'>
						Sign In
					</div>
				</Link>
			) : (
				<div className=' hidden md:flex flex flex-row items-center gap-4 justify-end min-w-fit p-0 m-0'>
					{' '}
					<img
						src={avatar}
						className=' rounded-full ml-16 h-[2rem] w-[2rem]'
						alt='ProfileImage'
					/>
					<h1 className='min-w-fit font-medium'>Welcome, Izuchukwu!</h1>
				</div>
			)}

			<div onClick={HandleNav} className='block md:hidden '>
				{toggled ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>

			<div
				className={
					toggled
						? 'fixed left-0 top-0 h-full w-[60%] bg-[#000300] border-r border-r-gray-900 ease-in-out duration-1000 z-10'
						: 'fixed left-[-100%]'
				}
			>
				<h1 className='w-full justify-start text-left text-3xl font-bold text-[#e7a619] m-4'>
					enodatio.{' '}
				</h1>
				<ul className='pt-24 uppercase p-4 '>
					<li className='p-4 border-b border-b-gray-600'>Home</li>

					<li className='p-4 border-b border-b-gray-600'>Company</li>

					<li className='p-4 border-b border-b-gray-600'>Resources</li>

					<li className='p-4 border-b border-b-gray-600'>About Us</li>

					<li className='p-4 border-b border-b-gray-600'>Contact</li>
				</ul>
				{!logged ? (
					<Link to='/sign-in'>
						<div className='w-[10rem] py-[0.6rem] mt-8 rounded-md cursor-pointer relative outline-none border-2 ml-8 border-[#e7a619] hover:bg-transparent hover:border-white hover:text-[#e7a619] font-semibold ease-in-out duration-500'>
							Sign In
						</div>
					</Link>
				) : (
					<div className='flex flex-row items-center gap-4 justify-center min-w-fit p-0 m-0'>
						{' '}
						<img
							src={avatar}
							className=' rounded-full h-[1rem] w-[1rem]'
							alt='ProfileImage'
						/>
						<h1 className='min-w-fit text-sm'>Welcome, Izuchukwu!</h1>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
