import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { theme } from '../../../../styles/Theme'

export const PortfolioTabs = () => {
	return (

		<StyledPortfolioTabs>
			<li><a href="#">All categories</a></li>
			<li><a href="#">UI Design</a></li>
			<li><a href="#">Web Templates</a></li>
			<li><a href="#">Logo</a></li>
			<li><a href="#">Branding</a></li>
		</StyledPortfolioTabs>

	)
}

const StyledPortfolioTabs = styled.ul`
	margin-bottom: 50px;
	text-align: center;
	li {
		display: inline-block;
		&:hover{
			a{
				color: ${theme.colors.accent};
			}
		}
	
		& + li {
			margin-left: 37px;

			@media ${theme.media.tablet} {
				margin-left: 50px;
			}
		}

		a {
			transition: all 0.3s ease 0s;
			font-size: 18px;
			font-weight: 500;
			color: ${theme.colors.boldFont};
			line-height: 2;
		}
}
`