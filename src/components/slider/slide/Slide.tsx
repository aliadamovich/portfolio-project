import React from 'react'
import { Icon } from '../../icon/Icon'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

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
			<Rating>
				<Icon iconId='star' width='18' height='18' viewBox='0 0 18 18' fill={theme.colors.accent}/>
				<Icon iconId='star' width='18' height='18' viewBox='0 0 18 18' fill={theme.colors.accent}/>
				<Icon iconId='star' width='18' height='18' viewBox='0 0 18 18' fill={theme.colors.accent}/>
				<Icon iconId='star' width='18' height='18' viewBox='0 0 18 18' fill={theme.colors.accent}/>
				<Icon iconId='star' width='18' height='18' viewBox='0 0 18 18' fill={theme.colors.accent}/>
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
background-color: ${theme.colors.sectionsBg};
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
`
const Person = styled.div`
	margin-top: 60px;
	display: flex;
	gap: 13px;
	align-items: center;
`
const PersonWrapper = styled.div`
	h3 {
		margin-bottom: 5px;
}
`