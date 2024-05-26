import React from 'react'
import { SectionTitle } from '../../../../components/SectionTitle'
import { ContactCard } from './contact-card/ContactCard'

export function ContactInfo() {

	const addressOptions = [
		{ name: 'Country', value: "Bangladesh" },
		{ name: 'City', value: "Dhaka" },
		{ name: 'Street', value: "35 vhatara, Badda" }
	]
	const mailOptions = [
		{ name: 'Email', value: "youremail@gmail.com" },
		{ name: 'Skype:', value: "@yourusername" },
		{ name: 'Telegram:', value: "@yourusername" }
	]
	const phoneOptions = [
		{ name: 'Support services:', value: "15369" },
		{ name: 'Office:', value: "+58 (021)356 587 235" },
		{ name: 'Personal:', value: "+58 (021)356 587 235" }
	]

	return (
		<div>
			<SectionTitle>Contact information</SectionTitle>

			<ContactCard iconId='map' options={addressOptions} />
			<ContactCard iconId='mail' options ={mailOptions}/>
			<ContactCard iconId='mobile' options={phoneOptions} />
		</div>
	)
}
