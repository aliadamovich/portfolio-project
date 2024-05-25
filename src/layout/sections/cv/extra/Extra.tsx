import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'
import { SidebarTitle } from '../SidebarTitle'

export const Extra = (props: {extra: Array<string>} ) => {
	return (
		<div>
			<SidebarTitle>Extra Skills</SidebarTitle>
			<ExtraList>
				{
					props.extra.map(el => {
						return <li>
										<Icon iconId='monitors' width='15' height='15' viewBox='0 0 15 15'></Icon>
										<span>{el}</span>
									</li>

					})
				}

			</ExtraList>
			
		</div>
	)
}


const ExtraList = styled.ul`
	list-style: none;
	li>span{

		margin-left: 5px;
	}
`