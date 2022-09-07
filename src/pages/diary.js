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
								<StyledInputWrapper>
									<StyledH4>
										I felt <StyledWord>{entry.mood}</StyledWord> today{' '}
										<StyledImage
											src={`/${entry.mood}.png`}
											alt={entry.mood}
											width={24}
											height={24}
										/>
									</StyledH4>
									<br />
									<StyledH4>I was grateful for:</StyledH4>
									<StyledUl>
										<StyledLi>{entry.first}</StyledLi>
										<StyledLi>{entry.second}</StyledLi>
										<StyledLi>{entry.third}</StyledLi>
									</StyledUl>
									<br />
									{entry.special ? <StyledP>{entry.special}</StyledP> : ''}
								</StyledInputWrapper>
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

const StyledInputWrapper = styled.div`
	padding-top: 40px;
`;

const StyledUl = styled.ul`
	margin: 0;
	padding: 0 0 0 15px;
`;

const StyledWord = styled.div`
	margin: 0 10px 0 10px;
	color: var(--turq);
	font-family: 'Nothing You', sans-serif;
	font-size: 20px;
	text-decoration: none;
`;

const StyledLi = styled.li`
	list-style-type: circle;
	color: var(--turq);
	font-family: 'Nothing You', sans-serif;
	font-size: 18px;
	text-align: left;
`;
const StyledCard = styled.section`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 99%;
	margin-bottom: 30px;
	padding: 20px;
	border-radius: 5px;
	overflow-wrap: break-word;
	background: var(--neutral);
	box-shadow: rgba(17, 17, 26, 0.05) 0 1px 0, rgba(17, 17, 26, 0.1) 0 0 8px;
`;
const StyledH4 = styled.h4`
	display: flex;
	margin: 0;
	padding: 0;
	color: var(--turq_light);
	font-weight: 500;
`;

const StyledImage = styled.img`
	display: flex;
	flex-direction: column;
	margin-left: 15px;
	border-radius: 50%;
	background: ${({checked}) => (checked ? 'var(--turq_light)' : 'transparent')};
	cursor: pointer;
`;

const StyledP = styled.p`
	margin: 0 0 12px 0;
	color: var(--turq);
	font-family: 'Nothing You', sans-serif;
	font-size: 18px;
	white-space: wrap;

	::before {
		content: 'Special things happening today: ';
		color: var(--turq_light);
		font-family: 'Poppins', sans-serif;
		font-size: 1rem;
		font-weight: 500;
	}
`;
const StyledDate = styled.div`
	position: absolute;
	top: 15px;
	right: 15px;
	color: var(--turq);
	font-family: 'Nothing You', sans-serif;
	font-size: 15px;
`;
const StyledH1 = styled.h1`
	display: flex;
	justify-content: center;
	color: var(--turq);
	font-size: 15px;
	font-weight: 200;
`;
