import styled, {css} from 'styled-components';

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	width: 130px;
	height: 35px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	${({variant = 'default'}) =>
		variant === 'default' &&
		css`
			color: var(--turq);
			background-color: var(--rose);

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
			box-shadow: var(--turq_light) 0px 1px 4px;
			width: 100px;
			height: 35px;
			order: -1;
			position: absolute;
			bottom: 5px;
			right: 5px;

			&:hover {
				background: var(--turq_light);
				color: var(--neutral);
			}
		`}
`;

export default StyledButton;
