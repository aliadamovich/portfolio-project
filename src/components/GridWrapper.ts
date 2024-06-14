
import styled from 'styled-components'

type GridWrapperPropsType = {
	gtc?: string
	gap?:string
}

export const GridWrapper = styled.div<GridWrapperPropsType>`
	display: grid;
	grid-template-columns: ${props => props.gtc || 'repeat(auto-fit,minmax(250px, 1fr))'};
	gap: ${props => props.gap || '20px'};

`
