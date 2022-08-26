import {nanoid} from 'nanoid';
import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import useStore from '../../Hooks/useStore';
import StyledButton from '../Button/StyledButton';
import Headline2 from '../Headline/Headline2';

export default function Form() {
	const addEntry = useStore(state => state.addEntry);
	const router = useRouter();

	function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const {firstEntry, secondEntry, thirdEntry} = Object.fromEntries(formData);

		event.target.reset();
		const entry = {id: nanoid(), first: firstEntry, second: secondEntry, third: thirdEntry};
		addEntry(entry);

		router.push('./diary');
	}
	const DynamicWrapper = dynamic(() => import('../styledWrapper'), {
		ssr: false,
	});
	return (
		<DynamicWrapper>
			<Headline2 />
			<form onSubmit={handleSubmit} autoComplete="off">
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

				<StyledButton variant="default" type="submit">
					Add to diary
				</StyledButton>
			</form>
		</DynamicWrapper>
	);
}

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
