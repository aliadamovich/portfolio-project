import React from 'react';
import hero from './../../../assets/images/main_img.png'
import { FlexWrapper } from '../../../components/FlexWrapper';
import styled from 'styled-components';

export const Main = () => {
	return (
		<div>
			<FlexWrapper align='center' justify='space-around'>
				<MainContent>
					<h2>I’m Rayan Adlrdard </h2>
					<h1>Front-end Developer</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>
					<button>HIRE ME</button>
				</MainContent>
				<img src={hero} alt="main photo" />
			</FlexWrapper>
		</div>
	)
}

export default Main

const MainContent = styled.div`
	flex: 0 1 60%;
`