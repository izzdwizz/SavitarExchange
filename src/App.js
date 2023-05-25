import './App.css';
import Analytics from './components/Analytics';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Banner />
			<Analytics />
			<Newsletter />
			<Cards />
			<Footer />
		</div>
	);
}

export default App;
