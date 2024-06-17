import styled from "styled-components";


export const Container = styled.div`
	max-width: 970px;
	width: 100%;
	min-height: 100%;
	background: ${props => props.theme.colors.mainBg};
	min-height: 100%;
	overflow: hidden;
	margin: 0px auto;

	@media ${props => props.theme.media.smallScreen} {
		padding: 0px 15px;
	}
`