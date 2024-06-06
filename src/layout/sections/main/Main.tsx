import React from 'react';
import hero from './../../../assets/images/main_img.png';
import hero_webp from './../../../assets/images/main_img.webp';
import { FlexWrapper } from '../../../components/FlexWrapper';
import styled, { css } from 'styled-components';
import { Button } from '../../../components/button/Button';
import { theme } from '../../../styles/Theme';
import bg_img from './../../../assets/images/bg_items.svg'

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
			<BurgerMenuButton isOpen={false}>
				<span></span>
			</BurgerMenuButton>
			<MainWrapper >
				<MainContent>
					<MainTitle>I’m Rayan Adlrdard <span>Front-end</span> Developer</MainTitle>
					<MainText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</MainText>
					<Button text='HIRE ME' isIcon={true} iconId='arrow-right' width='11' height='11' viewBox='0 0 11 11' />
				</MainContent>
				<MainImgWrapper >
					<picture>
						<source srcSet={hero_webp} type='image/webp'/>
						<source srcSet={hero} type='image/jpeg'/>
						<img src={hero} alt="main photo" />
					</picture>
				</MainImgWrapper>
			</MainWrapper>
		</MainSection>
	)
}

const MainSection = styled.section`
	background: ${theme.colors.sectionsBg};
	padding: 0px 60px;
	position: relative;
	background: url(${bg_img}) ${theme.colors.sectionsBg} center/contain no-repeat;

	@media ${theme.media.first} {
		padding: 0 20px;
	};
`
const MainWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	@media ${theme.media.tablet} {
		flex-direction: column;
		gap: 15px;
	}
`
const MainContent = styled.div`
	padding: 95px 0 15px 0;
	flex: 1 1 auto;

	@media ${theme.media.tablet} {
		padding: 120px 0 15px 0;
	}
	
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
	font-size: calc( (min(100vw, 1440px) - 320px)/(1440 - 320) * (48 - 30) + 30px);
	span {
		color: ${theme.colors.accent}
	}
`

const MainText = styled.p`
	font-size: 16px;
	margin: 18px 0 42px 0;
	max-width: 480px;

	@media ${theme.media.tablet} {
		max-width: none;
	}
`
const MainImgWrapper = styled.div`

	flex: 0 0 39%;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

`

const BurgerMenuButton = styled.button<{isOpen:boolean}>`
	display: none;
	position: absolute;
	width: 30px;
	height: 18px;
	top: 5%;
	left: 5%;
	z-index: 10002;

	@media ${theme.media.smallScreen} {
		display: block;
	}
	
	span {
		position: absolute;
		display: block;
		background-color: ${theme.colors.accent};
		width: 100%;
		height: 2px;
		top: 7px;
		transition: all 0.3s ease 0s;

		&::before{
			content: '';
			display:block;
			background-color: ${theme.colors.accent};
			width: 100%;
			height: 2px;
			position: absolute;
			transform: translateY(-10px);
			transition: all 0.3s ease 0s;
		}
		&::after{
			content: '';
			position: absolute;
			display: block;
			background-color: ${theme.colors.accent};
			width: 100%;
			height: 2px;
			transform: translateY(10px);
			transition: all 0.3s ease 0s;
		}
	}

	${props => props.isOpen && css<{ isOpen: boolean }>`
			span {
			background-color: rgba(255, 255, 255, 0);
			&::before{
			transform: rotate(45deg) translateY(0px);
			}
			&::after{
				transform: rotate(-45deg) translateY(0px);
			}
		}
	`}
`

