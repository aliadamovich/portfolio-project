import React from 'react'
import { Icon } from '../../../../components/icon/Icon'
import styled from 'styled-components'
import { Button } from '../../../../components/button/Button'
import { theme } from '../../../../styles/Theme'

type ServiceCardPropsType = {
	iconId: string
	name: string
	description: string
}

export const ServiceCard = (props: ServiceCardPropsType) => {
	return (
		<CardBody>
			<Icon iconId={props.iconId} fill={theme.colors.accent}/>
			<ServiceName>{props.name}</ServiceName>
			<ServiceDescription>{props.description}</ServiceDescription>
			<Button text='order now' />
		</CardBody>
	)
}

const CardBody = styled.div`
	flex: 0 1 33.3%;
	text-align: center;
	background-color: ${theme.colors.sectionsBg};
	padding: 25px 0 42px;
	`

const ServiceName = styled.h3`
	font-size: 18px;
	font-weight: 500;
	line-height: 123.6%;
	text-transform: capitalize;
	color: ${theme.colors.boldFont};
	margin-bottom: 15px;
`

const ServiceDescription = styled.p`
	font-size: 15px;
`