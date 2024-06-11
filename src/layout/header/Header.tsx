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
	position: sticky;
	order: 3;
	z-index: 9999;
	top: 0;
	right: 0;
	max-width: 105px;
	width: 100%;
	min-height: 100vh;
	height: 100%;
	padding: 48px 2px;
	display: flex;
	flex-direction: column;
	gap: 208px;
	background-color: ${theme.colors.headerBg};
	overflow: hidden;

	@media ${theme.media.first} {
		max-width: 75px;
		gap: 100px;
	}

	@media ${theme.media.mobile} {
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

const MoonButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	color: ${theme.colors.boldFont};
	&:hover{
		color: ${theme.colors.accent};
	}
`