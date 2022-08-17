import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

import StyledButton from '../Button/StyledButton';
import StyledDiaryHeadline from '../Headline/StyledDiaryHeadline';
import StyledHeadline2 from '../Headline/StyledHeadline2';

const StyledInput = styled.input`
	display: flex;
	flex-wrap: wrap;
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

/*const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	width: 400px;
	margin-bottom: 20px;
	border-radius: 5px;
	gap: 10px;
`;*/

const StyledLi = styled.li`
	display: flex;
	flex-direction: column;
	list-style-type: circle;
	color: var(--turq_light);
`;

const StyledCard = styled.a`
	display: flex;
	flex-direction: column-reverse;
	width: 400px;
	border: 1px solid var(--turq_light);
	border-radius: 5px;
`;

const StyledH4 = styled.h4`
	display: flex;
	order: 1;
	margin-left: 15px;
	color: var(--turq_light);
`;

export default function Form() {
	const [entries, setEntries] = useState([]);

	function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		setEntries([...entries, {...data, id: nanoid()}]);
		event.target.reset();
	}
	return (
		<>
			<StyledHeadline2 />
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
				/>

				<StyledButton type="submit">Add to diary</StyledButton>
			</form>
			<StyledDiaryHeadline />
			<ul>
				{entries.map(entry => {
					return (
						<StyledCard key={nanoid}>
							<StyledH4>You were grateful for:</StyledH4>
							<ul>
								<StyledLi key={entry.id}>{entry.firstEntry}</StyledLi>
								<StyledLi key={entry.id}>{entry.secondEntry}</StyledLi>
								<StyledLi key={entry.id}>{entry.thirdEntry}</StyledLi>
							</ul>
						</StyledCard>
					);
				})}
			</ul>
		</>
	);
}
