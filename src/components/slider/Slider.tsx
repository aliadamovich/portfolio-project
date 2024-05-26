import React from 'react'
import { FlexWrapper } from '../FlexWrapper'
import { Slide } from './slide/Slide'
import review1 from '../../assets/images/review_1.jpeg';
import review2 from '../../assets/images/review_2.jpeg';
import review3 from '../../assets/images/review_3.jpeg';

export function Slider() {
	return (
		<div>
			<FlexWrapper gap='15px'>
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
					
			</FlexWrapper>
		</div>
	)
}
