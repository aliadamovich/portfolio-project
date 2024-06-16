import React from 'react'
import { SectionTitle } from '../../../../components/SectionTitle'
import { ContactCard } from './contact-card/ContactCard'
import styled from 'styled-components'

export function ContactInfo() {

	const addressOptions = [
		{ name: 'Country', value: "Bangladesh", href:'https://www.google.com/maps/place/%D0%91%D0%B0%D0%BD%D0%B3%D0%BB%D0%B0%D0%B4%D0%B5%D1%88/@23.4843236,87.6991591,7z/data=!3m1!4b1!4m6!3m5!1s0x30adaaed80e18ba7:0xf2d28e0c4e1fc6b!8m2!3d23.684994!4d90.356331!16zL20vMDE2MmI?entry=ttu' },
		{ name: 'City', value: "Dhaka", href:'https://www.google.com/maps/place/%D0%91%D0%B0%D0%BD%D0%B3%D0%BB%D0%B0%D0%B4%D0%B5%D1%88/@23.4843236,87.6991591,7z/data=!3m1!4b1!4m6!3m5!1s0x30adaaed80e18ba7:0xf2d28e0c4e1fc6b!8m2!3d23.684994!4d90.356331!16zL20vMDE2MmI?entry=ttu' },
		{ name: 'Street', value: "35 vhatara, Badda", href:'https://www.google.com/maps/place/%D0%91%D0%B0%D0%BD%D0%B3%D0%BB%D0%B0%D0%B4%D0%B5%D1%88/@23.4843236,87.6991591,7z/data=!3m1!4b1!4m6!3m5!1s0x30adaaed80e18ba7:0xf2d28e0c4e1fc6b!8m2!3d23.684994!4d90.356331!16zL20vMDE2MmI?entry=ttu' }
	]
	const mailOptions = [
		{ name: 'Email', value: "youremail@gmail.com", href:'mailto:youremail@gmail.com' },
		{ name: 'Skype:', value: "@yourusername", href:'https://skype.com' },
		{ name: 'Telegram:', value: "@yourusername", href:'https://t.me/yourusername' }
	]
	const phoneOptions = [
		{ name: 'Support services:', value: "15369", href:'tel:58021356587235' },
		{ name: 'Office:', value: "+58 (021)356 587 235", href:'tel:58021356587235' },
		{ name: 'Personal:', value: "+58 (021)356 587 235", href:'tel:58021356587235' }
	]

	return (
		<StyledInfo>
			<SectionTitle>Contact information</SectionTitle>

			{/* <ContactWrapper> */}
			<ContactCard href={addressOptions[0].href} iconId='map' options={addressOptions} />
			<ContactCard href={addressOptions[0].href} iconId='mail' options ={mailOptions}/>
			<ContactCard href={addressOptions[0].href} iconId='mobile' options={phoneOptions} />
			{/* </ContactWrapper> */}
		</StyledInfo>
	)
}

const StyledInfo = styled.div`
	flex-grow: 1;
	width: 345px;
	h2 {
		text-align: start;
	}
`

// const ContactWrapper = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	width: 100%;
	
// `