import React from 'react';
import hero from './../../../assets/images/main_img.png';
import hero_webp from './../../../assets/images/main_img.webp';
import hero2_webp from './../../../assets/images/hero_2.webp';
import hero3_webp from './../../../assets/images/hero_3.webp';
import hero2x from './../../../assets/images/hero@2.png';
import hero3x from './../../../assets/images/hero@3.png';
import { Button } from '../../../components/button/Button';
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect';


export const Main: React.FC = () => {
	return (
		<S.MainSection>
			<S.MainWrapper >
				<S.MainContent>
					<S.MainTitle as={'p'}>I’m Rayan Adlrdard </S.MainTitle>
					<S.MainTitle>
						<p>Front-end Developer</p>
						<Typewriter
							options={{
								delay: 160,
								autoStart: true,
								loop: true,
							}}
							onInit={(typewriter) => {
								typewriter
									.typeString('<span style="color: #ffb400">Front-end<span>')
									.typeString(' ')
									.typeString('<span style=style="color: #2b2b2b">Developer</span>')
									.start();
							}}
						/>
					</S.MainTitle>
					<S.MainText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</S.MainText>
					<Button text='HIRE ME' isIcon={true} iconId='arrow-right' width='11' height='11' viewBox='0 0 11 11' />
				</S.MainContent>
				<S.MainImgWrapper >
					<picture>
						<source src={hero_webp} srcSet={`${hero2_webp} 2x, ${hero3_webp} 3x`} type='image/webp'/>
						<source srcSet={`${hero2x} 2x, ${hero3x} 3x`} type="image/png" />
						<img src={hero} alt="main photo" />
					</picture>
				</S.MainImgWrapper>
			</S.MainWrapper>
		</S.MainSection>
	)
}

