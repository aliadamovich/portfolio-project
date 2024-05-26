import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { SectionDescription } from '../../../components/SectionDescription'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { BlogCards } from './blog-card/BlogCard'
import img1 from '../../../assets/images/portfolio/img-1.jpeg'
import img2 from '../../../assets/images/portfolio/img-2.jpeg'
import img3 from '../../../assets/images/portfolio/img-3.jpeg'

export function Blog() {

	const articleContent = [
		{src: img1, title: 'How to make web tempates', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '},
		{src: img2, title: 'Make Business card', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '},
		{src: img3, title: 'How to make Flyer Design', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '}
	]
	
	return (
		<StyledBlog>
			<SectionTitle>Blog</SectionTitle>
			<SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
			<FlexWrapper>
				<BlogCards article={articleContent}/>
			</FlexWrapper>
		</StyledBlog>
	)
}

const StyledBlog = styled.section`
`
