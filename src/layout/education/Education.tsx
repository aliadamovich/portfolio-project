import React from 'react'
import styled from 'styled-components'
import { Period } from '../../components/period/Period'
import { SectionTitle } from '../../components/SectionTitle'
import { SectionDescription } from '../../components/SectionDescription'
import { theme } from '../../styles/Theme'
import { Fade } from "react-awesome-reveal";

export const Education: React.FC = () => {
	return (
		<StyledEducation id='education'>
			<SectionTitle>Education</SectionTitle>
			<SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
			
			<PeriodWrapper>
				<Fade cascade damping={0.2}>
					<Period
						placeTitle='University of Toronto'
						placeDescription='Student'
						label='Jan 1016 - Dec 2021'
						subjectTitle='Certificate of web training'
						subjectDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'/>
					<Period
						placeTitle='Programming Course'
						placeDescription='Student'
						label='Jan 1016 - Dec 2021'
						subjectTitle='Certificate of web training'
						subjectDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.' />
					<Period
						placeTitle='Web developer courses'
						placeDescription='Student'
						label='Jan 1016 - Dec 2021'
						subjectTitle='Certificate of web training'
						subjectDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.' />
				</Fade>
			</PeriodWrapper>
		</StyledEducation>
	)
}

const StyledEducation = styled.section`
	position: relative;
`

const PeriodWrapper = styled.div`
	background-color: ${props => props.theme.colors.sectionsBg};
	padding: 17px 37px 20px 47px;
`