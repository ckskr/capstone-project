import styled from 'styled-components';

import BreatheAnimation from '../components/breathAnimation/breathAnimation';
import Navigation from '../components/Navigation/Navigation';
import SVG from '../components/svg';

export default function BreathingExercise() {
	return (
		<>
			<StyledDiv>
				<StyledH1>
					Take a moment for yourself <SVG variant="heart" size="10px" />
				</StyledH1>

				<StyledOl>
					<li>
						<StyledFirstLine>Breathe in</StyledFirstLine>
						As you do that, imagine that the air is filled with a sense of peace and
						calm. Try to feel it throughout your body
					</li>
					<li>
						<StyledFirstLine>Breathe out</StyledFirstLine>While you are doing it,
						imagine that the air leaves with your stress and tension
					</li>
				</StyledOl>
				<BreatheAnimation />
			</StyledDiv>

			<Navigation />
		</>
	);
}

const StyledDiv = styled.div`
	margin-bottom: 70px;
`;

const StyledH1 = styled.h1`
	display: flex;
	justify-content: center;
	color: var(--turq);
	font-size: 15px;
	font-weight: 200;
`;

const StyledOl = styled.ol`
	margin: 25px 0 0 0;
	color: var(--salmon);
	font-size: 15px;
	font-weight: 300;
`;

const StyledFirstLine = styled.div`
	margin-top: 15px;
	font-size: 18px;
	font-weight: 400;
`;
