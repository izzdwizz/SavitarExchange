import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import SignIn from './SignIn';
import Dash from './Dashboard/Dash';
import Home from './Dashboard/Home';
import Buy from './Dashboard/Buy';
import Sell from './Dashboard/Sell';
import Account from './Dashboard/Account';
const Main = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<App />} />
				<Route exact path='/sign-in' element={<SignIn />} />
				<Route exact path='/account/*' element={<Dash />}>
					<Route path='home' element={<Home />} />

					<Route path='buy' element={<Buy />} />
					<Route path='sell' element={<Sell />} />
					<Route path='account' element={<Account />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Main;
