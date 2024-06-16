import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'
import { CvContainer } from '../CvContainer'
import ProgressBar  from "@ramonak/react-progress-bar";
import './progress.css'
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
						<ProgressBar 
							animateOnRender={true}
							transitionDuration="1.5s"
							completed={l.value} 
							height="3px" 
							bgColor={theme.colors.accent} 
							baseBgColor={theme.colors.sectionsBg} 
							isLabelVisible={false}
							className="wrapper"
							barContainerClassName="container"
							/>
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

