import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../../components/button/Button'
import { Icon } from '../../../../components/icon/Icon'
import { FlexWrapper } from '../../../../components/FlexWrapper'

type BlogCardPropsType = {
	article: {src:string, title: string, body: string}[]
}

export function BlogCards(props: BlogCardPropsType) {
	return (
		<FlexWrapper>
		{
			props.article.map((a, i) => {
			return <BlogCardBody key={i}>
							<img src={a.src} alt="" />
							<Content>
								<Title>{a.title}</Title>
								<Text>{a.body}</Text>
								<Button text='Learn More' />
							</Content>
						</BlogCardBody>
		})
	}
		</FlexWrapper>
	)
}


const BlogCardBody = styled.div`
	img {
		width: 100%;
		
	}
`
const Content = styled.div`

`
const Title = styled.h3`

`
const Text = styled.p`

`
