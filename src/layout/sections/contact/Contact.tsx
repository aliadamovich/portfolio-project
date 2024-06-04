import React from 'react'
import styled from 'styled-components'
import { ContactForm } from './contact-form/ContactForm'
import { ContactInfo } from './contact-info/ContactInfo'
import { Map } from './map/Map'
import { FlexWrapper } from '../../../components/FlexWrapper'

export function Contact() {
	return (
		<StyledContact>
			<FlexWrapper gap='30px' wrap='wrap'>
				<ContactForm />
				<ContactInfo />
			</FlexWrapper>
			<Map />
		</StyledContact>
	)
}

const StyledContact = styled.section`
	/* display: grid; 
	grid-template: auto 300px / 1fr 370px;
	column-gap: 30px;
	row-gap: 70px; */
`