import dynamic from 'next/dynamic';
import styled from 'styled-components';

import StyledButton from '../components/Button/StyledButton';
import DiaryHeadline from '../components/Headline/DiaryHeadline';
import Navigation from '../components/Navigation/Navigation';
import SVG from '../components/svg';
import useStore from '../Hooks/useStore';

export default function Diary() {
	const deleteEntry = useStore(state => state.deleteEntry);
	const DynamicWrapper = dynamic(() => import('../components/styledWrapper'), {
		ssr: false,
	});

	const entries = useStore(state => state.entries);

	return (
		<DynamicWrapper>
			<StyledH1>
				Your diary <SVG variant="heart" size="10px" />
			</StyledH1>
			<DiaryHeadline />

			<StyledDiv>
				{entries &&
					entries.map(entry => {
						return (
							<StyledCard key={entry.id}>
								<StyledDate>{entry.date}</StyledDate>
								<StyledH4>That is how you felt:</StyledH4>
								<ul>
									<StyledLi>{entry.mood}</StyledLi>
								</ul>
								<StyledH4>You were grateful for:</StyledH4>
								<ul>
									<StyledLi>{entry.first}</StyledLi>
									<StyledLi>{entry.second}</StyledLi>
									<StyledLi>{entry.third}</StyledLi>
								</ul>
								{entry.special ? <StyledP>{entry.special}</StyledP> : ''}

								<StyledButton
									variant="delete"
									type="button"
									onClick={() => {
										deleteEntry(entry.id);
									}}
								>
									Delete
								</StyledButton>
							</StyledCard>
						);
					})}
			</StyledDiv>
			<Navigation />
		</DynamicWrapper>
	);
}
/* --------------------Styling --------------------------------*/
const StyledDiv = styled.div`
	display: flex;
	flex-direction: column-reverse;
	padding-bottom: 100px;
`;

const StyledLi = styled.li`
	list-style-type: circle;
	color: var(--turq);
	font-family: 'Oooh Baby', sans-serif;
	font-size: 22px;
`;
const StyledCard = styled.section`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 95vw;
	margin-bottom: 15px;
	padding: 15px;
	border: 1px solid var(--turq_light);
	border-radius: 5px;
`;
const StyledH4 = styled.h4`
	display: flex;
	margin: 0;
	color: var(--turq_light);
	font-weight: 500;
`;

const StyledP = styled.p`
	margin: 0;
	color: var(--turq);

	::before {
		content: 'Special things happening today: ';
		color: var(--turq_light);
		font-weight: 500;
	}
`;
const StyledDate = styled.div`
	position: absolute;
	top: 5px;
	right: 15px;
	color: var(--turq_light);
	font-size: 12px;
`;
const StyledH1 = styled.h1`
	display: flex;
	justify-content: center;
	color: var(--turq);
	font-size: 15px;
	font-weight: 200;
`;
