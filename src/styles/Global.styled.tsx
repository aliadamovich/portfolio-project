import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		margin: 0;
		font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-size: 15px;
		font-weight: 400;
		line-height: 160%;
		background-color: ${theme.colors.mainBg};
		color: ${theme.colors.mainFont};
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
		color: ${theme.colors.boldFont};
		margin-bottom: 15px;
	}
	
	input,
	button,
	textarea {
		font-family: inherit;
	}
`