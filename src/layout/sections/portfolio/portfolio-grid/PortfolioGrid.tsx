import React, { useState } from 'react'
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { GridWrapper } from '../../../../components/GridWrapper';
import { Fade } from 'react-awesome-reveal';
import { motion, AnimatePresence } from "framer-motion"
import { SectionTitle } from '../../../../components/SectionTitle';



export const PortfolioGrid = (props: { portfolioWorks: {src: string, filter: string, id: number}[] } ) => {
	
	// const [showModal, setShowModal] = useState(false);
	const [currentWork, setCurrentWork] = useState<{ src: string, filter: string, id: number } | null>(null);
	const handleOpenModal = (work: { src: string, filter: string, id: number }) => {
		setCurrentWork(work);
	};

	const handleCloseModal = () => {
		setCurrentWork(null);
	};

	return (
			<GridWrapper>
					<AnimatePresence>
						{props.portfolioWorks.map((work) => {
							return (
									<>
									<GridItem onClick={() => handleOpenModal(work)}
										key={work.id}
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}>
										<img src={work.src} alt="portfolio project" />
										</GridItem>
										{currentWork &&
											<Modal img={currentWork.src} title={currentWork.filter} onClose={handleCloseModal} />
										}
									</>
							)})}
						
					</AnimatePresence>
			</GridWrapper>
	)
}


const Modal = (props: { img: string, title: string, show?: boolean, onClose: () => void }) => {
	
	return (
		<ModalPopup onClick={(e) =>{ e.stopPropagation(); props.onClose()}}>
			<PopupContent onClick={e => e.stopPropagation()}>
				<Photos>
					<img src={props.img} alt="portfolio project" />
				</Photos>
				<SectionTitle>{props.title}</SectionTitle>
				<Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur eaque perferendis magni? Iste ea debitis voluptates maxime cupiditate natus culpa obcaecati ipsa laborum, consequuntur suscipit nihil doloribus repellendus autem.lor
				</Description>
				<CloseButton onClick={props.onClose}>&times;</CloseButton>
			</PopupContent>
		</ModalPopup>
	)
}

export default Modal


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
const ModalPopup = styled.div`
padding: 0 30px;
	cursor: auto;
	position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(75, 75, 75, 0.202);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20000;
`

const PopupContent = styled.div`
	position: relative;
	background: ${props => props.theme.colors.sectionsBg};
  padding: 40px 40px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
	>*:not(:first-child) {
		margin-top: 20px;
	}
`
const Photos = styled.div`
	img {
		width: 100%;
	}
`

const Description = styled.div`

`

const CloseButton = styled.button`
	position: absolute;
  top: -50px;
  right: -20px;
  background: none;
  border: none;
  font-size: 3rem;
  cursor: pointer;
	background-color: ${props => props.theme.colors.accent};
	border-radius: 50%; 
	padding: 4px 13px 7px;
	line-height: 1;
	vertical-align: center;
	transition: all 0.3s ease 0s;

	&:hover{
		background-color: ${props => props.theme.colors.sectionsBg};
	}
`