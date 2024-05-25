import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'

type PriceCardPropsType = {
	rate: string
	price: string
	descriprtion: string
}

export const PriceCard = (props: PriceCardPropsType) => {
const options = 
['UI design', 'Web Development', 'Logo Design', 'Seo Optimization', '5 Websites', 'Unlimited User', '20 GB Bandwith']

	return (
		<StyledCard>
			<h3>{props.rate}</h3>
			<span>{props.price} <span>/Hour</span></span>
			<p>{props.descriprtion}</p>
			<Content >
				{
				options.map(o => {
					return <li>
										<Icon iconId='check' width='24' height='24' viewBox='0 0 24 24'/>
										<span>{o}</span>
								</li>

				})}
			</Content>
		</StyledCard>
	)
}

const StyledCard = styled.div`
background: #fff;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);


`

const Content = styled.ul`
	list-style: none;
`