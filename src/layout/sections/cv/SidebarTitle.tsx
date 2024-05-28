import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

type SidebarTitlePropsType = {
centered?: boolean
}

export const SidebarTitle = styled.h3<SidebarTitlePropsType>`
	font-size: 18px;
	font-weight: 500;
	line-height: 123%;
	text-transform: capitalize;
	color: ${theme.colors.boldFont};
	margin-bottom: 15px;

	${props => props.centered && css<SidebarTitlePropsType>`
		text-align: center;
	`}
`