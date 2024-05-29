import styled from "styled-components";
import { Nav } from "../../components/nav/Nav";
import { Icon } from "../../components/icon/Icon";
import { theme } from "../../styles/Theme";

export const Header = () => {

	const icons = ['m-1', 'm-2', 'm-3', 'm-4', 'm-5', 'm-6']

	return(
		<StyledHeader>

			<button>
				<Icon iconId="moon" width="30" height="30" viewBox="0 0 30 30" fill={theme.colors.boldFont}/>
			</button>
			<Nav menuIcons={icons}/>

		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	position: fixed;
	z-index: 9999;
	top: 0;
	right: 0;
	width: 75px;
	min-height: 100vh;
	height: 100%;
	padding: 48px 5px;
	display: flex;
	flex-direction: column;
	gap: 208px;
	overflow: auto;
	background-color: ${theme.colors.headerBg};

	@media (max-width:1024px){
		display: none;
	};
`
