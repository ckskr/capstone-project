import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

import StyledButton from '../Button/StyledButton';
import Headline2 from '../Headline/Headline2';

console.clear();

export default function FormExport() {
	const [entries, setEntries] = useState([]);

	function addEntry(firstEntry, secondEntry, thirdEntry) {
		setEntries([
			...entries,
			{
				firstEntry,
				secondEntry,
				thirdEntry,
				id: nanoid(),
			},
		]);
	}
	return (
		<>
			<Form onAddEntry={addEntry} />
		</>
	);
}

function Form({onAddEntry}) {
	function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const {firstEntry, secondEntry, thirdEntry} = Object.fromEntries(formData);
		onAddEntry(firstEntry, secondEntry, thirdEntry);
		event.target.reset();
	}

	return (
		<>
			<Headline2 />
			<form onSubmit={handleSubmit} autoComplete="off">
				<StyledLabel htmlFor="firstEntry">firstEntry </StyledLabel>
				<StyledInput
					type="text"
					id="firstEntry"
					name="firstEntry"
					aria-label="Form for GratitudeDiary"
					placeholder="Name a thing you are grateful for today"
					required
					minLength="3"
					maxLength="200"
				/>
				<StyledLabel htmlFor="secondEntry">secondEntry </StyledLabel>
				<StyledInput
					type="text"
					id="secondEntry"
					name="secondEntry"
					aria-label="Form for GratitudeDiary"
					placeholder="Surely there was another great thing happening today"
					required
					minLength="3"
					maxLength="200"
				/>
				<StyledLabel htmlFor="thirdEntry">thirdEntry </StyledLabel>
				<StyledInput
					type="text"
					id="thirdEntry"
					name="thirdEntry"
					aria-label="Form for GratitudeDiary"
					placeholder="Think harder about a last thing that you are grateful for"
					required
					minLength="3"
					maxLength="200"
				/>

				<StyledButton type="submit">Add to diary</StyledButton>
			</form>
		</>
	);
}

const StyledInput = styled.textarea`
	display: flex;
	flex-wrap: wrap;
	width: 350px;
	height: 100px;
	margin: 30px 0;
	padding: 10px;
	border: 1px solid var(--rose);
	border-radius: 5px;
	color: var(--turq);
`;

const StyledLabel = styled.label`
	display: none;
`;
