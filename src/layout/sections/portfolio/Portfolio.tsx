import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { SectionDescription } from '../../../components/SectionDescription'
import { PortfolioGrid } from './portfolio-grid/PortfolioGrid'
import { PortfolioTabs } from './portfolio-tabs/PortfolioTabs';
import img1 from '../../../assets/images/portfolio/img-1.jpeg';
import img2 from '../../../assets/images/portfolio/img-2.jpeg';
import img3 from '../../../assets/images/portfolio/img-3.jpeg';
import img4 from '../../../assets/images/portfolio/img-4.jpeg';
import img5 from '../../../assets/images/portfolio/img-5.jpeg';
import img6 from '../../../assets/images/portfolio/img-6.jpeg';
import img7 from '../../../assets/images/portfolio/img-7.jpeg';
import img8 from '../../../assets/images/portfolio/img-8.jpeg';
import img9 from '../../../assets/images/portfolio/img-9.jpeg';

export const Portfolio = () => {
	let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
	
	return (
		<StyledPortfolioSection>
			<SectionTitle>Portfolio</SectionTitle>
			<SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>

				<PortfolioTabs />
				<PortfolioGrid gridImages={images}/>

		</StyledPortfolioSection>
	)
}

const StyledPortfolioSection = styled.section`
	position: relative;
`