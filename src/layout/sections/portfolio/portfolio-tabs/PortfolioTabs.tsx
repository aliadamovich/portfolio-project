import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/FlexWrapper'

export const PortfolioTabs = () => {
	return (
		<nav>
			<StyledPortfolioTabs>
				<li><a href="#">All categories</a></li>
				<li><a href="#">UI Design</a></li>
				<li><a href="#">Web Templates</a></li>
				<li><a href="#">Logo</a></li>
				<li><a href="#">Branding</a></li>
			</StyledPortfolioTabs>
		</nav>
	)
}

const StyledPortfolioTabs = styled.ul`
	text-align: center;
	li {
		display: inline-block;
	}
	li + li {
		margin-left: 37px;
	}
`