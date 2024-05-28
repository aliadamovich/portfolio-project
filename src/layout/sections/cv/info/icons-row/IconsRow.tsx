import React from 'react'
import { Icon } from '../../../../../components/icon/Icon'
import { SvgLink } from '../../../../../components/svg-link/SvgLink'
import styled from 'styled-components'
import { theme } from '../../../../../styles/Theme'

export const IconsRow = (props: { icons: Array<string>} ) => {
	return (
		<StyledList>
			<li><SvgLink iconId='facebook' width='14' height='14' viewBox='0 0 14 14'/></li>
			<li><SvgLink iconId='instagram' width='14' height='14' viewBox='0 0 14 14'/></li>
			<li><SvgLink iconId='twitter' width='14' height='14' viewBox='0 0 14 14'/></li>
			<li><SvgLink iconId='linkedin' width='14' height='14' viewBox='0 0 14 14'/></li>
			<li><SvgLink iconId='youtube' width='14' height='14' viewBox='0 0 14 14'/></li>
			<li><SvgLink iconId='dribble' width='14' height='14' viewBox='0 0 14 14'/></li>
		</StyledList>
	)
}

const StyledList = styled.ul`
	display: flex;
	gap: 12px;
	margin-bottom: 25px;
`