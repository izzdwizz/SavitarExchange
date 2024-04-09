import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner';
const Main = () => {
	const App = lazy(() => import('./App'));
	const Dash = lazy(() => import('./Dashboard/Dash'));
	const SignIn = lazy(() => import('./SignIn'));
	const Home = lazy(() => import('./Dashboard/Home'));
	const Account = lazy(() => import('./Dashboard/Account'));
	const Buy = lazy(() => import('./Dashboard/Buy'));
	const Sell = lazy(() => import('./Dashboard/Sell'));

	return (
		<BrowserRouter>
			<Suspense fallback={<Spinner />}>
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
			</Suspense>
		</BrowserRouter>
	);
};

export default Main;
