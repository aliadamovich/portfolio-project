import React from 'react'
import { SectionTitle } from '../../../../components/SectionTitle'
import styled from 'styled-components'
import { Button } from '../../../../components/button/Button'
import { theme } from '../../../../styles/Theme'

export function ContactForm() {
	return (
		<StyledForm>
			<SectionTitle>Leave us your info</SectionTitle>
			<Form>
				<StyledInput>
					<label htmlFor="name">Your Full Name ( Required)</label>
					<Field type="text" name="name" id="name" />
				</StyledInput>
				<StyledInput>
					<label htmlFor="email">Your Email ( Required)</label>
					<Field type="email" name="email" id="email" />
				</StyledInput>
				<StyledInput>
					<label htmlFor="subject">Subject</label>
					<Field type="text" name="subject" id="subject" />
				</StyledInput>
				<StyledInput>
					<label htmlFor="text">Your Message</label>
					<Field as='textarea' name="text" id="text" />
				</StyledInput>
				<Button text='send message'/>
			</Form>
		</StyledForm>
	)
}

const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	width: 345px;
	flex-grow: 5;
	h2 {
		text-align: left;
	}
`
const Form = styled.form`
	width: 100%;
	min-width: 250px;
	background-color: ${theme.colors.sectionsBg};
	padding: 25px;
	flex-grow: 1;

	>*:not(:last-child) {
		margin-bottom: 25px;
	}

	textarea {
		resize: none;
		height: 210px;
	}
`
const StyledInput = styled.div`
	label {
		display: block;
		font-size: 18px;
		font-weight: 500;
		margin-bottom: 8px;
	}

`

const Field = styled.input`
	width: 100%;
		background-color: ${theme.colors.mainBg};
		border: none;
		padding: 10px 15px;

		color: ${theme.colors.boldFont};
		font-family: 'Inter', sans-serif;
		font-size: 18px;

		&:focus-visible {
			outline: 1px solid ${theme.colors.mainFont};
		}
`