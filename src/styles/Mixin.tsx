import { theme } from "./Theme"

type FontPropsType = {
	family?: string
	weight?: number
	color?: string
	lineHeight?: number
	fMax?: number
	fMin?: number
}

export const font = ({ family, weight, color, lineHeight, fMax, fMin}: FontPropsType) => `
	font-family: ${family || 'Inter'};
	font-weight: ${weight || 400};
	color: ${color || theme.colors.mainFont};
	line-height: ${ lineHeight || 1.6 };
	font-size: calc( (min(100vw, 1440px) - 320px)/(1440 - 320) * (${fMax} - ${fMin}) + ${fMin}px);
`