import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 10px;
	border: none;
	border-radius: 5px;
	background-color: #ffddd2;
	color: #006d77;

	&:hover {
		background: #d8b;
	}

	&:active {
		background: #bad;
	}
`;

export default StyledButton;
