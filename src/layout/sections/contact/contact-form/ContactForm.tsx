import React from 'react'
import { SectionTitle } from '../../../../components/SectionTitle'
import styled from 'styled-components'
import { Button } from '../../../../components/button/Button'

export function ContactForm() {
	return (
		<StyledForm>
			<SectionTitle>Leave us your info</SectionTitle>
			<Form>
				<StyledInput>
					<label htmlFor="name">Your Full Name ( Required)</label>
					<input type="text" name="name" id="name" />
				</StyledInput>
				<StyledInput>
					<label htmlFor="email">Your Email ( Required)</label>
					<input type="email" name="email" id="email" />
				</StyledInput>
				<StyledInput>
					<label htmlFor="subject">Subject</label>
					<input type="text" name="subject" id="subject" />
				</StyledInput>
				<StyledInput>
					<label htmlFor="text">Your Message</label>
					<textarea name="text" id="text" />
				</StyledInput>
				<Button>send message</Button>
			</Form>
		</StyledForm>
	)
}

const StyledForm = styled.div`
	
`
const Form = styled.form`
	
`
const StyledInput = styled.div`
	label {
		display: block;
	}
`
