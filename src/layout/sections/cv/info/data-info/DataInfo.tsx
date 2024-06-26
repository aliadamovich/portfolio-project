import React from 'react'
import styled, { css } from 'styled-components'
import { Label } from '../../../../../components/Label'
import { color } from 'framer-motion'


type DataInfoPropsType = {
	data: { name: string, value: string, modified ?: boolean } []
}

type ValuePropsType = {
	modified?: boolean;
}

export const DataInfo = (props: DataInfoPropsType) => {
	return (
		<StyledDataInfo>
			{
				props.data.map((d, index) => {
					return <StyledDataItem key={index}>
										<Label>{d.name}</Label>
										<Value modified={d.modified}>{d.value}</Value>
									</StyledDataItem>
				})
			}
		</StyledDataInfo>
	)
}

const StyledDataInfo = styled.div`
	div + div {
		margin-top: 10px;
	}
`

const StyledDataItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
`

const Value = styled.span<ValuePropsType>`
	color: ${props => props.theme.colors.boldFont};

	 ${props => props.modified && css<ValuePropsType>`
		color: #7eb942;
	 `}
`