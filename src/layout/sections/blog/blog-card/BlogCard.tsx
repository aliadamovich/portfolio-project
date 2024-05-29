import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../../components/button/Button'
import { Icon } from '../../../../components/icon/Icon'
import { YellowLink } from '../../../../components/yellow-link/YellowLink'
import { theme } from '../../../../styles/Theme'
import { GridWrapper } from '../../../../components/GridWrapper'

type BlogCardPropsType = {
	article: {src:string, title: string, body: string}[]
}

export function BlogCards(props: BlogCardPropsType) {
	return (
		<GridWrapper>
		{
			props.article.map((a, i) => {
			return <BlogCardBody key={i}>
							<ImgWrapper>
								<img src={a.src} alt="article cover" />
							</ImgWrapper>
							<Content>
								<Title>{a.title}</Title>
								<Text>{a.body}</Text>
								<YellowLink text='learn more'/>
							</Content>
						</BlogCardBody>
		})
	}
		</GridWrapper>
	)
}


const BlogCardBody = styled.article`
	background-color: ${theme.colors.sectionsBg};
	transition: all 0.3s ease 0s;
	&:hover{
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
}
`
const ImgWrapper = styled.div`
	position: relative;
	padding: 0 0 97% 0;
	img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
	}
`
const Content = styled.div`
	padding: 25px 25px 18px;

	a > span{
		font-family: 'Inter';
		text-transform: capitalize;
		font-size: 18px;
		font-weight: 500;
	}
`
const Title = styled.h3`

`
const Text = styled.p`
	margin-bottom: 25px;
`
