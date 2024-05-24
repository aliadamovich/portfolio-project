import './App.css';
import styled from 'styled-components';
import sprite from './assets/images/sprite.svg'
import moon from './assets/images/moon.svg';

function App() {
    return (
        <div className="App">
					<Title>Welcome to IT-INCUBATOR</Title>
					<Button style={{ backgroundColor: 'rgba(230, 176, 176, 0.5)', width: '200px', height: '200px' }} 
					iconId='arrow'/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;
type ButtonPropsType = {
	iconId: string
	style: {
		backgroundColor?: string
		width?: string
		height?: string
	}
}

const Button = (props: ButtonPropsType) => {
	return (
		<div>
			<button style={props.style}>
				<svg xmlns="http://www.w3.org/2000/svg">
					<use xlinkHref={`${sprite}#${props.iconId}`} />
				</svg>
			</button>
				<img src={moon} alt="" />
		</div>
	)
}

