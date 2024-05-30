import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'
import { theme } from '../../../../styles/Theme'
import { Label } from '../../../../components/Label'
import { Button } from '../../../../components/button/Button'


type PriceCardPropsType = {
	rate: string
	price: string
	description: string
	options: { title: string, isActive: boolean }[]
	isPopular?: boolean
}

type PopularLabelPropsType = {
	opacity?: string
}

type PlanTitlePropsType = {
	color: string
}

export const PriceCard = (props: PriceCardPropsType) => {

	return (
		<StyledCard>
			{<PopularLabel opacity={props.isPopular ? '1': '0'}>Most Popular</PopularLabel> }
			
			<CardName>{props.rate}</CardName>
			<Price>{props.price} <span>/Hour</span></Price>
			<Descriptopn>{props.description}</Descriptopn>
			<StyledList >
				{
					props.options.map((o, index) => {	
						return <OptionsList key={index}>
											{o.isActive ?
												<Icon iconId='check' width='24' height='24' viewBox='0 0 24 24' 
												fill={theme.colors.accent}/> 
											:
											<Icon iconId='close' width='24' height='24' viewBox='0 0 24 24' 
											fill={theme.colors.mainFont}/>
											}
											<PlanTitle color={o.isActive ? theme.colors.boldFont
												: theme.colors.mainFont}>{o.title}
											</PlanTitle>
										</OptionsList>
					})}
			</StyledList>
			<Button>order now</Button>
		</StyledCard>
	)
}

const StyledCard = styled.div`
position: relative;
background: #fff;
padding: 54px 30px 25px;
transition: all 0.3s ease 0s;
&:hover{
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
}
`

const CardName = styled.h3`
	font-size: 24px;
	font-weight: 600;
	line-height: 124%;
	text-align: center;
`

const Price = styled.div`
	font-size: 32px;
	font-weight: 700;
	line-height: 123.6%;
	text-transform: capitalize;
	color: ${theme.colors.boldFont};
	margin: 19px 0 8px 0;
	text-align: center;

	span{
		font-size: 15px;
		line-height: 24px;
		color: ${theme.colors.mainFont};
	}
`
const Descriptopn = styled.p`
	text-align: center;
	margin-bottom: 21px;
`
const StyledList = styled.ul`
	list-style: none;
	margin-bottom: 20px;
`
const OptionsList = styled.li`
	display: flex;
	align-items: center;
	gap: 15px;
	&:not(:last-child){
		margin-bottom: 17px;
	}
`

const PlanTitle = styled.span<PlanTitlePropsType>`
	color: ${props => props.color};
`

const PopularLabel = styled.span<PopularLabelPropsType>`
	background-color: ${theme.colors.accent};
	color: ${theme.colors.boldFont};
	opacity: ${props => props.opacity};
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	text-align: center;
	padding: 3px;
`

