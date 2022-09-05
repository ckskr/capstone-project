import dayjs from 'dayjs';
import {nanoid} from 'nanoid';
import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import {useState} from 'react';
import styled from 'styled-components';

import useStore from '../../Hooks/useStore';
import StyledButton from '../Button/StyledButton';
import SVG from '../svg';
const DynamicWrapper = dynamic(() => import('../styledWrapper'), {
	ssr: false,
});

export default function Form() {
	const addEntry = useStore(state => state.addEntry);
	const [moods, setMoods] = useState({
		happy: false,
		proud: false,
		calm: false,
		unwell: false,
		angry: false,
		sad: false,
	});
	const router = useRouter();
	function handleSubmit(event) {
		event.preventDefault();
		const timestamp = dayjs().valueOf();
		const formData = new FormData(event.target);
		const {firstEntry, secondEntry, thirdEntry, mood, dailySpecial} =
			Object.fromEntries(formData);

		event.target.reset();
		const entry = {
			id: nanoid(),
			date: dayjs(timestamp).format('MMM D, YYYY h:mm A'),
			first: firstEntry,
			second: secondEntry,
			third: thirdEntry,
			mood: mood,
			special: dailySpecial,
		};

		addEntry(entry);

		router.push('./diary');
	}

	return (
		<DynamicWrapper>
			<StyledH1>
				Great to have you here <SVG variant="heart" size="10px" />
			</StyledH1>
			<StyledForm onSubmit={handleSubmit} autoComplete="off">
				<StyledH2>How did you feel today?</StyledH2>

				<StyledFieldset name="date">
					<StyledDiv>
						<StyledRadioLabel>
							<StyledInput
								type="radio"
								value="happy"
								id="mood1"
								name="mood"
								required
								checked={moods.happy}
								onChange={() => {
									setMoods({...moods, happy: !moods.happy});
								}}
							/>
							<StyledImage
								type="radio"
								src="/happy.png"
								alt="happy"
								width={30}
								height={30}
								checked={moods.happy}
							/>
							Happy
						</StyledRadioLabel>
					</StyledDiv>
					<StyledDiv>
						<StyledRadioLabel>
							<StyledInput
								type="radio"
								value="proud"
								id="mood2"
								name="mood"
								required
								checked={moods.proud}
								onChange={() => {
									setMoods({...moods, proud: !moods.proud});
								}}
							/>
							<StyledImage
								src="/proud.png"
								alt="proud"
								width={30}
								height={30}
								checked={moods.proud}
							/>
							Proud
						</StyledRadioLabel>
					</StyledDiv>
					<StyledDiv>
						<StyledRadioLabel>
							<StyledInput
								type="radio"
								value="calm"
								id="mood3"
								name="mood"
								required
								checked={moods.calm}
								onChange={() => {
									setMoods({...moods, calm: !moods.calm});
								}}
							/>
							<StyledImage
								src="/calm.png"
								alt="calm"
								width={30}
								height={30}
								checked={moods.calm}
							/>
							Calm
						</StyledRadioLabel>
					</StyledDiv>
					<StyledDiv>
						<StyledRadioLabel>
							<StyledInput
								type="radio"
								value="unwell"
								id="mood4"
								name="mood"
								required
								checked={moods.unwell}
								onChange={() => {
									setMoods({...moods, unwell: !moods.unwell});
								}}
							/>
							<StyledImage
								src="/unwell.png"
								alt="unwell"
								width={30}
								height={30}
								checked={moods.unwell}
							/>
							Unwell
						</StyledRadioLabel>
					</StyledDiv>
					<StyledDiv>
						<StyledRadioLabel>
							<StyledInput
								type="radio"
								value="sad"
								id="mood5"
								name="mood"
								required
								checked={moods.sad}
								onChange={() => {
									setMoods({...moods, sad: !moods.sad});
								}}
							/>
							<StyledImage
								src="/sad.png"
								alt="sad"
								width={30}
								height={30}
								checked={moods.sad}
							/>
							Sad
						</StyledRadioLabel>
					</StyledDiv>
					<StyledDiv>
						<StyledRadioLabel>
							<StyledInput
								type="radio"
								value="angry"
								id="mood6"
								name="mood"
								required
								checked={moods.angry}
								onChange={() => {
									setMoods({...moods, angry: !moods.angry});
								}}
							/>
							<StyledImage
								src="/angry.png"
								alt="angry"
								width={30}
								height={30}
								checked={moods.angry}
							/>
							Angry
						</StyledRadioLabel>
					</StyledDiv>
				</StyledFieldset>
				<StyledH2>What are you grateful for today?</StyledH2>
				<StyledH3>Name three things</StyledH3>
				<StyledLabel htmlFor="firstEntry">firstEntry </StyledLabel>
				<StyledTextarea
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
				<StyledTextarea
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
				<StyledTextarea
					type="text"
					id="thirdEntry"
					name="thirdEntry"
					aria-label="Form for GratitudeDiary"
					placeholder="Think harder about a last thing that you are grateful for"
					required
					minLength="3"
					maxLength="200"
				/>

				<StyledH2>Add some words about your day</StyledH2>
				<StyledTextarea
					type="text"
					id="dailySpecial"
					name="dailySpecial"
					aria-label="Form for GratitudeDiary"
					placeholder="Did something special happen today? Write it down here :)"
					minLength="3"
					maxLength="200"
				/>
				<StyledButton variant="default" type="submit">
					Add to diary
				</StyledButton>
			</StyledForm>
		</DynamicWrapper>
	);
}

const StyledForm = styled.form``;

const StyledTextarea = styled.textarea`
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
const StyledRadioLabel = styled.label`
	display: flex;
	flex-direction: column;
	width: 100px;
	color: var(--turq);
	font-size: 12px;
	text-align: center;
	cursor: pointer;
`;

const StyledImage = styled.img`
	position: relative;
	margin-left: 40px;
	border-radius: 50%;
	background: ${({checked}) => (checked ? 'var(--rose)' : 'transparent')};
	cursor: pointer;
`;

const StyledDiv = styled.div`
	display: inline-block;
	margin: 5px;
`;

const StyledInput = styled.input`
	display: block;
	position: absolute;
	width: 20px;
	margin: 0 auto;
	opacity: 0;
`;

const StyledH1 = styled.h1`
	display: flex;
	justify-content: center;
	color: var(--turq);
	font-size: 15px;
	font-weight: 200;
`;

const StyledH2 = styled.h2`
	margin-top: 50px;
	color: var(--salmon);
	font-size: 20px;
	font-weight: 600;
`;

const StyledH3 = styled.h3`
	margin-top: -16px;
	color: var(--salmon);
	font-size: 14px;
	font-weight: 500;
`;

const StyledFieldset = styled.fieldset`
	border: none;
`;
