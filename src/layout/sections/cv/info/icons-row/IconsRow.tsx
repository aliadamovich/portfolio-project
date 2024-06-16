import React from 'react'
import { Icon } from '../../../../../components/icon/Icon'
import { SvgLink } from '../../../../../components/svg-link/SvgLink'
import styled from 'styled-components'


export const IconsRow: React.FC<{ icons: { href: string, id: string, svg: string }[] }> = (props: { icons: { href: string, id: string, svg: string }[] }) => {

	return (
		<StyledList>
			{
				props.icons.map((el, index) => {
					return <SvgLink href={el.href} iconId={el.svg} width='14' height='14' viewBox='0 0 14 14' key={index} />
				})
			}
		</StyledList>
	)
}

const StyledList = styled.ul`
	display: flex;
	justify-content: center;
	gap: 12px;
	margin-bottom: 25px;
`