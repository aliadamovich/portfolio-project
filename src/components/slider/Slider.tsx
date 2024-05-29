import React from 'react'
import { Slide } from './slide/Slide'
import review1 from '../../assets/images/review_1.jpeg';
import review2 from '../../assets/images/review_2.jpeg';
import review3 from '../../assets/images/review_3.jpeg';
import { theme } from '../../styles/Theme';
import styled from 'styled-components';
import { GridWrapper } from '../GridWrapper';

export function Slider() {
	return (
		<div>
			<GridWrapper>
				<Slide
				name='James Gouse' 
				title='Great Quality!'
				review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'
				job='Graphic Designer'
				photo={review1}/>

				<Slide
					name='Tiana Philips'
					title='Amazing work!'
					review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'
					job='Photographer'
					photo={review2} />

				<Slide
					name='Talan Westervelt'
					title='Great Quality!'
					review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'
					job='Business man'
					photo={review3} />
					
			</GridWrapper>
			<Pagination>
				<span></span>
				<span></span>
				<span className='active'></span>
			</Pagination>
		</div>
	)
}

const Pagination = styled.div`
	margin-top: 50px;
	text-align: center;
	span {
		display: inline-block;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: ${theme.colors.mainFont};
		opacity: 0.8;
		& + span {
			margin-left: 10px;
		}
		&.active {
			background-color: ${theme.colors.accent};
			opacity: 1;
		}
	}
`