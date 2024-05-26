import React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'

type ButtonPropsType = {
	text?: string
	isIcon?: boolean
}

export function Button(props: ButtonPropsType) {
	return (
		<StyledButton>	
			<ButtonText>{props.text}</ButtonText>
			{/* <Icon iconId='arrow-right' /> */}
		</StyledButton>
	)
}

const StyledButton = styled.button`
background: rgb(255, 180, 0);

`

const ButtonText = styled.span`
	
`