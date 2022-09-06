import styled from 'styled-components';

const StyledH2 = styled.h2`
	margin-right: 15px;
	color: var(--turq);
	font-size: 18px;
	font-weight: 500;
	text-align: center;
`;

export default function DiaryHeadline() {
	return (
		<>
			<StyledH2>Look at the great things that already happened in your life</StyledH2>
		</>
	);
}
