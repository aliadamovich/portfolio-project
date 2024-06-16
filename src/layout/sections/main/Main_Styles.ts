import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import bg_img from './../../../assets/images/bg_items.svg'
import bg_img_mobile from './../../../assets/images/bg_img_mobile.svg';
import { font } from "../../../styles/Mixin";

const MainSection = styled.section`
	background: ${theme.colors.sectionsBg};
	position: relative;
	background: url(${bg_img}) ${theme.colors.sectionsBg} center no-repeat;

	background-attachment: fixed;
	background-position: 65% 7%;
	

	@media ${theme.media.mobile} {
		background: url(${bg_img_mobile}) ${theme.colors.sectionsBg} center 60px no-repeat;
		background-attachment: fixed;
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
	overflow-x: hidden;

	@media ${theme.media.tablet} {
		max-width: none;
		padding: 120px 10px 20px 15px;
	}
	
	button {
		height: 51px;
		border-radius: 5px;
	}
`

const MainTitle = styled.h1`
	${font({ weight: 700, color: theme.colors.boldFont, lineHeight: 1.24, fMax: 48, fMin: 30 })}
	white-space: nowrap;
	p {
		display: none;
	}
`

const MainText = styled.p`
	font-size: 16px;
	margin: 18px 0 42px 0;
`
const MainImgWrapper = styled.div`
	min-width: 270px;

	picture {
		display: flex;
		height: 100%;
		width: 100%;
		justify-content: flex-end;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	@media ${theme.media.tablet} {
		img {
			max-width: 325px;
		}
	}

	@media screen and (max-width:425px){
		picture {
			justify-content: center;
		}
	};
`

export const S = {
	MainSection,
	MainWrapper,
	MainContent,
	MainTitle,
	MainText,
	MainImgWrapper
}