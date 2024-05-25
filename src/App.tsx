import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Portfolio } from './layout/sections/portfolio/Portfolio';
import Services from './layout/sections/services/Services';


function App() {
    return (
			<div className='App'>
				<Header />
				<main>
					<Main />
					<Services />
					<Portfolio />
				</main>
			</div>
    );
}

export default App;
