import React, { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

const StateContext = createContext();
const baseUrl = 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price';
export const ContextProvider = ({ children }) => {
	const [price, setPrice] = useState('');

	useEffect(() => {
		getCurrentPrice();
		const intervalId = setInterval(getCurrentPrice, 10000);

		return () => clearInterval(intervalId);
	}, []);

	const getCurrentPrice = async () => {
		axios
			.get(baseUrl, {
				headers: {
					'x-access-token':
						'coinrankingb0b521302437f6eeac962db6613c638408766e23def98a8a',
				},
				withCredentials: false,
			})
			.then(async (response) => {
				console.log(response.data.data.price);

				const updatedPrice = await response.data.data.price;
				setPrice(updatedPrice);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	console.log(price);
	return (
		<StateContext.Provider
			value={{
				price,
				setPrice,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
