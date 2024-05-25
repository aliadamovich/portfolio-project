import sprite from "../../assets/sprite/sprite.svg";

type IconPropsType = {
	iconId: string
	width?: string
	height?: string
	viewBox?: string
}

export const Icon = (props: IconPropsType) => {
	return(
		<svg width={props.width || '78'} fill='none' height={props.height || '78'} viewBox={props.viewBox || "0 0 78 78"}>
			<use xlinkHref={ `${sprite}#${props.iconId}` }></use>
		</svg>
	)
}