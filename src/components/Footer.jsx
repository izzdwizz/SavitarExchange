import React from 'react';
import {
	FaLinkedinIn,
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagram,
	FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
			<div>
				<h1 className='w-full text-3xl text-left font-bold text-[#e7a619]'>
					enodatio.
				</h1>
				<p className='py-4 text-left'>
					Seamless Transactions. Fair Prices. Lightning-Fast Speed. At enodatio.
					<sup>TM</sup>, we prioritize your satisfaction with our transparent
					pricing and efficient transaction processes. Experience the
					convenience of transacting with us for a seamless, fair-priced, and
					speedy financial experience.
				</p>
				<div className='flex justify-between md:w-[75%] my-6'>
					<FaFacebookSquare
						size={30}
						className='cursor-pointer hover:scale-125 duration-300'
					/>
					<FaInstagram
						size={30}
						className='cursor-pointer hover:scale-125 duration-300'
					/>
					<FaTwitterSquare
						size={30}
						className='cursor-pointer hover:scale-125 duration-300'
					/>
					<FaLinkedinIn
						size={30}
						className='cursor-pointer hover:scale-125 duration-300'
					/>
					<FaGithubSquare
						size={30}
						className='cursor-pointer hover:scale-125 duration-300'
					/>
				</div>
			</div>
			<div className='lg:col-span-2 flex justify-between mt-6'>
				<div>
					<h6 className='font-medium text-gray-400 mb-2'>Solutions</h6>
					<ul>
						<li className='py-2 text-sm hover:opacity-70 cursor-pointer'>
							P2P
						</li>
						<li className='py-2 text-sm hover:opacity-70 cursor-pointer'>
							Marketing
						</li>
						<li className='py-2 text-sm hover:opacity-70 cursor-pointer'>
							Contact
						</li>
						<li className='py-2 text-sm hover:opacity-70 cursor-pointer'>
							insights
						</li>
					</ul>
				</div>
				<div>
					<h6 className='font-medium text-gray-400 mb-2'>Support</h6>
					<ul>
						<li className='py-2 text-sm hover:opacity-70 cursor-pointer'>
							Pricing
						</li>
						<li className='py-2 text-sm hover:opacity-70 cursor-pointer'>
							Documentation
						</li>
						<li className='py-2 text-sm hover:opacity-70 cursor-pointer'>
							Guides
						</li>
						<li className='py-2 text-sm hover:opacity-70 cursor-pointer'>
							API status
						</li>
					</ul>
				</div>
				<div>
					<h6 className='font-medium text-gray-400 mb-2'>Company</h6>
					<ul>
						<li className='py-2 text-sm hover:opacity-70 cursor-pointer'>
							Jobs
						</li>
						<li className='py-2 text-sm hover:opacity-70 cursor-pointer'>
							About
						</li>
						<li className='py-2 text-sm hover:opacity-70 cursor-pointer'>
							Careers
						</li>
						<li className='py-2 text-sm hover:opacity-70 cursor-pointer'>
							Press
						</li>
					</ul>
				</div>
				<div>
					<h6 className='font-medium text-gray-400 mb-2'>Legal</h6>
					<ul>
						<li className='py-2 text-sm hover:opacity-70 cursor-pointer'>
							Policy
						</li>
						<li className='py-2 text-sm hover:opacity-70 cursor-pointer'>
							claim
						</li>
						<li className='py-2 text-sm hover:opacity-70 cursor-pointer'>
							Terms
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
