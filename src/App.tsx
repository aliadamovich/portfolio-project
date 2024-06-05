import styled, { css } from 'styled-components';
import './App.css';
import { Header } from './layout/header/Header';
import { Cv } from './layout/sections/cv/Cv';
import { Main } from './layout/sections/main/Main';
import { Portfolio } from './layout/sections/portfolio/Portfolio';
import { Price } from './layout/sections/price/Price';
import Services from './layout/sections/services/Services';
import { Recomendations } from './layout/sections/recomendations/Recomendations';
import { Education } from './layout/education/Education';
import { Work } from './layout/sections/work/Work';
import { Contact } from './layout/sections/contact/Contact';
import {Footer} from './layout/sections/footer/Footer';
import { Blog } from './layout/sections/blog/Blog';
import { Container } from './components/Container';


function App() {
    return (
			<div className='App'>
				<Background isOpen={false}/>
				<Header />
				<Cv />
				<Container>
					<Main />
					<Services />
					<Price />
					<Recomendations />
					<Education />
					<Work />
					<Portfolio />
					<Blog />
					<Contact />
					<Footer />
				</Container>
			</div>
    );
}

export default App;

const Background = styled.div<{ isOpen: boolean }>`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #8280805d;
	z-index: 10000;
	display: none;

	${props => props.isOpen && css<{ isOpen: boolean }>`
		display: block;
	`}
`