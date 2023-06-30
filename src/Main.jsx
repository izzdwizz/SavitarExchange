import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import SignIn from './SignIn';
import Dash from './Dashboard/Dash';
const Main = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<App />} />
				<Route exact path='/sign-in' element={<SignIn />} />
				<Route exact path='/account*' element={<Dash />}>
					<Route path='Home' elemnt={<Home />} />

					<Route path='Buy' elemnt={<Buy />} />
					<Route path='Sell' elemnt={<Sell />} />
					<Route path='Account' elemnt={<Account />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Main;
