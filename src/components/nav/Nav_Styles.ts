import styled from "styled-components"
import { theme } from "../../styles/Theme"

//tooltip

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

	@media ${theme.media.mobile} {
		display: none;
	}
`

//nav menu

const Menu = styled.nav`

	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 42px;
		margin: 0px auto;

		li {
			position: relative;

			&:hover{
				${ToolTip} {
					transform: translate(-50% ,0 );
					visibility: visible;
					opacity: 1;
				}
			}
		}

		@media ${theme.media.mobile} {
		flex-direction: row;
		gap: 10px;
	}
	}
`

export const S = {
	ToolTip,
	Menu
}