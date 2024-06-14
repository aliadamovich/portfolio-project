import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Container = styled.div`
	max-width: 970px;
	width: 100%;
	min-height: 100%;
	background: #f5f5f5;
	min-height: 100%;
	overflow: hidden;
	margin: 0px auto;

	@media ${theme.media.smallScreen} {
		padding: 0px 15px;
	}
`