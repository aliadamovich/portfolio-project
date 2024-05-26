import styled from 'styled-components';
import './App.css';
import { Header } from './layout/header/Header';
import { Cv } from './layout/sections/cv/Cv';
import { Main } from './layout/sections/main/Main';
import { Portfolio } from './layout/sections/portfolio/Portfolio';
import { Price } from './layout/sections/price/Price';
import Services from './layout/sections/services/Services';
import { Recomendations } from './layout/sections/recomendations/Recomendations';
import { Education } from './layout/education/Education';
import { Work } from './layout/work/Work';
import { Contact } from './layout/sections/contact/Contact';
import {Footer} from './layout/sections/footer/Footer';
import { Blog } from './layout/sections/blog/Blog';


function App() {
    return (
			<div className='App'>
				<Header />
				<Cv />
				<MainContainer>
					<Main />
					<Price />
					<Recomendations />
					<Education />
					<Work />
					<Services />
					<Portfolio />
					<Blog />
					<Contact />
					<Footer />
				</MainContainer>
			</div>
    );
}

export default App;

const MainContainer = styled.main`
	max-width: 970px;
	margin-left: 335px;
	background: rgb(245, 245, 245);
	>*:not(:last-child) {
		margin-bottom: 120px;
	}
`