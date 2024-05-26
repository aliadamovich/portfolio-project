import React from 'react'
import { Icon } from '../../../../components/icon/Icon'
import styled from 'styled-components'
import { Button } from '../../../../components/button/Button'

type ServiceCardPropsType = {
	iconId: string
	name: string
	description: string
}

export const ServiceCard = (props: ServiceCardPropsType) => {
	return (
		<CardBody>
			<Icon iconId={props.iconId} />
			<ServiceName>{props.name}</ServiceName>
			<ServiceDescription>{props.description}</ServiceDescription>
			<Button text='order now' />
		</CardBody>
	)
}

const CardBody = styled.div`
	text-align: center;
	flex: 0 1 33.3%;
	`

const ServiceName = styled.h3`
	font-size: 18px;
`

const ServiceDescription = styled.p`
	font-size: 15px;
`