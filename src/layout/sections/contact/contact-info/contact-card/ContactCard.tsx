import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../../components/icon/Icon'
import { theme } from '../../../../../styles/Theme';
import { SvgLink } from '../../../../../components/svg-link/SvgLink';



type ContactCardProps = {
	options: { name: string; value: string, href: string }[]
	iconId: string
};

export function ContactCard(props: ContactCardProps) {

	
	return (
		<StyledCard>
			<SvgLink iconId={props.iconId} width="18" height="18" viewBox="0 0 18 18" />

			{props.options.map((o, i) => {
				return <Row key={i}>
								<Name>{o.name}</Name>
					<Value target='_blank' href={o.href}>{o.value}</Value>
							</Row>
			})}
		</StyledCard>
	)
}

const StyledCard = styled.div`
	background-color: ${theme.colors.sectionsBg};
	padding: 25px 25px 16px;
	text-align: center;
	& + div {
		margin-top: 18px;
	}

	>a {
		padding: 12px;
		margin-bottom: 31px;
	}
`
const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	& + div {
		margin-top: 16px;
	}
`
const Name = styled.span`
	font-size: 18px;
	font-weight: 500;
`
const Value = styled.a`
	color: ${theme.colors.mainFont};
`