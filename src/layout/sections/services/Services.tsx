import React from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { SectionDescription } from '../../../components/SectionDescription'
import { ServiceCard } from './service-card/ServiceCard'
import { GridWrapper } from '../../../components/GridWrapper'
import styled from 'styled-components'

const Services: React.FC = () => {
	return (
		<ServicesSection>
			<SectionTitle>my services</SectionTitle>
			<SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
			<GridWrapper>
				<ServiceCard iconId='s-1' name="web development" description='blog, e-commerce'/>
				<ServiceCard iconId='s-2' name="uI/uX design" description='Mobile app, website design'/>
				<ServiceCard iconId='s-6' name="sound design" description='Voice Over, Beat Making'/>
				<ServiceCard iconId='s-3' name="game design" description='Character Design, Props & Objects'/>
				<ServiceCard iconId='s-4' name="photography" description='portrait, product photography'/>
				<ServiceCard iconId='s-5' name="advertising" description='lorem ipsum amet'/>
			</GridWrapper>
		</ServicesSection>
	)
}

export default Services


const ServicesSection = styled.section`
	position: relative;
	h2 {
		margin-top: calc( (min(100vw,1440px) - 320px)/(1440 - 320) * (138 - 86) + 86px);
	}
	>p {
		margin-bottom: 64px;
	}
`