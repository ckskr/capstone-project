import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

const StyledH2 = styled.h2`
	color: var(--turq);
	font-size: ${pxToRem(30)};
`;

const StyledP = styled.p`
	color: var(--turq);
	font-size: ${pxToRem(20)};
`;

export default function DiaryHeadline() {
	return (
		<>
			<StyledP>Your diary</StyledP>
			<StyledH2>Look at the great things that already happened in your life</StyledH2>
		</>
	);
}
