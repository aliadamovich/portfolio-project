import React, { useState } from 'react'
import { Progress } from './progress/Progress'
import styled, { css } from 'styled-components'
import { Extra } from './extra/Extra'
import { Info } from './info/Info'
import { Button } from '../../../components/button/Button'
import { theme } from '../../../styles/Theme'
import { CvContainer } from './CvContainer'

const languages = [{ skill: 'Bangla', value: '100' }, { skill: 'English', value: '80' }, { skill: 'Spanish', value: '60' }]
const skills = [{ skill: 'Html', value: '90' }, { skill: 'CSS', value: '85' }, { skill: 'Js', value: '80' }, { skill: 'PHP', value: '75' }, { skill: 'WordPress', value: '85' }]
const extra = ['Bootstrap, Materialize', 'Stylus, Sass, Less', 'Gulp, Webpack, Grunt', 'GIT Knowledge']

export const Cv: React.FC = () => {

	const [cvIsOpen, setCvIsOpen] = useState(false);
	const onBurgerClick = () => { setCvIsOpen( !cvIsOpen ) }
	
	return (
		<Aside isOpen={cvIsOpen} onClick={ () => {setCvIsOpen(false)} }>
			<BurgerButton isOpen={cvIsOpen} 
				onClick={(e) => {
				e.stopPropagation();
				onBurgerClick();
			}}>
				<span></span>
			</BurgerButton>
			<StyledCv isOpen={cvIsOpen}>
				<Info />
				<Progress title='Languages' knowledge={languages} />
				<Progress title='Skills' knowledge={skills} />
				<Extra extra={extra} />
				<CvContainer>
					<Button text='download cv' isIcon iconId='download' width='12' height='12' viewBox='0 0 12 12' />
				</CvContainer>
			</StyledCv>
		</Aside>
	)
}
const Aside = styled.aside<{ isOpen: boolean }>`
	&::before{
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #5a5a5a68;
		z-index: 10000;
		transition: all 0.3s ease 0s;
		opacity: 0;
		visibility: hidden;
	}
	${props => props.isOpen && css<{ isOpen: boolean }>`
		&::before{
			opacity: 1;
			visibility: visible;
		}
	`}
`

const StyledCv = styled.div<{isOpen: boolean}>`
	max-width: 305px;
	width: 100%;
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
		z-index: 10001;

		${props => props.isOpen && css<{ isOpen: boolean }>`
			left: 0;
		`}
	};

	@media ${theme.media.mobile} {
		max-width: 100%;
	}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
	display: none;
	position: absolute;
	width: 30px;
	height: 18px;
	top: 35px;
	left: 30px;
	z-index: 10002;

	@media ${theme.media.smallScreen} {
		display: block;
	}

	span {
		position: absolute;
		display: block;
		background-color: ${theme.colors.accent};
		width: 100%;
		height: 2px;
		top: 7px;
		transition: all 0.3s ease 0s;

		&::before{
			content: '';
			display:block;
			background-color: ${theme.colors.accent};
			width: 100%;
			height: 2px;
			position: absolute;
			transform: translateY(-10px);
			transition: all 0.3s ease 0s;
		}
		&::after{
			content: '';
			position: absolute;
			display: block;
			background-color: ${theme.colors.accent};
			width: 100%;
			height: 2px;
			transform: translateY(10px);
			transition: all 0.3s ease 0s;
		}
	}

	${props => props.isOpen && css<{ isOpen: boolean }>`
			span {
			background-color: rgba(255, 255, 255, 0);
			&::before{
			transform: rotate(45deg) translateY(0px);
			}
			&::after{
				transform: rotate(-45deg) translateY(0px);
			}
		}
	`}
`