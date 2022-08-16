import styled from 'styled-components';

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	width: 130px;
	height: 35px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	background-color: var(--rose);
	color: var(--turq);

	&:hover {
		background: var(--salmon);
		color: var(--neutral);
	}
`;

export default StyledButton;
