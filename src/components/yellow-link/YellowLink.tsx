import React from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export const YellowLink = (props: { text: string; onClick?: () => void}) => {
	const onLinkClick = () => {
		console.log(333)
	}

	return (
		<Link href='#' onClick={(e) => {e.preventDefault(); onLinkClick() }}>
			<span>{props.text}</span>
			<Icon iconId='link-right' width="18" height="18" viewBox="0 0 18 18" fill={theme.colors.accent} />
		</Link>
	)
}

const Link = styled.a`
	transition: all 0.7s ease 0s;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 3px;
	margin-top: auto;
	&:hover{
		opacity: 0.8;
	}

	span {
		font-family: 'Roboto', sans-serif;
		font-size: 12px;
		font-weight: 700;
		line-height: 14px;
		text-transform: uppercase;
		color: ${theme.colors.accent};
	}
`