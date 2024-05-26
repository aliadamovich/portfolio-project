import React from 'react'
import { Progress } from './progress/Progress'
import styled from 'styled-components'
import { Extra } from './extra/Extra'
import { Info } from './info/Info'
import { Icon } from '../../../components/icon/Icon'
import { Button } from '../../../components/button/Button'



export const Cv = () => {

	const languages = [ { skill: 'Bangla', value: '100' }, { skill: 'English', value:'80' }, { skill: 'Spanish', value: '60' }]
	const skills = [ { skill: 'Html', value: '90' }, { skill: 'CSS', value: '85' }, { skill: 'Js', value: '80' }, { skill: 'PHP', value: '75' }, { skill: 'WordPress', value: '85' }]
	const extra = ['Bootstrap, Materialize', 'Stylus, Sass, Less', 'Gulp, Webpack, Grunt', 'GIT Knowledge']
	
	return (
			<StyledCv>
				<Info />
				<div>
					<Progress title='Languages' knowledge={languages}/>
					<Progress title='Skills' knowledge={skills}/>
				</div>
				<Extra extra={extra}/>
			<Button text='download cv'/>

		</StyledCv>
	)
}

const StyledCv = styled.div`
	max-width: 305px;
	position: absolute;
	height: 100vh;
	top: 0;
	left: 0;
	padding-left: 20px;
`

// const ProgressContainer = styled.div`
// 	margin: 40px 0 0 40px;
// `
