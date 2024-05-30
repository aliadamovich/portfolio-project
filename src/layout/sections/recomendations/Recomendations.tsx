import React from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { SectionDescription } from '../../../components/SectionDescription'
import { Slider } from '../../../components/slider/Slider'
import styled from 'styled-components'

export function Recomendations() {
	return (
		<RecomendationsSection>
			<SectionTitle>Recomendations</SectionTitle>
			<SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
			<Slider />
		</RecomendationsSection>
	)
}

const RecomendationsSection = styled.section`
	h2 {
		margin: 65px 0 25px;
	}

	>p {
		margin-bottom: 72px;
	}
`