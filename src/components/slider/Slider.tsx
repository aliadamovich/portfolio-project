import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';
import './../../styles/slider.css';

type SliderPropsType = {
	items: any
	disableDotsControls?: boolean
}

const responsive = {
	0: { items: 1.2 },
	768: { items: 2.2 },
	1220: { items: 3 },
};


export const Slider: React.FC<SliderPropsType> = (props: SliderPropsType) => (
		<AliceCarousel
			mouseTracking
			items={props.items}
			responsive={responsive}
			disableButtonsControls={true}
			disableDotsControls= {props.disableDotsControls || false}
		/>
);

