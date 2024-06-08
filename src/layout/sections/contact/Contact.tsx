import React from 'react'
import styled from 'styled-components'
import { ContactForm } from './contact-form/ContactForm'
import { ContactInfo } from './contact-info/ContactInfo'
import { Map } from './map/Map'
import { FlexWrapper } from '../../../components/FlexWrapper'

export function Contact() {
	return (
		<StyledContact>
			<FlexWrapper gap='30px' wrap='wrap-reverse'>
				<ContactForm />
				<ContactInfo />
			</FlexWrapper>
			<Map />
		</StyledContact>
	)
}

const StyledContact = styled.section`

`