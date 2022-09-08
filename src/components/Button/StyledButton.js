import styled, {css} from 'styled-components';

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	width: 130px;
	height: 35px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	${({variant = 'add'}) =>
		variant === 'add' &&
		css`
			color: var(--neutral);
			background-color: var(--salmon);
			margin-top: 20px;

			&:hover {
				background: var(--salmon);
				color: var(--neutral);
			}
		`}
	${({variant = 'delete'}) =>
		variant === 'delete' &&
		css`
			color: var(--turq);
			background-color: white;
			box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
			width: 50px;
			height: 25px;
			order: -1;
			position: absolute;
			bottom: 10px;
			right: 10px;
			padding: 5px;
			font-size: 12px;

			&:hover {
				background: var(--turq_light);
				color: var(--neutral);
			}
		`}
`;

export default StyledButton;
