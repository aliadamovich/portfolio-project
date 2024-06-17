import { createGlobalStyle } from "styled-components";
import { CustomTheme } from "./Theme";
// import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	*::selection {
		background-color: ${props => (props.theme as CustomTheme).colors.accent}
	}

* {
		scrollbar-width: thin; 
		scrollbar-color: ${props => (props.theme as CustomTheme).colors.scroll} ${props => (props.theme as CustomTheme).colors.mainBg}
	}

	*::-webkit-scrollbar {
		width: 8px;
	}
	*::-webkit-scrollbar-track {
		background-color: ${props => (props.theme as CustomTheme).colors.mainBg};

	}
	*::-webkit-scrollbar-thumb {
		background-color: ${props => (props.theme as CustomTheme).colors.scroll};
		border: 2px solid ${props => (props.theme as CustomTheme).colors.mainBg};
		border-radius: 25px;
	}



	body {
		margin: 0;
		font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-size: 15px;
		font-weight: 400;
		line-height: 160%;
		background-color: ${props => (props.theme as CustomTheme).colors.mainBg};
		color: ${props => (props.theme as CustomTheme).colors.mainFont};
		min-width: 375px;

		&.lock {
			overflow: hidden;
		}
	}
	
	a {
		text-decoration: none;
		&:hover{
			text-decoration: none;
		}
	}
	
	ul {list-style: none}
	
	button {
	cursor: pointer;
	background-color: unset;
	border: none;
	}

	h1, h2, h4, h5, h6 {
	font-size: inherit;
	font-weight: 400;
	}
	h3 {
		font-size: 18px;
		font-weight: 500;
		line-height: 123%;
		text-transform: capitalize;
		color: ${props => (props.theme as CustomTheme).colors.boldFont};
		margin-bottom: 15px;
	}
	
	input,
	button,
	textarea {
		font-family: inherit;
	}

`