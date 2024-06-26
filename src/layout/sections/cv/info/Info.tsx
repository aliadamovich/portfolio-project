import React from 'react'
import mini from '../../../../assets/images/main_mini.jpeg'
import styled from 'styled-components'
import { IconsRow } from './icons-row/IconsRow'
import { DataInfo } from './data-info/DataInfo'
import { CvContainer } from '../CvContainer'

export const Info: React.FC = () => {

	const icons = [
		{ id: 'facebook', href: 'https://facebook.com', svg: 'facebook' },
		{ id: 'instagram', href: 'https://instagram.com', svg: 'instagram' },
		{ id: 'twitter', href: 'https://facebook.com', svg: 'twitter' },
		{ id: 'linkedin', href: 'https://linkedin.com', svg: 'linkedin' },
		{ id: 'youtube', href: 'https://youtube.com', svg: 'youtube' },
		{ id: 'dribble', href: 'https://dribble.com', svg: 'dribble' },
	]

	const data = [
		{ name: 'Age:', value: '24' }, 
		{ name: 'Residence:', value: 'BD'}, 
		{ name: 'Freelance:', value: 'Available', modified: true},
		{ name: 'Address:', value: 'Dhaka,Bangladesh'} 
	]

	return (
		<StyledInfo>
			<StyledPhoto><img src={mini} alt="hero photo" /></StyledPhoto>
			<h3>Rayan Adlrdard</h3>
			<Position>Front-end Developer</Position>
			<IconsRow icons={icons}/>
			<CvContainer>
				<DataInfo data={data}/> 
			</CvContainer>
		</StyledInfo>
	)
}

const StyledInfo = styled.div`
	h3 {
		text-align: center;
	}
`

const StyledPhoto = styled.div`
	position: relative;
	width: 150px;
	height: 150px;
	margin: 0px auto 30px auto;
	&::after{
	content: '';
		position: absolute;
		width: 16px;
		height: 16px;
		bottom: 10%;
		right: 10%;
		border-radius: 50%;
		background-color: rgb(126, 185, 66);
		box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
	}
`

const Position = styled.span`
	display: block;
	text-align: center;
	margin-bottom: 15px;
`