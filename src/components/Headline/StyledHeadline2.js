import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledH2 = styled.h1`
	color: #e29578;
	font-size: ${pxToRem(30)};
`;

const StyledH3 = styled.h3`
	color: #e29578;
	font-size: ${pxToRem(15)};
`;

export default function StyledHeadline2() {
	return (
		<>
			<StyledH2>What are you grateful for today?</StyledH2>
			<StyledH3>Name three things</StyledH3>
		</>
	);
}
