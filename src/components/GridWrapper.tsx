
import styled from 'styled-components'

type GridWrapperPropsType = {
	gtc?: string
	gap?:string
}

export const GridWrapper = styled.div<GridWrapperPropsType>`
	display: grid;
	grid-template-columns: ${props => props.gtc || 'repeat(3, 1fr)'};
	gap: ${props => props.gap || '20px'};


	@media screen and (max-width:1200px) and (min-width:993px){
		grid-template-columns: repeat(2, 1fr);
	};
`
