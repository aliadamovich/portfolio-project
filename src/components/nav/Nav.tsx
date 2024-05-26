import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Nav = (props: { menuIcons: Array<string>}) => {
	return(
		<StyledMenu>
			<ul>
				{
					props.menuIcons.map((el, index)=> {
					return <li key={index}>
									<a href="">
										<Icon iconId={el} width="18" height="18" viewBox="0 0 18 18"/>
									</a>
								</li>
				})
				}
			</ul> 
		</StyledMenu>
	)
}

const StyledMenu = styled.nav`

ul {
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 43px;
	padding: 0;
}
`