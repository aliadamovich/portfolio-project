import React from 'react'
import { Icon } from '../../../../../components/icon/Icon'

export const IconsRow = (props: { icons: Array<string>} ) => {
	return (
		<div>
			{
				props.icons.map(i => {

					return <Icon iconId={i}width='14' height='14' viewBox='0 0 14 14' />
				})
			}
		</div>
	)
}

