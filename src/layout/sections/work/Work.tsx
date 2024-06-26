import React from 'react'
import styled from 'styled-components'
import { Period } from '../../../components/period/Period'
import { SectionTitle } from '../../../components/SectionTitle'
import { SectionDescription } from '../../../components/SectionDescription'
import { Fade } from "react-awesome-reveal";

export function Work() {
	return (
		<StyledWork id="work">
			<SectionTitle>Work History</SectionTitle>
			<SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
			
			<PeriodWrapper>
				<Fade cascade damping={0.2}>
					<Period 
						placeTitle='Lead Web Designer'
						placeDescription='Student'
						label='Jan 1016 - Dec 2021'
						subjectTitle='Certificate of web training'
						subjectDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'/>
					<Period
						placeTitle='Junior Web Designer'
						placeDescription='Student'
						label='Jan 1016 - Dec 2021'
						subjectTitle='Certificate of web training'
						subjectDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.' />
					<Period
						placeTitle='Senior Web Designer'
						placeDescription='Student'
						label='Jan 1016 - Dec 2021'
						subjectTitle='Certificate of web training'
						subjectDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.' />
		
				</Fade>
			</PeriodWrapper>
		</StyledWork>
	)
}

const StyledWork = styled.section`
	position: relative;
`


const PeriodWrapper = styled.div`
	background-color: ${props => props.theme.colors.sectionsBg};
	padding: 17px 37px 20px 47px;

`