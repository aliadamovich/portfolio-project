import React from 'react'
import map from './../../../../assets/images/Map.jpeg';
import styled from 'styled-components';

export function Map() {
	return (
		<StyledMap>
			<img src={map} alt="" />
		</StyledMap>
	)
}

const StyledMap = styled.div`
	grid-column-start: span 2;
	img {
		width: 100%;
	
	}
`