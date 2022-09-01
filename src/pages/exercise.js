import styled from 'styled-components';

import BreatheAnimation from '../components/breathAnimation';
import Navigation from '../components/Navigation/Navigation';
import {pxToRem} from '../utils/unit';

export default function Card() {
	return (
		<>
			<StyledH2>Are you stressed? Take a moment and focus on yourself </StyledH2>

			<BreatheAnimation />
			<StyledH4>
				Take a deep breath in and a long exhale out – feels good, doesnt it?{' '}
			</StyledH4>

			<Navigation />
		</>
	);
}

const StyledH2 = styled.h2`
	padding: 0;
	color: var(--salmon);
	font-size: ${pxToRem(25)};
`;

const StyledH4 = styled.h4`
	display: flex;
	margin-left: 15px;
	color: var(--turq_light);
`;
