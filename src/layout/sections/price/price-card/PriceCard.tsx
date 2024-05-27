import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'

// type OptionType = {
// 	title: string,
// 	isActive: boolean
// }

// type OptionsType = {
// 	options: OptionType[]
// }

type PriceCardPropsType = {
	rate: string
	price: string
	description: string
	options: { title: string, isActive: boolean }[]
	isPopular?: boolean
}

export const PriceCard = (props: PriceCardPropsType) => {

	return (
		<StyledCard>
			{props.isPopular && <span>Most Popular</span> }
			
			<h3>{props.rate}</h3>
			<span>{props.price} <span>/Hour</span></span>
			<p>{props.description}</p>
			<StyledList >
				{
					props.options.map((o, index) => {	
						return <li key={index}>
										{o.isActive ? <Icon iconId='check' width='24' height='24' viewBox='0 0 24 24' /> 
										: <Icon iconId='close' width='24' height='24' viewBox='0 0 24 24' />}
										<span>{o.title}</span>
									</li>
					})}
			</StyledList>
		</StyledCard>
	)
}

const StyledCard = styled.div`
background: #fff;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);


`

const StyledList = styled.ul`
	list-style: none;
`