import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../FlexWrapper'
import { Label } from '../Label'

type PeriodPropsType = {
	placeTitle: string
	placeDescription: string
	label: string
	subjectTitle: string
	subjectDescription: string
}

export function Period(props: PeriodPropsType) {
	return (
		<StyledPeriod>
			<PlaceColumn>
				<Title>{props.placeTitle}</Title>
				<FlexWrapper>
					<Description as={'span'}>{props.placeDescription}</Description>
					<Label>{props.label}</Label>
				</FlexWrapper>
			</PlaceColumn>

			<SubjectColumn>
				<Title>{props.subjectTitle}</Title>
				<Description>{props.subjectDescription}</Description>
			</SubjectColumn>
		</StyledPeriod>
	)
}

const StyledPeriod = styled.div`
	display: flex;
`
const PlaceColumn = styled.div`
	flex: 0 1 40%;
`
const SubjectColumn = styled.div`
	flex: 0 1 60%;
`
const Title = styled.h3`
	
`

const Description = styled.p`
	
`