import React from 'react'
import styled from 'styled-components'
import { ContactForm } from './contact-form/ContactForm'
import { ContactInfo } from './contact-info/ContactInfo'
import { Map } from './map/Map'

export function Contact() {
	return (
		<StyledContact>
			<ContactForm />
			<ContactInfo />
			<Map />
		</StyledContact>
	)
}

const StyledContact = styled.section`
	display: grid;
	grid-template: auto 300px / 1fr 1fr;
	column-gap: 30px;
	row-gap: 70px;
`