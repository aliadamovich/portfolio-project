import React from 'react'
import styled from 'styled-components'

export const DataInfo = (props: { data: Record<string, any>[] }) => {
	return (
		<div>
			{
				props.data.map(d => {
					return <div>
										<Label>{d.name}</Label>
										<span>{d.value}</span>
									</div>
				})
			}
		</div>
	)
}

const Label = styled.span`
background: #dcb63b;
`