import React, { useState } from 'react';
import SignUp from './assets/currency-coin-reward-box-6743487-5580576.png';
import { AiOutlineMoneyCollect } from 'react-icons/ai';
import { RiLoginCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import qrCode from './assets/app-qr.2ba45e6c.png';
import AppleLogo from './assets/icons8-app-store-240.png';
import play from './assets/icons8-google-play-store-48.png';
const SignIn = () => {
	const [already, setAlready] = useState(false);

	return (
		<>
			{' '}
			<div className='relative w-full h-screen grid grid-cols-2 overflow-hidden make_small bg-cyan-50 gap-[0.1rem]'>
				<h1 className='w-full absolute top-4 left-4 justify-start text-left text-3xl font-bold text-[#e7a619]'>
					enodatio.{' '}
				</h1>
				<div className=' bg-slate-900 min-h-screen flex flex-col justify-center items-center make_smallest '>
					<h1 className='w-full absolute top-4 left-4 justify-start text-left text-3xl font-bold text-[#e7a619]'>
						enodatio.{' '}
					</h1>
					<img src={SignUp} className='w-[30rem]' alt='SignIn-img' />

					<div className='absolute bottom-8 left-8'>
						<h2 className=' text-[#e7a619] font-extrabold text-xl '>
							Built For Your Convenience
						</h2>
						<p className='text-cyan-50 flex flex-row gap-4 justify-center items-center font-bold text-base mt-2'>
							SIGN UP <AiOutlineMoneyCollect className='text-[#e7a619]' /> SEND
							COINS
							<AiOutlineMoneyCollect className='text-[#e7a619]' /> GET PAID
						</p>
					</div>
				</div>

				<div className='bg-slate-800 min-h-screen flex flex-col justify-center items-center make_smaller'>
					<div className='flex flex-col justify-center items-center mb-8'>
						<RiLoginCircleFill className='text-[#e7a619] mt-4 w-[7rem] h-[7rem] hover:-rotate-180 hover:scale-110 ease-in-out duration-1000' />
						<p className='font-bold text-[#e7a619] my-4 text-lg '>
							Let's get you ready to Earn!
						</p>

						<form action='submit' className='flex flex-col w-[14rem] mt-4'>
							{already ? (
								<>
									<label
										htmlFor='username'
										className='mb-2 text-slate-100 font-semibold'
									>
										Username
									</label>
									<input
										id='username'
										type='text'
										className='rounded-[10px] p-2 outline-none'
									/>
									<label
										htmlFor='password'
										className='mb-2 text-slate-100 mt-4 font-semibold'
									>
										Password
									</label>
									<input
										type='password'
										className='rounded-[10px] p-2 outline-none'
									/>
									<p className='text-sm mt-2 text-cyan-50 cursor-pointer hover:underline ease-in-out duration-1000'>
										Forgot Password?
									</p>

									<button
										onClick={(e) => {
											e.preventDefault();
										}}
										className='mt-8 rounded-full py-4 bg-black text-[#e7a619] hover:text-black hover:bg-[#e7a619] ease-in-out duration-500 hover:font-bold'
									>
										<Link to='/account'> Sign In </Link>
									</button>
								</>
							) : (
								<>
									<label
										htmlFor='username'
										className='mb-0 text-slate-100 font-semibold text-sm'
									>
										Username
									</label>
									<input
										id='username'
										type='text'
										className='rounded-[10px] px-2 py-1 outline-none'
									/>
									<label
										htmlFor='email'
										className='mb-0 text-slate-100 mt-2 font-semibold text-sm'
									>
										Email Address
									</label>
									<input
										type='email'
										className='rounded-[10px] px-2 py-1 outline-none'
									/>
									<label
										htmlFor='password'
										className='mb-0 text-slate-100 mt-2 font-semibold text-sm'
									>
										Password
									</label>
									<input
										type='password'
										className='rounded-[10px] px-2 py-1 outline-none'
									/>
									<label
										htmlFor='Wallet Address'
										className='mb-0 text-slate-100 mt-2 font-semibold text-sm'
									>
										Preferred Wallet Address
									</label>
									<input
										type='text'
										className='rounded-[10px] px-2 py-1 outline-none'
									/>
									<p className='text-sm mt-2 text-cyan-50  ease-in-out duration-1000'>
										Already have an account?{' '}
										<span
											onClick={() => {
												setAlready(true);
											}}
											className='cursor-pointer hover:underline text-[#e7a619]'
										>
											Sign Up
										</span>
									</p>

									<button
										onClick={(e) => {
											e.preventDefault();
										}}
										className='mt-8 rounded-full py-4 bg-black text-[#e7a619] hover:text-black hover:bg-[#e7a619] ease-in-out duration-500 hover:font-bold'
									>
										<Link to='/account'> Sign In </Link>
									</button>
								</>
							)}
						</form>
						<div className='grid grid-cols-3 grid-rows-2 place-items-center gap-0 md:flex md:flex-row justify-around bg-slate-800 md:bg-slate-700 md:mt-10 mt-7 rounded-[8px] w-[22rem]  md:w-[40rem] md:items-center p-0  '>
							<img
								src={qrCode}
								className=' mt-auto md:mt-0 w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem]'
								alt='download-qr'
							/>
							<div className=' mt-2 flex flex-col justify-start items-center col-span-2 md:col-span-1 affect_small'>
								<h1 className='text-[#e7a619] font-bold md:text-base text-[0.7rem]'>
									Scan to Download the Enodatio App.
								</h1>{' '}
								<p className='text-cyan-50 w-full md:text-xs text-[0.48rem]'>
									{' '}
									<span className='text-[#e7a619]'>•</span> Premium Features{' '}
									<span className='text-[#e7a619]'>•</span> Fast Transactions{' '}
									<span className='text-[#e7a619]'>•</span> Easy Access
								</p>
							</div>
							<div className='flex md:flex-col flex-row items-center justify-center p-4 gap-2 col-span-3 md:col-span-1'>
								<div className='flex-row rounded-full gap-2 bg-slate-600 py-[0.1rem] px-4 flex justify-center items-center text-cyan-50 font-light text-xs hover:opacity-90 cursor-pointer'>
									<img
										src={AppleLogo}
										className='w-[1rem] h-[1rem]'
										alt='Get on apple'
									/>

									<p className='flex flex-col text-[0.5rem]'>
										Download on{' '}
										<span className='text-xs font-normal'>Apple Store</span>
									</p>
								</div>

								<div className='justify-center items-center  text-cyan-50 font-light text-xs gap-2 bg-slate-600 py-[0.1rem] px-4 flex flex-row rounded-full hover:opacity-90 cursor-pointer'>
									<img
										src={play}
										alt='Get on play'
										className='w-[1rem] h-[1rem]'
									/>
									<p className='flex flex-col text-[0.5rem]'>
										Download on{' '}
										<span className='text-xs font-normal'>Play Store</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			;
		</>
	);
};

export default SignIn;
