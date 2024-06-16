import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '../icon/Icon'
import { theme } from '../../styles/Theme'

type ButtonPropsType = {
	text?: string
	isIcon?: boolean
	iconId?: string
	width?: string
	height?: string
	viewBox?: string
	fill?: string
	rounded?: boolean
	onClick?: () => void
}

export const Button = (props: ButtonPropsType) => {

	return (
		<StyledButton 
			onClick={ props.onClick }
			rounded={props.rounded}>
			<span>{props.text}</span>
			{props.isIcon && <Icon iconId={props.iconId} 
															height={props.height}
															width={props.width} 
															viewBox={props.viewBox} 
															fill='currentColor'/>}
		</StyledButton>
	)
}

const StyledButton = styled.button<ButtonPropsType>`
	background: ${theme.colors.accent};
	font-size: 14px;
	color: ${theme.colors.boldFont};
	font-weight: 600;
	text-transform: uppercase;
	height: 40px;
	padding: 2px 40px;
	display: flex;
	align-items: center;
	transition: all 0.3s ease 0s;

	svg {
		margin-left: 9px;
	}

	&:hover{
		color: ${theme.colors.mainBg};
	}

	${props => props.rounded && css<ButtonPropsType>`
		height: 38px;
		border-radius: 30px;
		box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
		margin: 0px auto;
		background-color: ${theme.colors.sectionsBg};

		&:hover{
			background-color: ${theme.colors.accent};
			color: ${theme.colors.boldFont};
		}
	`}
`
