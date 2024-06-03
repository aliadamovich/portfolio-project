import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '../icon/Icon'
import { theme } from '../../styles/Theme'

type SvgLinkPropsType = {
	iconId: string
	width?: string
	height?: string
	viewBox?: string
	fill?: string
	secondary?: boolean
}

type LinkProps = {
	secondary?: boolean
}

export const SvgLink = (props: SvgLinkPropsType) => {
	return (
			<Link href="#" secondary={props.secondary}>
				<Icon iconId={props.iconId}
				width={props.width} 
				height={props.height} 
				viewBox={props.viewBox} 
				fill='currentColor'/>
			</Link>
	)
}

const Link = styled.a<LinkProps>`
		background-color: ${theme.colors.accent};
		color: ${theme.colors.boldFont};
		border-radius: 50%;
		padding: 6px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		transition: all 0.2s ease 0s;
		&:hover{
			background-color: ${theme.colors.iconBg};
		}

		${props => props.secondary && css`
			background-color: ${theme.colors.iconBg};
			padding: 11px;
			color: ${theme.colors.mainFont};
			&:hover{
				background-color: ${theme.colors.accent};
				color: ${theme.colors.boldFont};
			}
	`}
`
