import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledH2 = styled.h2`
	color: #006d77;
	font-size: ${pxToRem(30)};
`;

const StyledP = styled.p`
	color: #006d77;
	font-size: ${pxToRem(15)};
`;

export default function StyledDiaryHeadline() {
	return (
		<>
			<StyledP>Your diary</StyledP>
			<StyledH2>Look at the great things that already happened in your life</StyledH2>
		</>
	);
}
