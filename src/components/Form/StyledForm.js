import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

import useStore from '../../hooks/useStore';
import StyledButton from '../Button/StyledButton';
import StyledDiaryHeadline from '../Headline/StyledDiaryHeadline';
import StyledHeadline2 from '../Headline/StyledHeadline2';

const StyledTextArea = styled.input`
	display: flex;
	width: 400px;
	height: 100px;
	margin: 30px 0;
	padding: 10px;
`;

const StyledLabel = styled.label`
	display: none;
`;

export default function StyledForm() {
	const [inputValue, setInputValue] = useState('');

	const entries = useStore(state => state.entries);
	const addEntry = useStore(state => state.addEntry);

	return (
		<>
			<StyledHeadline2 />
			<form
				onSubmit={event => {
					event.preventDefault();
					addEntry(inputValue);
					setInputValue('');
				}}
			>
				<StyledLabel htmlFor="GratitudeDiary">Form for GratitudeJournal </StyledLabel>
				<StyledTextArea
					id={nanoid}
					placeholder="Name a thing you are grateful for today"
					type="text"
					required
					minLength="3"
					value={inputValue}
					onChange={event => {
						setInputValue(event.target.value);
					}}
				/>
				<StyledTextArea
					id={nanoid}
					placeholder="Surely there is another thing you are grateful for"
					type="text"
					required
					minLength="3"
					value={inputValue}
					onChange={event => {
						setInputValue(event.target.value);
					}}
				/>
				<StyledTextArea
					id={nanoid}
					placeholder="Think back to a moment that made you happy today"
					type="text"
					required
					minLength="3"
					value={inputValue}
					onChange={event => {
						setInputValue(event.target.value);
					}}
				/>
				<StyledButton type="submit">Add to my diary</StyledButton>
			</form>
			<StyledDiaryHeadline />
			<ul>
				{entries.map(entry => {
					return <li key={entry.id}>{entry.name}</li>;
				})}
			</ul>
		</>
	);
}
