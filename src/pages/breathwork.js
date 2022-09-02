import styled from 'styled-components';

import BreatheAnimation from '../components/breathAnimation';
import Navigation from '../components/Navigation/Navigation';

export default function BreathingExercise() {
	return (
		<>
			<div>
				<StyledH1>Are you stressed?</StyledH1>
				<StyledH2>Take a moment and focus on yourself </StyledH2>
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
	margin: 0;
	color: var(--salmon);
	font-size: 25px;
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
