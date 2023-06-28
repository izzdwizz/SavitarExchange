import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import SignIn from './SignIn';
const Main = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<App />} />
				<Route exact path='/sign-in' element={<SignIn />} />
				{/* <Route exact path='/' element={<App />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default Main;
