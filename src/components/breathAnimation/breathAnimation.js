import styled, {keyframes} from 'styled-components';

export default function BreatheAnimation() {
	return (
		<Container data-testid="animation">
			<Circle1 />
			<Circle2 />
			<Circle3 />
			<StyledSpanIn>Breathe in</StyledSpanIn>
			<StyledSpanOut>Breathe out</StyledSpanOut>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 350px;
`;

const breatheAnimation1 = keyframes`
 0% { width: 60px;
	height: 60px;
	opacity: 0.8; }
 50% { width: 190px;
	height: 190px;
	border-radius:  80% 60% 70% 60%  / 70% 60% 70% 60%;
	opacity: 1;
	}
 100% { width: 60px;
 height: 60px;
 transform: rotate(10deg);
 opacity: 0.8;}
`;

const Circle1 = styled.div`
	position: absolute;
	z-index: 1;
	width: 30px;
	height: 30px;
	animation-name: ${breatheAnimation1};
	animation-duration: 10s;
	animation-iteration-count: infinite;
	border-radius: 50%;
	background-color: var(--turq);
`;

const breatheAnimation2 = keyframes`
 0% {  width: 60px;
	height: 60px;
	opacity: 0.4; }
 50% { width: 250px;
	height: 250px;
	border-radius:  80% 60% 70% 60%  / 70% 60% 70% 60%;
	opacity: 0.5
 }
 100% {  width: 60px;
 height: 60px;
 transform: rotate(10deg);
 opacity: 0.4;}
`;

const Circle2 = styled.div`
	position: absolute;
	z-index: 2;
	width: 30px;
	height: 30px;
	animation-name: ${breatheAnimation2};
	animation-duration: 10s;
	animation-iteration-count: infinite;
	border-radius: 50%;
	background-color: var(--turq);
`;

const breatheAnimation3 = keyframes`
 0% {  width: 60px;
	height: 60px;
	opacity: 0.2; }
 50% {  width: 290px;
	height: 290px;
	border-radius:  80% 60% 70% 60%  / 70% 60% 70% 60%;
	opacity: 0.3;
	}
 100% { width: 60px;
 height: 60px;
 transform: rotate(20deg);
 opacity: 0.2;}
`;
const Circle3 = styled.div`
	position: absolute;
	z-index: 3;
	width: 30px;
	height: 30px;
	animation-name: ${breatheAnimation3};
	animation-duration: 10s;
	animation-iteration-count: infinite;
	border-radius: 50%;
	background-color: var(--turq);
`;

const textAnimationIn = keyframes`
 0% { opacity: 0; }
 25% { opacity: 1; }
 49% { opacity: 0; }
 100% { opacity: 0; }
`;

const textAnimationOut = keyframes`
 0% { opacity: 0; }
 51% { opacity: 0; }
 75% { opacity: 1; }
 100% { opacity: 0; }
`;

const StyledSpanIn = styled.span`
	position: absolute;
	z-index: 4;
	animation-name: ${textAnimationIn};
	animation-duration: 10s;
	animation-iteration-count: infinite;
	color: #fff;
	font-weight: 400;
`;

const StyledSpanOut = styled.span`
	position: absolute;
	z-index: 5;
	animation-name: ${textAnimationOut};
	animation-duration: 10s;
	animation-iteration-count: infinite;
	color: #fff;
	font-weight: 400;
`;
