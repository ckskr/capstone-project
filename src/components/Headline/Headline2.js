import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledH2 = styled.h2`
	color: var(--salmon);
	font-size: ${pxToRem(30)};
`;

const StyledH3 = styled.h3`
	color: var(--salmon);
	font-size: ${pxToRem(15)};
`;

export default function Headline2() {
	return (
		<>
			<StyledH2>What are you grateful for today?</StyledH2>
			<StyledH3>Name three things</StyledH3>
		</>
	);
}
