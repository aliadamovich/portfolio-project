import React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'
import { theme } from '../../styles/Theme'

type ButtonPropsType = {
	isIcon?: boolean
	iconId?: string
	children?: React.ReactNode
}

export const Button = (props: ButtonPropsType) => {
	return (
		<StyledButton>
			{props.isIcon && <Icon iconId={props.iconId} />}{props.children}
		</StyledButton>
	)
}

const StyledButton = styled.button`
	background: ${theme.colors.accent};
	font-size: 14px;
	color: ${theme.colors.boldFont};
	font-weight: 600;
	text-transform: uppercase;
	height: 40px;
	padding: 2px 40px;
`

const ButtonText = styled.span`
	
`