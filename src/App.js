import './App.css';
import Analytics from './components/Analytics';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import { Fade } from 'react-awesome-reveal';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Banner />
			<Fade cascade triggerOnce>
				<Analytics />
			</Fade>
			<Fade cascade triggerOnce>
				<Newsletter />
			</Fade>
			<Fade cascade triggerOnce>
				<Cards />
			</Fade>
			<Footer />
		</div>
	);
}

export default App;
