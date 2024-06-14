import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../../../styles/Theme'

type PortfolioTabsPropsType = {
	tabsData: Array<{ title: string, status: 'all' | 'ui' | 'web' | 'logo' | 'branding' }>
	onTabClick: (param: 'all' | 'ui' | 'web' | 'logo' | 'branding') => void
	currentFilterStatus: string
}


export const PortfolioTabs = (props: PortfolioTabsPropsType) => {
	return (

		<StyledPortfolioTabs>
			{props.tabsData.map(tab => {
				return <li>
								<TabButton active={tab.status === props.currentFilterStatus} 
														onClick={() => { props.onTabClick(tab.status) }}>{tab.title}
								</TabButton>
							</li>
			})}
		</StyledPortfolioTabs>

	)
}
const TabButton = styled.button<{active: boolean}>`
	transition: all 0.3s ease 0s;
	font-size: 18px;
	font-weight: 500;
	color: ${theme.colors.boldFont};
	line-height: 2;

	${props => props.active && css<{ active: boolean }>`
	color: ${ theme.colors.accent };
	`}
`

const StyledPortfolioTabs = styled.ul`
	margin-bottom: 35px;
	padding-bottom: 15px;
	text-align: center;
	overflow: auto;
	white-space: nowrap;
	li {
		display: inline-block;
		&:hover{
			${TabButton} {
				color: ${theme.colors.accent};
			}
		}
	
	& + li {
			margin-left: 37px;

			@media ${theme.media.tablet} {
				margin-left: 50px;
			}
		}

}
`

