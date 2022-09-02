import styled from 'styled-components';

import useStore from '../../Hooks/useStore';
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
	const entries = useStore(state => state.entries);
	const diaryEntries = entries.filter(entry => entry);

	return (
		<>
			<StyledP>Your diary</StyledP>
			<div diaryEntries={diaryEntries}>
				{diaryEntries ? (
					<StyledH2>Look at the great things that already happened in your life</StyledH2>
				) : (
					'Hallo'
				)}
			</div>
		</>
	);
}
