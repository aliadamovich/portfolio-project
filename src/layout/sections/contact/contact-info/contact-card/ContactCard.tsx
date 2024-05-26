import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../../components/icon/Icon'

// type Option = {
// 	name: string;
// 	value: string;
// };

type ContactCardProps = {
	options: { name: string; value: string }[]
	iconId: string
};

export function ContactCard(props: ContactCardProps) {

	
	return (
		<StyledCard>
			<Icon iconId={props.iconId}/>

			{props.options.map((o, i) => {
				return <Row key={i}>
								<Name>{o.name}</Name>
								<Value>{o.value}</Value>
							</Row>
			})}
		</StyledCard>
	)
}

const StyledCard = styled.div`
	
`
const Row = styled.div`
	
`
const Name = styled.span`
	
`
const Value = styled.span`
	
`