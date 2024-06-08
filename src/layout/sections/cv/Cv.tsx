import React from 'react'
import { Progress } from './progress/Progress'
import styled, { css } from 'styled-components'
import { Extra } from './extra/Extra'
import { Info } from './info/Info'
import { Button } from '../../../components/button/Button'
import { theme } from '../../../styles/Theme'
import { CvContainer } from './CvContainer'



export const Cv = () => {

	const languages = [ { skill: 'Bangla', value: '100' }, { skill: 'English', value:'80' }, { skill: 'Spanish', value: '60' }]
	const skills = [ { skill: 'Html', value: '90' }, { skill: 'CSS', value: '85' }, { skill: 'Js', value: '80' }, { skill: 'PHP', value: '75' }, { skill: 'WordPress', value: '85' }]
	const extra = ['Bootstrap, Materialize', 'Stylus, Sass, Less', 'Gulp, Webpack, Grunt', 'GIT Knowledge']
	
	return (
			<StyledCv isOpen={false}>
				<Info />
				<Progress title='Languages' knowledge={languages}/>
				<Progress title='Skills' knowledge={skills}/>
				<Extra extra={extra}/>
				<CvContainer>
				<Button text='download cv' isIcon iconId='download' width='12' height='12' viewBox='0 0 12 12'/>
				</CvContainer>

		</StyledCv>
	)
}

const StyledCv = styled.aside<{isOpen: boolean}>`
	max-width: 305px;
	width: 100%;
	/* height: 100%; */
	padding: 50px 45px 0px 40px;
	background-color: ${theme.colors.sectionsBg};
	transition: all 0.3s ease 0s;
	position: sticky;
	height: 100vh;
	overflow: auto;
	overscroll-behavior: contain;
	top: 0;
	left: 0;
	@media ${theme.media.smallScreen} {
		position: absolute;
		top: 0;
		left: -100%;

		${props => props.isOpen && css<{ isOpen: boolean }>`
		left: 0;
		z-index: 10001;
	`}
	};

	&.open {
		left: 0;
		z-index: 10001;
	}
`
