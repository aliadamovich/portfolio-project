import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'
import { CvContainer } from '../CvContainer'

type ProgressPropsType = {
	knowledge: {skill: string, value: string}[]
	title: string
}


export const Progress: React.FC<ProgressPropsType> = (props: ProgressPropsType) => {
	return (
		<CvContainer>
			<h3>{props.title}</h3>
			{
				props.knowledge.map((l, index) => {
					return <ProgressBarContainer key={index}>
						<label htmlFor={l.skill}>
							<span>{l.skill}</span>
							<span>{l.value}%</span>
						</label>
						<ProgressBar id={l.value} value={l.value} max='100' />
					</ProgressBarContainer>
				})
			}
		</CvContainer>
	)
}

const ProgressBarContainer = styled.div`
	&:not(:last-child){
		margin-bottom: 10px;
	}

	label {
		display: flex;
		justify-content: space-between;
		margin-bottom: 5px;
	}
`

const ProgressBar = styled.progress`
	box-sizing: border-box;
	display: block;
	border-radius: 4px;
	width: 220px;
	height: 6px;
	border: 1px solid ${theme.colors.accent};
	padding: 1px;
	background-color: ${theme.colors.sectionsBg};

	&::-webkit-progress-bar{
		background-color: #ffffff;
		border-radius: 6px;
	}
	&::-webkit-progress-value {
		background-color: ${theme.colors.accent};
		border-radius: 6px;
	}

	&::-moz-progress-bar {
		background-color: ${theme.colors.accent};
		border-radius: 6px;
	}

`
