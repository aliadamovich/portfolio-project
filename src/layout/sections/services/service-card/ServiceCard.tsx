import React from 'react'
import { Icon } from '../../../../components/icon/Icon'
import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'
import { YellowLink } from '../../../../components/yellow-link/YellowLink'

type ServiceCardPropsType = {
	iconId: string
	name: string
	description: string
}

export const ServiceCard = (props: ServiceCardPropsType) => {
	return (
		<CardBody>
			<Icon iconId={props.iconId} fill={theme.colors.accent} width='78' height='78' viewBox='0 0 78 78'/>
			<Title>{props.name}</Title>
			<ServiceDescription>{props.description}</ServiceDescription>
			{/* <Link href='#'>
				<span>order now</span>
				<Icon iconId='link-right' width="18" height="18" viewBox="0 0 18 18" fill={theme.colors.accent} />
			</Link> */}
			<YellowLink text='order now'/>
		</CardBody>
	)
}

const Title = styled.h3`
	margin-top: 26px;
`

const ServiceDescription = styled.p`
	font-size: 15px;
`

const CardBody = styled.div`
	flex: 0 1 33.3%;
	text-align: center;
	background-color: ${theme.colors.sectionsBg};
	padding: 25px 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;

	a {
	opacity: 0;
}

	&:hover{
		>svg {
			height: 0;
		}
		a {
			opacity: 1;
			&:hover{
				opacity: 0.7;
			}
		}
	}
`