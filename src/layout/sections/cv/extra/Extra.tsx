import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'
import { CvContainer } from '../CvContainer'

export const Extra = (props: {extra: Array<string>} ) => {
	return (
		<CvContainer>
			<h3>Extra Skills</h3>
			<ExtraList>
				{
					props.extra.map((el, index) => {
						return <li key={index}>
											<Icon iconId='monitors' width='15' height='15' viewBox='0 0 15 15' fill='none'></Icon>
											<span>{el}</span>
									</li>
					})
				}

			</ExtraList>
			
		</CvContainer>
	)
}


const ExtraList = styled.ul`
	list-style: none;
	li>span{

		margin-left: 15px;
	}
`