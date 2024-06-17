import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '../icon/Icon'

import { Link as ScrollLink } from 'react-scroll';
import { S } from './../../components/nav/Nav_Styles';
type SvgLinkPropsType = {
	iconId: string
	width?: string
	height?: string
	viewBox?: string
	fill?: string
	href: string
	secondary?: boolean
	name?: string
}

type LinkPropsType = {
	secondary?: boolean
}

export const SvgLink = (props: SvgLinkPropsType) => {

	return (
			<LinkItem secondary={props.secondary}>
			{
			props.secondary ? 
			<>
						<NavLink to={props.href} smooth={true} activeClass="active" spy={true} >
						<Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} fill='currentColor' />
				</NavLink>
				<S.ToolTip>{props.name}</S.ToolTip>
			</>
			: 
					<NavLink as='a' href={props.href} target="_blank">
					<Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} fill='currentColor' />
				</NavLink>
		}
				
			</LinkItem>
	)
}
const LinkItem = styled.li<LinkPropsType>`

	${props => props.secondary && css`
		${NavLink} {
			background-color: ${props => props.theme.colors.iconBg};
			padding: 11px;
			color: ${props => props.theme.colors.mainFont};

			&:hover, 
			&.active {
				background-color: ${props => props.theme.colors.accent};
				color: ${props => props.theme.colors.boldFont};
			}
		}
	`}
`
const NavLink = styled(ScrollLink)`
	background-color: ${props => props.theme.colors.accent};
	color: ${props => props.theme.colors.boldFont};
	border-radius: 50%;
	padding: 6px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease 0s;
	cursor: pointer;
	&:hover{
		background-color: ${props => props.theme.colors.iconBg};
	}
`
