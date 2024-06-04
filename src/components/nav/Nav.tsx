import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";
import { SvgLink } from "../svg-link/SvgLink";

export const Nav = (props: { menuIcons: {id: string, name: string, svg: string}[]}) => {
	return(
		<StyledMenu>
			<ul>
				{
					props.menuIcons.map((el)=> {
					return <li key={el.id}>
									<SvgLink href='#{el.id}' secondary 
													iconId={el.svg}
													width="18" height="18" viewBox="0 0 18 18" 
													fill='currentColor' />
													<ToolTip>{el.name}</ToolTip>
								</li>
				})
				}
			</ul>
		</StyledMenu>
	)
}


const ToolTip = styled.span`
	display: inline-block;
	font-size: 15px;
	font-weight: 500;
	color: ${theme.colors.sectionsBg};
	background-color: ${theme.colors.boldFont};
	height: 24px;
	padding: 2px 10px;
	position: absolute;
	top: -40px;
	left: 50%;
	transform: translate(-50% ,-100% );
	transition: all 0.3s ease 0s;
	visibility: hidden;
	opacity: 0;
	pointer-events: none;
	&::after{
		content: '';
		display: inline-block;
		border-top: 10px solid ${theme.colors.boldFont};
		border-right: 5px solid transparent;
		border-left: 5px solid transparent;
		position: absolute;
		bottom: -9px;
		left: 50%;
		transform: translateX(-50%);
	}
`

const StyledMenu = styled.nav`

ul {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 42px;

	margin: 0px auto;

	li {
		/* overflow: hidden; */
		position: relative;

		&:hover{
			${ToolTip} {
				transform: translate(-50% ,0 );
				visibility: visible;
				opacity: 1;
			}
		}
	}
}
`