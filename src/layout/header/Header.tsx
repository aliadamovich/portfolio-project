import styled from "styled-components";
import { Nav } from "../../components/nav/Nav";
import { Icon } from "../../components/icon/Icon";

export const Header = () => {

	const icons = ['m-1', 'm-2', 'm-3', 'm-4', 'm-5', 'm-6']

	return(
		<StyledHeader>

			<button>
				<Icon iconId="moon" width="30" height="30" viewBox="0 0 30 30" />
			</button>
			<Nav menuIcons={icons}/>

		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
