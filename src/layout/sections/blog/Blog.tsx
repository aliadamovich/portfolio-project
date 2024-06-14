import { SectionTitle } from '../../../components/SectionTitle'
import { SectionDescription } from '../../../components/SectionDescription'
import img1 from '../../../assets/images/portfolio/img-1.jpeg'
import img2 from '../../../assets/images/portfolio/img-2.jpeg'
import img3 from '../../../assets/images/portfolio/img-3.jpeg'
import { Slider } from '../../../components/slider/Slider'
import { YellowLink } from '../../../components/yellow-link/YellowLink'
import {S} from './Blog_Styles'

const articleContent = [
	{ src: img1, title: 'How to make web tempates', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ' },
	{ src: img2, title: 'Make Business card', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ' },
	{ src: img3, title: 'How to make Flyer Design', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ' }
]

const blogItems = articleContent.map((a, i) => {
	return(
		<S.BlogCardBody key={i}>
		<>
				<S.ImgWrapper>
					<img src={a.src} alt="article cover" />
				</S.ImgWrapper>
				<S.Content>
					<S.Title>{a.title}</S.Title>
					<S.Text>{a.body}</S.Text>
					<YellowLink text='learn more' />
				</S.Content>
		</>
		</S.BlogCardBody>
	)
})

export const Blog: React.FC = () => {

	return (
		<S.Blog>
			<SectionTitle>Blog</SectionTitle>
			<SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
			<Slider items={blogItems} disableDotsControls={true} />
		</S.Blog>
	)
}

