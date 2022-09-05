import styled from 'styled-components';

import BreatheAnimation from '../components/breathAnimation';
import Navigation from '../components/Navigation/Navigation';
import SVG from '../components/svg';

export default function BreathingExercise() {
	return (
		<>
			<div>
				<StyledH1>
					Take a moment for yourself <SVG variant="heart" size="10px" />
				</StyledH1>

				<StyledH2> </StyledH2>
				<BreatheAnimation />
				<StyledH3>
					Take some deep breaths in and some long exhales out – feels good, right?
				</StyledH3>
			</div>

			<Navigation />
		</>
	);
}

const StyledH1 = styled.h1`
	display: flex;
	justify-content: center;
	color: var(--turq);
	font-size: 15px;
	font-weight: 200;
`;

const StyledH2 = styled.h2`
	margin: 0;
	color: var(--salmon);
	font-size: 15px;
`;

const StyledH3 = styled.h3`
	margin: 0;
	color: var(--turq_light);
`;
