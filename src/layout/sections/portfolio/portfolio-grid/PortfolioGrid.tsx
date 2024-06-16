import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { GridWrapper } from '../../../../components/GridWrapper';
import { Fade } from 'react-awesome-reveal';
import { motion, AnimatePresence } from "framer-motion"



export const PortfolioGrid = (props: { portfolioWorks: {src: string, filter: string}[] } ) => {

	return (
		<GridWrapper>
				<AnimatePresence>
					{props.portfolioWorks.map((work, index) => {
						return (
							<Fade damping={0.2}>
      					<GridItem 
								key={index}
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}>
									<img src={work.src} alt="portfolio project" />
								</GridItem>
						</Fade>
						)})}
					
				</AnimatePresence>
				
		</GridWrapper>
	)
}


const GridItem = styled(motion.div)`
	position: relative;
	z-index: 0;
	cursor: pointer;
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