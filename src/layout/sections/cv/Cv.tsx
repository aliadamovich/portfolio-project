import React from 'react'
import { Progress } from './progress/Progress'
import styled from 'styled-components'
import { Extra } from './extra/Extra'
import { Info } from './info/Info'
import { Icon } from '../../../components/icon/Icon'
import { Button } from '../../../components/button/Button'
import { theme } from '../../../styles/Theme'
import { CvContainer } from './CvContainer'



export const Cv = () => {

	const languages = [ { skill: 'Bangla', value: '100' }, { skill: 'English', value:'80' }, { skill: 'Spanish', value: '60' }]
	const skills = [ { skill: 'Html', value: '90' }, { skill: 'CSS', value: '85' }, { skill: 'Js', value: '80' }, { skill: 'PHP', value: '75' }, { skill: 'WordPress', value: '85' }]
	const extra = ['Bootstrap, Materialize', 'Stylus, Sass, Less', 'Gulp, Webpack, Grunt', 'GIT Knowledge']
	
	return (
			<StyledCv>
				<Info />
				<Progress title='Languages' knowledge={languages}/>
				<Progress title='Skills' knowledge={skills}/>
				<Extra extra={extra}/>
				<CvContainer>
				<Button>download cv</Button>
				</CvContainer>

		</StyledCv>
	)
}

const StyledCv = styled.aside`
	max-width: 305px;
	width: 100%;
	position: absolute;
	/* height: 100%; */
	top: 0;
	left: 0;
	padding: 50px 45px 0px 40px;
	background-color: ${theme.colors.sectionsBg};


	@media (max-width:1024px){
		display: none;
	};
`
