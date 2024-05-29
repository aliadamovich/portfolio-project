import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { SectionDescription } from '../../../components/SectionDescription'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { PriceCard } from './price-card/PriceCard'

export const Price = () => {

	const data = [
		{
			rate: 'Silver',
			price: '$0.00',
			description: 'For most businesses that want to optimize web queries',
			options: [
				{ title: 'UI design', isActive: true },
				{ title: 'Web Development', isActive: true },
				{ title: 'Logo Design', isActive: false },
				{ title: 'Seo Optimization', isActive: false },
				{ title: 'WordPress integration', isActive: false },
				{ title: '5 Websites', isActive: false },
				{ title: 'Unlimited User', isActive: false },
				{ title: '20 GB Bandwith', isActive: false }
			]
		},
		{
			rate: 'Gold',
			price: '$50.00',
			description: 'For most businesses that want to optimize web queries',
			options: [
				{ title: 'UI design', isActive: true },
				{ title: 'Web Development', isActive: true },
				{ title: 'Logo Design', isActive: true },
				{ title: 'Seo Optimization', isActive: true },
				{ title: 'WordPress integration', isActive: false },
				{ title: '5 Websites', isActive: false },
				{ title: 'Unlimited User', isActive: false },
				{ title: '20 GB Bandwith', isActive: false }
			],
			popular: true
},
		{
			rate: 'Diamond',
			price: '$80.00',
			description: 'For most businesses that want to optimize web queries',
			options: [
				{ title: 'UI design', isActive: true },
				{ title: 'Web Development', isActive: true },
				{ title: 'Logo Design', isActive: true },
				{ title: 'Seo Optimization', isActive: true },
				{ title: 'WordPress integration', isActive: true },
				{ title: '5 Websites', isActive: true },
				{ title: 'Unlimited User', isActive: true },
				{ title: '20 GB Bandwith', isActive: true }
			]
}
	]

	return (
		<StyledPriceSection>
			<SectionTitle>price plans</SectionTitle>
			<SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
			<FlexWrapper justify='space-around' gap='20px'>

			{data.map(el => {
				return <PriceCard options={el.options} rate={el.rate} price={el.price}
					description={el.description}
					isPopular={el.popular}/>
			})}

			</FlexWrapper>
		</StyledPriceSection>
	)
}

const StyledPriceSection = styled.section`
`