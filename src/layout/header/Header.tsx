import styled from "styled-components";
import { Nav } from "../../components/nav/Nav";
import { Icon } from "../../components/icon/Icon";
import { theme } from "../../styles/Theme";

export const Header = () => {

	const icons = [
		{id: 'home', name: 'Home', svg: 'm-1'},
		{id: 'services', name: 'Services', svg: 'm-2'},
		{id: 'education', name: 'Education', svg: 'm-3'},
		{id: 'work', name: 'Work', svg: 'm-4'},
		{id: 'blog', name: 'Blog', svg: 'm-5'},
		{id: 'contact', name: 'Contact', svg: 'm-6'},
		]

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
	/* position: absolute; */
	position: sticky;
	order: 3;
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

	@media screen and (max-width: 1250px) {
		max-width: 60px;
		gap: 100px;
	}
`

const MoonButton = styled.button`
	color: ${theme.colors.boldFont};
	&:hover{
		color: ${theme.colors.accent};
	}
`