import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../FlexWrapper'
import { Label } from '../Label'
import { theme } from '../../styles/Theme'

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
				<FlexWrapper gap='20px' >
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
	padding: 30px 0;
	&:not(:last-child){
		border-bottom: 1px solid ${theme.colors.iconBg};
	}

	@media (max-width:1024px){
		flex-direction: column;
	};
`
const PlaceColumn = styled.div`
	flex: 0 1 40%;

	${Label} {
		color: ${theme.colors.sectionsBg};
		font-size: 10px;
	}
`
const SubjectColumn = styled.div`
	flex: 0 1 60%;
`
const Title = styled.h3`
	margin-bottom: 25px;
`

const Description = styled.p`
	
`