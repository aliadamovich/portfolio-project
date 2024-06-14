import { SectionTitle } from '../../../components/SectionTitle'
import { SectionDescription } from '../../../components/SectionDescription'
import { Slider } from '../../../components/slider/Slider'
import styled from 'styled-components'
import { RecomendationsSlide } from './RecomendationsSlide';
import review1 from '../../../assets/images/review_1.jpeg';
import review2 from '../../../assets/images/review_2.jpeg';
import review3 from '../../../assets/images/review_3.jpeg';


const reviewsItems = [
	<RecomendationsSlide
		name='James Gouse'
		title='Great Quality!'
		review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'
		job='Graphic Designer'
		photo={review1}
		rating={5} />,

	<RecomendationsSlide
		name='Tiana Philips'
		title='Amazing work!'
		review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'
		job='Photographer'
		photo={review2}
		rating={5} />,

	<RecomendationsSlide
		name='Talan Westervelt'
		title='Great Quality!'
		review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'
		job='Business man'
		photo={review3}
		rating={5} />,
	<RecomendationsSlide
		name='James Gouse'
		title='Great Quality!'
		review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'
		job='Graphic Designer'
		photo={review1}
		rating={5} />,

	<RecomendationsSlide
		name='Tiana Philips'
		title='Amazing work!'
		review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'
		job='Photographer'
		photo={review2}
		rating={5} />,

	<RecomendationsSlide
		name='Talan Westervelt'
		title='Great Quality!'
		review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....'
		job='Business man'
		photo={review3}
		rating={5} />
];

export function Recomendations() {
	return (
		<RecomendationsSection>
			<SectionTitle>Recomendations</SectionTitle>
			<SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
			<Slider items={reviewsItems}/>
		</RecomendationsSection>
	)
}

const RecomendationsSection = styled.section`
	position: relative;
	h2 {
		margin: 65px 0 25px;
	}

	>p {
		margin-bottom: 72px;
	}
`