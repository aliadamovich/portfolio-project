import React from 'react'
import map from './../../../../assets/images/Map.jpeg';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';

export function Map() {
	return (
		<StyledMap>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.579565263204!2d90.4221040769809!3d23.79798148694476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ba7a013201%3A0xb9fac513915dfd0d!2s35%20Vhatara%20Rd%2C%20Dhaka%201212%2C%20Bangladesh!5e0!3m2!1sen!2sar!4v1717376427832!5m2!1sen!2sar" width="100%" height="100%" loading="lazy"></iframe>
		</StyledMap>
	)
}

const StyledMap = styled.div`
	grid-column-start: span 2;
	
	iframe {
		border: 1px solid ${theme.colors.sectionsBg};
	}
`