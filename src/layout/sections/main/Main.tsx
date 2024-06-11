import React from 'react';
import hero from './../../../assets/images/main_img.png';
import hero_webp from './../../../assets/images/main_img.webp';
import hero2x from './../../../assets/images/hero@2.png';
import hero3x from './../../../assets/images/hero@3.png';
import styled, { css } from 'styled-components';
import { Button } from '../../../components/button/Button';
import { theme } from '../../../styles/Theme';
import bg_img from './../../../assets/images/bg_items.svg'
import bg_img_mobile from './../../../assets/images/bg_img_mobile.svg';
import { font } from '../../../styles/Mixin';


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
					{/* <Button text='HIRE ME' isIcon={true} iconId='arrow-top' width='32' height='32' viewBox='0 0 32 32' /> */}
				</MainContent>
				<MainImgWrapper >
					<picture>
						<source srcSet={`${hero2x} 2x, ${hero3x} 3x`}type="image/png" />
						<source srcSet={hero_webp} type='image/webp'/>
						<source srcSet={hero} type='image/png'/>
						<img src={hero} alt="main photo" />
					</picture>
				</MainImgWrapper>
			</MainWrapper>
		</MainSection>
	)
}

const MainSection = styled.section`
	background: ${theme.colors.sectionsBg};
	position: relative;
	background: url(${bg_img}) ${theme.colors.sectionsBg} center no-repeat;

	@media ${theme.media.mobile} {
		background: url(${bg_img_mobile}) ${theme.colors.sectionsBg} center 60px no-repeat;
	}
`
const MainWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;

	@media ${theme.media.tablet} {
		flex-direction: column;
		gap: 15px;
	}
`
const MainContent = styled.div`
	max-width: 525px;
	padding: 95px 10px 20px 15px;

	@media ${theme.media.tablet} {
		max-width: none;
		padding: 120px 10px 20px 15px;
	}
	
	button {
		height: 51px;
		border-radius: 5px;
		&:hover{
			
		}
	}
`

const MainTitle = styled.h1`
	${font({ weight: 700, color: theme.colors.boldFont, lineHeight: 1.24, fMax:48, fMin: 30 })}

	span {
		color: ${theme.colors.accent}
	}
`

const MainText = styled.p`
	font-size: 16px;
	margin: 18px 0 42px 0;
`
const MainImgWrapper = styled.div`
	min-width: 325px;
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
	top: 35px;
	left: 15px;
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

