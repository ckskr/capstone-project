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
	border: 1px solid var(--rose);
	border-radius: 5px;
	color: var(--turq);
`;

const StyledLabel = styled.label`
	display: none;
`;

const StyledEntry = styled.a`
	display: flex;
	width: 400px;
	height: 100px;
	border: 1px solid black;
	border-radius: 5px;
`;

const StyledLi = styled.ul`
	list-style-type: none;
`;

const Wrapper = styled.div`
	border: 1px solid red;
`;

export default function StyledForm() {
	const [inputValue, setInputValue] = useState('');
	const [inputValue1, setInputValue1] = useState('');
	const [inputValue2, setInputValue2] = useState('');

	const entries = useStore(state => state.entries);
	const addEntry = useStore(state => state.addEntry);
	const addEntry1 = useStore(state => state.addEntry);
	const addEntry2 = useStore(state => state.addEntry);

	return (
		<>
			<StyledHeadline2 />
			<form
				onSubmit={event => {
					event.preventDefault();
					addEntry(inputValue);
					addEntry1(inputValue1);
					addEntry2(inputValue2);
					setInputValue('');
					setInputValue1('');
					setInputValue2('');
				}}
				autoComplete="off"
			>
				<StyledLabel htmlFor="GratitudeDiary">Form for GratitudeDiary </StyledLabel>
				<StyledTextArea
					aria-label="Form for GratitudeDiary"
					id="GratitudeJournal1"
					name="GratitudeDiary1"
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
					aria-label="Form for GratitudeDiary"
					id="GratitudeJournal2"
					name="GratitudeDiary2"
					placeholder="Surely there was another great thing happening today"
					type="text"
					required
					minLength="3"
					value={inputValue1}
					onChange={event => {
						setInputValue1(event.target.value);
					}}
				/>
				<StyledTextArea
					aria-label="Form for GratitudeDiary"
					id="GratitudeJournal3"
					name="GratitudeDiary3"
					placeholder="Think harder about a last thing that you are grateful for"
					type="text"
					required
					minLength="3"
					value={inputValue2}
					onChange={event => {
						setInputValue2(event.target.value);
					}}
				/>
				<StyledButton type="submit">Add to my diary</StyledButton>
			</form>
			<StyledDiaryHeadline />
			<Wrapper>
				{entries.map(() => {
					return (
						<StyledEntry key={nanoid}>
							{entries.map(entry => {
								return (
									<StyledLi key={nanoid}>
										<li key={entry.id}>{entry.name}</li>
									</StyledLi>
								);
							})}
						</StyledEntry>
					);
				})}
			</Wrapper>
		</>
	);
}

/*
<StyledUl>
{entries.map((entry1, entry2, entry) => {
	return (
		<StyledEntry key={nanoid}>
			hallo
			<li key={entry.id} id="GratitudeJournal1">
				{entry1.name}
			</li>
			<li key={entry.id} id="GratitudeJournal2">
				{entry.name}
			</li>
			<li key={entry2.id}>{entry.name}</li>
		</StyledEntry>
	);
})}
</StyledUl>*/
