import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { SectionDescription } from '../../../components/SectionDescription'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { PriceCard } from './price-card/PriceCard'

export const Price = () => {
	return (
		<StyledPriceSection>
			<SectionTitle>price plans</SectionTitle>
			<SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
			<FlexWrapper justify='space-around'>

				<PriceCard rate='Silver' price='$0.00' descriprtion='For most businesses that want to
					optimize web queries'/>
				<PriceCard rate='Gold' price='$50.00' descriprtion='For most businesses that want to
					optimize web queries'/>
				<PriceCard rate='Diamond' price='$80.00' descriprtion='For most businesses that want to
					optimize web queries'/>
					
			</FlexWrapper>
		</StyledPriceSection>
	)
}

const StyledPriceSection = styled.section`
`