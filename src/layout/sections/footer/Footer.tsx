import React from 'react'
import { Icon } from '../../../components/icon/Icon'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { theme } from '../../../styles/Theme'

export function Footer() {
	return (
		<StyledFooter>
			<FlexWrapper justify='space-between' wrap='wrap'>
				<Icon iconId='g-1' width="128" height="89" viewBox="0 0 128 89"/>
				<Icon iconId='g-2' width="124" height="102" viewBox="0 0 124 102" />
				<Icon iconId='g-3' width="134" height="84" viewBox="0 0 134 84" />
				<Icon iconId='g-4' width="128" height="94" viewBox="0 0 128 94" />
			</FlexWrapper>
			<Copyright>
				<Icon iconId='copyright' width='24' height='24' viewBox='0 0 24 24'/>
				<Small>2021 All Rights Reserved.Ojjomedia</Small>
			</Copyright>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	margin-top: 95px;
	
	@media screen and (max-width:425px){
		&:first-child{
			justify-content: center;
			border: 1px solid red;
		}
	};
`
const Copyright = styled.div`
	background-color: ${theme.colors.sectionsBg};
	display: flex;
	align-items: center;
	gap: 17px;
	justify-content: center;
	padding: 14px 10px;
	margin-top: 95px;
`
const Small = styled.small`
	color: ${theme.colors.boldFont};
`