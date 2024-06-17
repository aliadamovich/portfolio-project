import React, { useState } from 'react'
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

const tabsData: Array<{ title: string, status: 'all' | 'ui' | 'web' | 'logo' | 'branding' }> = [
	{ title: 'All categories', status: 'all' },
	{ title: 'UI Design', status: 'ui' },
	{ title: 'Web Templates', status: 'web' },
	{ title: 'Logo', status: 'logo' },
	{ title: 'Branding', status: 'branding' }
];

const portfolioWorks = [
	{src: img1, filter: 'web', id: 1}, 
	{src: img2, filter: 'ui', id:2}, 
	{src: img3, filter: 'branding', id: 3}, 
	{src: img4, filter: 'logo', id: 4}, 
	{src: img5, filter: 'web', id: 5}, 
	{src: img6, filter: 'branding', id: 6}, 
	{src: img7, filter: 'logo', id: 7}, 
	{src: img8, filter: 'logo', id: 8}, 
	{src: img9, filter: 'logo', id: 9}
];

export const Portfolio = () => {
	
	const [currentFilterStatus, setCurrentFilterStatus] = useState('all');

	let filteredWorks = portfolioWorks.filter( w => {
		if (w.filter === currentFilterStatus || currentFilterStatus === 'all') {
			return true;
		}
	})

	function onTabClick (value: 'all' | 'ui' | 'web' | 'logo' | 'branding') {
		setCurrentFilterStatus(value)
	}

	return (
		<StyledPortfolioSection>
			<SectionTitle>Portfolio</SectionTitle>
			<SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>

			<PortfolioTabs tabsData={tabsData} onTabClick={onTabClick} currentFilterStatus={currentFilterStatus}/>
			<PortfolioGrid portfolioWorks={filteredWorks}/>

		</StyledPortfolioSection>
	)
}

const StyledPortfolioSection = styled.section`
	position: relative;
`
