import React from 'react'
import styled from 'styled-components';




export const PortfolioGrid = (props: { gridImages: Array<string> } ) => {

	return (
		<StyledGrid>
			{props.gridImages.map(i => {
				return <a href="#">
									<img src={i} alt="" />
							</a>
			}
			)}
		</StyledGrid>
	)
}

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;

	a > img {
		max-height: 300px;
		/* object-fit: cover; */
	}
`