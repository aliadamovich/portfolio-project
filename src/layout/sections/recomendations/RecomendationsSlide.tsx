import React from 'react'
import { Icon } from '../../../components/icon/Icon'
import styled from 'styled-components'

type SlidePropsType = {
	title: string
	review: string
	photo: string
	name: string
	job: string
	rating: number
}


export const RecomendationsSlide: React.FC<SlidePropsType> = (props: SlidePropsType) => {
	return (
		<SlideBody>
			<Rating>
				{
					[...Array(props.rating)].map((_, i) =>
						<Icon iconId='star' width='18' height='18' viewBox='0 0 18 18' fill='#ffb400' key={i} />
					)
				}
			</Rating>
			<Title>{props.title}</Title>
			<Review>{props.review}</Review>
			<Person>
				<img src={props.photo} alt="" />
				<PersonWrapper>
					<h3>{props.name}</h3>
					<span>{props.job}</span>
				</PersonWrapper>
			</Person>
		</SlideBody>
	)
}

const SlideBody = styled.div`
	background-color: ${props => props.theme.colors.sectionsBg};
	padding: 25px;
`

const Rating = styled.div`
	margin-bottom: 16px;
	
	>*:not(:last-child) {
		margin-right: 10px;
	}
`
const Title = styled.h3`
	margin-bottom: 18px;
`
const Review = styled.p`
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
`
const Person = styled.div`
	margin-top: 60px;
	display: flex;
	gap: 13px;
	align-items: center;
	img {
		border-radius: 50%;
		overflow: hidden;
	}
`
const PersonWrapper = styled.div`
	h3 {
		margin-bottom: 5px;
}
`