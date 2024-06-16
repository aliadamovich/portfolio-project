import styled from "styled-components"
import { theme } from "../../../styles/Theme"

const ServicesSection = styled.section`
	position: relative;
	h2 {
		margin-top: calc( (min(100vw,1440px) - 320px)/(1440 - 320) * (138 - 86) + 86px);
	}
	>p {
		margin-bottom: 64px;
	}
`

const Title = styled.h3`
	margin-top: 26px;
`

const ServiceDescription = styled.p`
	font-size: 15px;
`

const CardBody = styled.div`
	flex: 0 1 33.3%;
	text-align: center;
	background-color: ${theme.colors.sectionsBg};
	padding: 25px 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	>svg {
		transition: all 0.5s ease 0s;
	}
	a {
	opacity: 0;
}

	&:hover{
		>svg {
			height: 0;
		}
		a {
			opacity: 1;
			&:hover{
				opacity: 0.7;
			}
		}
	}
`

export const S = {
	ServicesSection,
	Title,
	ServiceDescription,
	CardBody
}