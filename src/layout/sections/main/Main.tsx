import React from 'react';
import hero from './../../../assets/images/main_img.png'
import { FlexWrapper } from '../../../components/FlexWrapper';
import styled from 'styled-components';
import { Button } from '../../../components/button/Button';
import { theme } from '../../../styles/Theme';

export const Main = () => {
	return (
		<MainSection>
			<FlexWrapper align='center' justify='space-between'>
				<MainContent>
					<MainTitle>I’m Rayan Adlrdard <span>Front-end</span> Developer</MainTitle>
					<MainText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</MainText>
					<Button text='HIRE ME' />
				</MainContent>
				<img src={hero} alt="main photo" />
			</FlexWrapper>
		</MainSection>
	)
}

const MainSection = styled.section`
	background: ${theme.colors.sectionsBg};
	padding: 0 60px;
`

const MainContent = styled.div`
	flex: 0 1 60%;
`

const MainTitle = styled.h1`
	font-size: 48px;
	font-weight: 700;
	line-height: 123.6%;
	color: ${theme.colors.boldFont};

	span {
		color: ${theme.colors.accent}
	}
`

const MainText = styled.p`
	font-size: 16px;
	margin: 18px 0 25px 0;
	max-width: 450px;
`