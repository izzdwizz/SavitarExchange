import React from 'react';
import Typed from 'react-typed';
import video from '../assets/finance.mp4';
const Banner = () => {
	// #e7a619
	// #00df9a
	return (
		<div className='text-white mt-12 '>
			<div className='overlay  h-full w-full  bg-[#17191f] top-0 bottom-0'></div>
			<div className='videoDiv '>
				<video
					className='video'
					src={video}
					loop
					autoPlay
					muted
					type='video/mp4'
				></video>
			</div>
			<div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
				<div className='py-4 px-4 bg-[#fefefe3f] rounded-[40%] md:rounded-full backdrop-blur'>
					<p className='uppercase text-[#e7a619] font-bold p-2'>
						growing with crypto trading
					</p>
					<h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 '>
						Grow with Crypto.
					</h1>
					<div className='flex justify-center items-center'>
						<p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
							Fast, flexible financing for {''}
						</p>
						<Typed
							className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-[#e7a619] max-w-max'
							strings={['P2P', 'Fast Trade', 'Low Fees']}
							typeSpeed={120}
							backSpeed={140}
							loop
						/>
					</div>
					<p className='md:text-2xl text-xl font-bold text-gray-500'>
						{' '}
						Monitor your portfolio growth to increase revenue by trading with us
						today.
					</p>

					<button className='cursor-pointer bg-[#e7a619] w-[200px] rounded-lg font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300'>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
