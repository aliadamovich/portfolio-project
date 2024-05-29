import styled from "styled-components";
import { theme } from "../styles/Theme";

type LabelPropsType = {
	color?: string
	size?: string
}

export const Label = styled.span<LabelPropsType>`
	background-color: ${theme.colors.accent};
	color: ${props => props.color || theme.colors.boldFont};
	padding: 0px 6px;
	font-size: ${props => props.size || '15px'};
`