import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { SectionDescription } from '../../../components/SectionDescription'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { PriceCard } from './price-card/PriceCard'

export const Price = () => {
	const silverOptions = [
			{option: 'UI design', isActive: true}, 
			{option: 'Web Development', isActive: true },
			{option: 'Logo Design', isActive: false },
			{option: 'Seo Optimization', isActive: false },
			{option: 'WordPress integration', isActive: false},
			{option: '5 Websites', isActive: false},
			{option: 'Unlimited User', isActive: false},
			{option: '20 GB Bandwith', isActive: false}
		]
	const goldOptions = [
		{ option: 'UI design', isActive: true },
		{ option: 'Web Development', isActive: true },
		{ option: 'Logo Design', isActive: true },
		{ option: 'Seo Optimization', isActive: true },
		{ option: 'WordPress integration', isActive: false },
		{ option: '5 Websites', isActive: false },
		{ option: 'Unlimited User', isActive: false },
		{ option: '20 GB Bandwith', isActive: false }
	]
	const diamondOptions = [
		{ option: 'UI design', isActive: true },
		{ option: 'Web Development', isActive: true },
		{ option: 'Logo Design', isActive: true },
		{ option: 'Seo Optimization', isActive: true },
		{ option: 'WordPress integration', isActive: true },
		{ option: '5 Websites', isActive: true },
		{ option: 'Unlimited User', isActive: true },
		{ option: '20 GB Bandwith', isActive: true }
	]



	return (
		<StyledPriceSection>
			<SectionTitle>price plans</SectionTitle>
			<SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
			<FlexWrapper justify='space-around'>

				<PriceCard options={silverOptions} rate='Silver' price='$0.00' descriprtion='For most businesses that want to
					optimize web queries'/>
				<PriceCard options={goldOptions} rate='Gold' price='$50.00' descriprtion='For most businesses that want to
					optimize web queries'/>
				<PriceCard options={diamondOptions} rate='Diamond' price='$80.00' descriprtion='For most businesses that want to
					optimize web queries'/>
					
			</FlexWrapper>
		</StyledPriceSection>
	)
}

const StyledPriceSection = styled.section`
`