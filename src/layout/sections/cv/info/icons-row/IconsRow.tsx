import React from 'react'
import { Icon } from '../../../../../components/icon/Icon'
import { SvgLink } from '../../../../../components/svg-link/SvgLink'
import styled from 'styled-components'
import { theme } from '../../../../../styles/Theme'


export const IconsRow = (props: { icons: { href: string, id: string, svg: string }[] }) => {
	return (
		<StyledList>
			{
				props.icons.map(el => {
					return <li>
						<SvgLink href={el.href} iconId={el.svg} width='14' height='14' viewBox='0 0 14 14' />
					</li>
				})
			}
		</StyledList>
	)
}

const StyledList = styled.ul`
	display: flex;
	gap: 12px;
	margin-bottom: 25px;
`