import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
	const [toggled, setToggled] = useState(false);

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
			<div onClick={HandleNav} className='block md:hidden '>
				{toggled ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>

			<div
				className={
					toggled
						? 'fixed left-0 top-0 h-full w-[60%] bg-[#000300] border-r border-r-gray-900 ease-in-out duration-1000'
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
			</div>
		</div>
	);
};

export default Navbar;
