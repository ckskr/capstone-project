import styled from 'styled-components';

import BreatheAnimation from '../components/breathAnimation';
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
					<li>Exhale to a count of five. Hold your lungs empty for a five-count.</li>
					<li>Inhale to a count of five.</li>
					<li>Hold the air in your lungs for a count of five.</li>
					<li>Exhale and begin the pattern anew.</li>
				</StyledOl>
				<BreatheAnimation />
				<StyledH3>How do you feel now?</StyledH3>
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
	font-weight: 400;
`;

const StyledH3 = styled.h3`
	display: flex;
	justify-content: center;
	margin: 0;
	color: var(--turq_light);
	font-size: 15px;
	font-weight: 400;
`;
