
import styled from 'styled-components'

type GridWrapperPropsType = {
	gtc?: string
	gap?:string
}

export const GridWrapper = styled.div<GridWrapperPropsType>`
	display: grid;
	grid-template-columns: ${props => props.gtc || 'repeat(3, 1fr)'};
	/* grid-template-columns: ${props => props.gtc || 'repeat(auto-fit, minmax(200px, 310px))'}; */
	gap: ${props => props.gap || '20px'};

	@media (max-width:762px){
		grid-template-columns: repeat(2, 1fr);
	};
`
