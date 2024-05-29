import React from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { SectionDescription } from '../../../components/SectionDescription'
import { ServiceCard } from './service-card/ServiceCard'
import { GridWrapper } from '../../../components/GridWrapper'

const Services = () => {
	return (
		<section>
			<SectionTitle>my services</SectionTitle>
			<SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
			<GridWrapper gap='20px'>
				<ServiceCard iconId='s-1' name="web development" description='blog, e-commerce'/>
				<ServiceCard iconId='s-2' name="uI/uX design" description='Mobile app, website design'/>
				<ServiceCard iconId='s-6' name="sound design" description='Voice Over, Beat Making'/>
				<ServiceCard iconId='s-3' name="game design" description='Character Design, Props & Objects'/>
				<ServiceCard iconId='s-4' name="photography" description='portrait, product photography'/>
				<ServiceCard iconId='s-5' name="advertising" description='lorem ipsum amet'/>
			</GridWrapper>
		</section>
	)
}

export default Services
