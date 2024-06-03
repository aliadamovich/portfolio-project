import styled from "styled-components";
import { Nav } from "../../components/nav/Nav";
import { Icon } from "../../components/icon/Icon";
import { theme } from "../../styles/Theme";

export const Header = () => {

	const icons = ['m-1', 'm-2', 'm-3', 'm-4', 'm-5', 'm-6']

	return(
		<StyledHeader>

			<MoonButton>
				<Icon iconId="moon" width="30" height="30" viewBox="0 0 30 30" fill='currentColor'/>
			</MoonButton>
			<Nav menuIcons={icons}/>

		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	position: fixed;
	z-index: 9999;
	top: 0;
	right: 0;
	max-width: 105px;
	width: 100%;
	min-height: 100vh;
	height: 100%;
	padding: 48px 5px;
	display: flex;
	flex-direction: column;
	gap: 208px;
	background-color: ${theme.colors.headerBg};

	/* @media (max-width:1024px){
		display: none;
	}; */
`

const MoonButton = styled.button`
	color: ${theme.colors.boldFont};
	&:hover{
		color: ${theme.colors.accent};
	}
`