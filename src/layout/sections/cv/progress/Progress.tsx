import React from 'react'
import styled from 'styled-components'
import { SidebarTitle } from '../SidebarTitle'

type ProgressPropsType = {
	knowledge: Record<string, any>[]
	title: string
}


export const Progress = (props: ProgressPropsType) => {
	return (
		<ProgressContainer>
			<SidebarTitle>{props.title}</SidebarTitle>

			{
				props.knowledge.map((l, index) => {
					return <div key={index}>
									<label htmlFor={l.skill}>{l.skill}
										<span>{l.value}%</span>
									</label>
									<ProgressBar id={l.value} value={l.value} max='100'/>
								</div>
				})
			}
			
		</ProgressContainer>
	)
}


const ProgressBar = styled.progress`
	box-sizing: border-box;
	display: block;
	border-radius: 4px;
	width: 220px;
	height: 6px;
	border: 1px solid #ffb400;
	padding: 1px;
	/* margin-top: 10px; */
	background-color: #fff;

	&::-webkit-progress-bar{
		background-color: #ffffff;
		border-radius: 6px;
	}
	&::-webkit-progress-value {
		background-color: #ffb400;
		border-radius: 6px;
	}

	&::-moz-progress-bar {
		background-color: #ffb400;
		border-radius: 6px;
	}

`


const ProgressContainer = styled.div`
	margin-bottom: 50px;
`

const ProgressTitle = styled.h3`

`