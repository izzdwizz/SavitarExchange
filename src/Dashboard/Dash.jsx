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
			<div className='relative flex flex-row bg-[#0f172a] h-full '>
				<Sidebar />

				<div className=' bg-slate-900 p-8 h-screen w-full'>
					<div
						className={`flex flex-col z-50 min-h-screen h-full flex-wrap py-4 overflow-auto
						w-full ${toggled ? 'md:ml-20' : ''} `}
					>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default Dash;
