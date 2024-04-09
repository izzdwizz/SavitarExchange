import React, { useContext, createContext, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
const StateContext = createContext();
const baseUrl = 'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price';
export const ContextProvider = ({ children }) => {
	const getCurrentPrice = useQuery('data', async () => {
		return axios
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
	});

	const [price, setPrice] = useState('');
	const [toggled, setToggled] = useState(true);

	// useEffect(() => {
	// 	const intervalId = setInterval(getCurrentPrice, 10000);

	// 	return () => clearInterval(intervalId);
	// }, []);

	console.log(price);
	return (
		<StateContext.Provider
			value={{
				price,
				setPrice,
				toggled,
				setToggled,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
