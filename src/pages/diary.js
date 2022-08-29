import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import StyledButton from '../components/Button/StyledButton';
import DiaryHeadline from '../components/Headline/DiaryHeadline';
import Navigation from '../components/Navigation/Navigation';
import useStore from '../Hooks/useStore';
function Date({datum}) {
	return <StyledDate>{dayjs(datum).format('DD.MM.YYYY h:mm A')}</StyledDate>;
}
export default function Diary() {
	const deleteEntry = useStore(state => state.deleteEntry);
	const DynamicWrapper = dynamic(() => import('../components/styledWrapper'), {
		ssr: false,
	});
	const entries = useStore(state => state.entries);
	return (
		<DynamicWrapper>
			<DiaryHeadline />
			<StyledDiv>
				{entries &&
					entries.map(entry => {
						return (
							<StyledCard key={entry.id}>
								<Date />
								<StyledFeeling>That is how you felt:</StyledFeeling>
								<ul>
									<StyledLi>{entry.radio1}</StyledLi>
								</ul>
								<StyledH4>You were grateful for:</StyledH4>
								<ul>
									<StyledLi>{entry.first}</StyledLi>
									<StyledLi>{entry.second}</StyledLi>
									<StyledLi>{entry.third}</StyledLi>
								</ul>
								<StyledButton
									variant="delete"
									type="button"
									onClick={() => {
										deleteEntry(entry.id);
									}}
								>
									Delete entry
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
	flex-direction: column;
	padding: 10px;
	gap: 10px;
`;
const StyledLi = styled.li`
	display: flex;
	flex-direction: column;
	color: var(--turq_light);
`;
const StyledCard = styled.section`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 93vw;
	border: 1px solid var(--turq_light);
	border-radius: 5px;
`;
const StyledH4 = styled.h4`
	display: flex;
	margin-left: 15px;
	color: var(--turq_light);
`;
const StyledFeeling = styled.h4`
	display: flex;
	margin-left: 15px;
	color: var(--turq_light);
`;
const StyledDate = styled.div`
	margin-left: 15px;
	color: var(--turq_light);
`;
