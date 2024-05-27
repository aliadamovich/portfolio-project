import React from 'react'
import styled from 'styled-components'
import { Label } from '../../../../../components/Label'



export const DataInfo = (props: { data: { name: string, value: string }[] }) => {
	return (
		<div>
			{
				props.data.map((d, index) => {
					return <div key={index}>
										<Label>{d.name}</Label>
										<span>{d.value}</span>
									</div>
				})
			}
		</div>
	)
}
