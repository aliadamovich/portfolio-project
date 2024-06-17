import styled, { ThemeProvider } from 'styled-components';
import { Header } from './layout/header/Header';
import { Cv } from './layout/sections/cv/Cv';
import { Main } from './layout/sections/main/Main';
import { Portfolio } from './layout/sections/portfolio/Portfolio';
import { Price } from './layout/sections/price/Price';
import {Services} from './layout/sections/services/Services';
import { Recomendations } from './layout/sections/recomendations/Recomendations';
import { Education } from './layout/education/Education';
import { Work } from './layout/sections/work/Work';
import { Contact } from './layout/sections/contact/Contact';
import {Footer} from './layout/sections/footer/Footer';
import { Blog } from './layout/sections/blog/Blog';
import { Container } from './components/Container';
import { darkTheme, theme } from './styles/Theme';
import { Particle } from './components/particle/Particle';
import { useState } from 'react';
import { GlobalStyles } from './styles/Global.styled';



const App = () => {

	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};
	
    return (
			<ThemeProvider theme={isDarkMode ? darkTheme : theme}>
				<GlobalStyles />
				<StyledApp>
					<Particle/>
					<Wrapper>
						<Header onBtnClick={toggleTheme} isDarkMode={isDarkMode}/>
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
					</Wrapper>
				</StyledApp>
		</ThemeProvider>
    );
}

export default App;

const StyledApp = styled.div`
	position: relative;
`

const Wrapper = styled.div`
	display: flex;
	gap: 30px;
	

	@media ${theme.media.smallScreen} {
		gap: 0px;
	}
	
	@media ${theme.media.mobile} {
		flex-direction: column;
	}
`
