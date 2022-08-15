import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledH1 = styled.h1`
	color: #006d77;
	font-size: ${pxToRem(20)};
`;

export default function StyledHeadline1() {
	return (
		<>
			<StyledH1>Great to have you here</StyledH1>
		</>
	);
}
