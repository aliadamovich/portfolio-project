import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { GridWrapper } from '../../../../components/GridWrapper';




export const PortfolioGrid = (props: { gridImages: Array<string> } ) => {

	return (
		<GridWrapper>
			{props.gridImages.map((i, index) => {
				return <GridItem key={index} href="#">
									<img src={i} alt="portfolio project" />
								</GridItem>
			}
			)}
		</GridWrapper>
	)
}


const GridItem = styled.a`
	position: relative;
	z-index: 0;
	
	&:hover{
		&::before,
		&::after {
			visibility: visible;
			opacity: 1;
		}
	}
	&::before{
		content: '';
		position: absolute;
		z-index: 1;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(255, 180, 0, 0.95);
		visibility: hidden;
		opacity: 0;
		transition: all 0.3s ease 0s;
	}
		&::after{
			content: '+';
			z-index: 2;
			position: absolute;
			font-size: 60px;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: ${theme.colors.boldFont};
			visibility: hidden;
			opacity: 0;
			transition: all 0.3s ease 0s;
		}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 1 / 1;
	}

`