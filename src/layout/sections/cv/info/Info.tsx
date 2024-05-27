import React from 'react'
import mini from '../../../../assets/images/main_mini.jpeg'
import { SidebarTitle } from '../SidebarTitle'
import styled from 'styled-components'
import { IconsRow } from './icons-row/IconsRow'
import { DataInfo } from './data-info/DataInfo'

export const Info = () => {
	const icons = ['facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'dribble'];
	const data = [
		{ name: 'Age', value: '24' }, 
		{ name: 'Residence', value: 'BD'}, 
		{ name: 'Freelance', value: 'Available'},
		{ name: 'Address', value: 'Dhaka,Bangladesh'} 
	]

	return (
		<StyledInfo>
			<img src={mini} alt="hero photo" />
			<SidebarTitle>Rayan Adlrdard</SidebarTitle>
			<Position>Font-end Developer</Position>
			<IconsRow icons={icons}/>
			<DataInfo data={data}/> 
		</StyledInfo>
	)
}

const StyledInfo = styled.div`
	img {
		width: 100%;
		border-radius: 50%;
	}
`

const Position = styled.h4`
`