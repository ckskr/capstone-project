import styled, {keyframes} from 'styled-components';

export default function BreatheAnimation() {
	return (
		<Container data-testid="animation">
			<Circle1 />
			<Circle2 />
			<Circle3 />
			<StyledSpanIn>Breath in</StyledSpanIn>
			<StyledSpanOut>Breath out</StyledSpanOut>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 450px;
`;

const breatheAnimation1 = keyframes`
 0% { width: 50px;
	height: 50px;
	opacity: 0.8; }
 50% { width: 100px;
	height: 100px;
	opacity: 1; }
 100% { width: 50px;
 height: 50px;
 opacity: 0.8; }
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
 0% {  width: 50px;
	height: 50px;
	opacity: 0.4; }
 50% { width: 160px;
	 height: 160px;
	 opacity: 0.5; }
 100% { width: 50px;
 height: 50px;
 opacity: 0.4; }
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
 0% { width: 50px;
	height: 50px;
	opacity: 0.2; }
 50% { width: 200px;
	height: 200px;
	opacity: 0.3; }
 100% { width: 50px;
 height: 50px;
 opacity: 0.2; }
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
	font-size: 10px;
	font-weight: 400;
`;

const StyledSpanOut = styled.span`
	position: absolute;
	z-index: 5;
	animation-name: ${textAnimationOut};
	animation-duration: 10s;
	animation-iteration-count: infinite;
	color: #fff;
	font-size: 10px;
	font-weight: 400;
`;
