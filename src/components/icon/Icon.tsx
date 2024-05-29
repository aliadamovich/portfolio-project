import styled, { css } from "styled-components";
import sprite from "../../assets/sprite/sprite.svg";
import { theme } from "../../styles/Theme";

type IconPropsType = {
	iconId?: string
	width?: string
	height?: string
	viewBox?: string
	fill?: string
	primary?: boolean
}


export const Icon = (props: IconPropsType) => {
	return(
		<StyledSvg width={props.width || '78'} 
		 			height={props.height || '78'} 
		 			viewBox={props.viewBox || "0 0 78 78"}
					fill={props.fill || theme.colors.boldFont}>
			<use xlinkHref={ `${sprite}#${props.iconId}` }></use>
		</StyledSvg>
	)
}

const StyledSvg = styled.svg`
	transition: all 0.5s ease 0s;
`