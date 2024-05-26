import React from 'react'
import { Icon } from '../../icon/Icon'
import styled from 'styled-components'

type SlidePropsType = {
	title: string
	review: string
	photo: string
	name: string
	job: string
}


export function Slide(props: SlidePropsType) {
	return (
		<SlideBody>
			<Icon iconId='star' width='18' height='18' viewBox='0 0 18 18' />
			<Title>{props.title}</Title>
			<Review>{props.review}</Review>
			<Person>
				<img src={props.photo} alt="" />
				<span>{props.name}</span>
				<span>{props.job}</span>
			</Person>
		</SlideBody> 
	)
}

const SlideBody = styled.div`
`
const Title = styled.h3`
`
const Review = styled.p`
`
const Person = styled.div`
`