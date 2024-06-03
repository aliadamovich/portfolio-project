import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";
import { SvgLink } from "../svg-link/SvgLink";

export const Nav = (props: { menuIcons: Array<string>}) => {
	return(
		<StyledMenu>
			<ul>
				{
					props.menuIcons.map((el, index)=> {
					return <li key={index}>
									<SvgLink secondary 
													iconId={el} 
													width="18" height="18" viewBox="0 0 18 18" 
													fill='currentColor' />
								</li>
				})
				}
			</ul>
		</StyledMenu>
	)
}

const StyledMenu = styled.nav`

ul {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 42px;
}
`
