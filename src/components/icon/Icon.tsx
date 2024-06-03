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
		<svg width={props.width || '18'} 
		 			height={props.height || '18'} 
		 			viewBox={props.viewBox || "0 0 18 18"}
					fill={props.fill || theme.colors.boldFont}>
			<use xlinkHref={ `${sprite}#${props.iconId}` }></use>
		</svg>
	)
}

