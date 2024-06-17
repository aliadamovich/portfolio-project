import styled from "styled-components"
// import { theme } from "../../styles/Theme"

//header

const Header = styled.header`
	position: sticky;
	order: 3;
	z-index: 999;
	top: 0;
	right: 0;
	max-width: 105px;
	width: 100%;
	min-height: 100vh;
	height: 100vh;
	padding: 48px 2px;
	display: flex;
	flex-direction: column;
	gap: 40px;
	gap: calc( (min(100vw,1440px) - 576px)/(1440 - 576) * (125 - 55) + 55px);
	background-color: ${props => props.theme.colors.headerBg};
	overflow-x: hidden;
	overflow-y: auto;
	
	@media ${props => props.theme.media.first} {
		max-width: 75px;
	}

	@media ${props => props.theme.media.mobile} {
		flex-direction: row;
		align-items: center;
		justify-content: center;
		position: static;
		bottom: 0;
		right: 0;
		left: 0;
		width: 100%;
		max-width: 100%;
		height: 80px;
		gap: 25px;
		padding: 0;
		min-height: 80px;
	}
`

const DarkMode = styled.button<{isDarkMode: boolean}>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	transition: all 1s ease 0s;
	color: ${props => props.isDarkMode ? props.theme.colors.accent : props.theme.colors.boldFont};
	&:hover{
		color: ${props => props.isDarkMode ? props.theme.colors.accent : props.theme.colors.boldFont};
	}
`

export const S = {
	Header,
	DarkMode
}