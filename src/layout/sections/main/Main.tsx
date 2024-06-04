import React from 'react';
import hero from './../../../assets/images/main_img.png'
import { FlexWrapper } from '../../../components/FlexWrapper';
import styled from 'styled-components';
import { Button } from '../../../components/button/Button';
import { theme } from '../../../styles/Theme';

type BgRoundElementsPropsType = {
	top: string
	left: string
	color?: string
	before?: string
}

type BgSquareElementsPropsType = {
	top: string
	left: string
	color?: string
	before?: string
}
export const Main = () => {
	return (
		<MainSection>
			{/* <Layer /> */}
			<BgRoundElements top='5%' left='5%'></BgRoundElements>
			<BgRoundElements top='85%' left='60%'></BgRoundElements>
			<BgRoundElements top='10%' left='55%' color='rgba(5, 255, 0, 0.8)'></BgRoundElements>
			<BgRoundElements top='93%' left='10%' color='rgba(5, 255, 0, 0.8)'></BgRoundElements>
			<BgSquareElements top='15%' left='93%'></BgSquareElements>
			<BgSquareElements top='70%' left='45%' color='rgba(0, 71, 255, 0.8)'></BgSquareElements>
			<TriangleElement></TriangleElement>

			<FlexWrapper align='center' justify='space-between'>
				<MainContent>
					<MainTitle>I’m Rayan Adlrdard <span>Front-end</span> Developer</MainTitle>
					<MainText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</MainText>
					<Button text='HIRE ME' isIcon={true} iconId='arrow-right' width='11' height='11' viewBox='0 0 11 11' />
				</MainContent>
				<MainImage src={hero} alt="main photo" />
			</FlexWrapper>
		</MainSection>
	)
}

const MainSection = styled.section`
	background: ${theme.colors.sectionsBg};
	padding: 0px 60px;
	position: relative;
`

const MainContent = styled.div`
	padding-top: 42px;
	flex: 0 1 60%;
	button {
		height: 51px;
		border-radius: 5px;
	}
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
	margin: 18px 0 42px 0;
	max-width: 480px;
`

const MainImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`
// const Layer = styled.div`
// 	width: 100%;
// 	height: 100%;
// 	position: absolute;
// 	top: 0;left: 0;right: 0;bottom: 0;

// 	&::before{
// 	content: '';
		
// 	}
	
// `

const BgRoundElements = styled.span<BgRoundElementsPropsType>`
	display: inline-block;
	position: absolute;
	width: 16px;
	height: 16px;
	top: ${props => props.top};
	left: ${props => props.left};
	border: 2px solid ${ props => props.color || theme.colors.accent};
	border-radius: 50%;

`
const BgSquareElements = styled.span<BgSquareElementsPropsType>`
	display: inline-block;
	position: absolute;
	width: 16px;
	height: 16px;
	top: ${props => props.top};
	left: ${props => props.left};
	border: 2px solid ${ props => props.color || theme.colors.accent};
	transform: rotate(26deg);
`

const TriangleElement = styled.span`
	position: absolute;
	width: 0;
	height: 0;
	top: 90%;
	left: 95%;
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-bottom: 16px solid rgba(255, 46, 0, 0.8);
	
	&::after{
		content: '';
		position: absolute;
		top: 5px;
		left: -4px;
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-bottom: 9px solid white;
	}

`