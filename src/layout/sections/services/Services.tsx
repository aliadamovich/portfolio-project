import React from 'react'
import { SectionTitle } from '../../../components/SectionTitle'
import { SectionDescription } from '../../../components/SectionDescription'
import { GridWrapper } from '../../../components/GridWrapper'
import { Fade } from "react-awesome-reveal";
import { theme } from '../../../styles/Theme'
import { Icon } from '../../../components/icon/Icon'
import { YellowLink } from '../../../components/yellow-link/YellowLink'
import {S} from './Services_Styles'

const servicesData = [
	{ icon: 's-1', name: 'web development', description: 'blog, e-commerce' },
	{ icon: 's-2', name: 'uI/uX design', description: 'Mobile app, website design' },
	{ icon: 's-6', name: 'sound design', description: 'Voice Over, Beat Making' },
	{ icon: 's-3', name: 'game design', description: 'Character Design, Props & Objects' },
	{ icon: 's-4', name: 'photography', description: 'portrait, product photography' },
	{ icon: 's-5', name: 'advertising', description: 'lorem ipsum amet' },
]

export const Services: React.FC = () => {
	return (
		<S.ServicesSection id='services'>
			<SectionTitle>my services</SectionTitle>
			<SectionDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</SectionDescription>
			<Fade cascade damping={0.2}>
				<GridWrapper >
					{
						servicesData.map((s, index) => {
							return <S.CardBody key={index}>
											<Icon iconId={s.icon} fill={theme.colors.accent} width='78' height='78' viewBox='0 0 78 78' />
											<S.Title>{s.name}</S.Title>
											<S.ServiceDescription>{s.description}</S.ServiceDescription>
											<YellowLink text='order now' />
										</S.CardBody>
						})
					}
					</GridWrapper>
				</Fade>
		</S.ServicesSection>
	)
}
