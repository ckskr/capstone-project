import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import DiaryHeadline from '../components/Headline/DiaryHeadline';
import Navigation from '../components/Navigation/Navigation';
import useStore from '../Hooks/useStore';

function Date({datum}) {
	return <StyledDate>{dayjs(datum).format('DD.MM.YYYY h:mm A')}</StyledDate>;
}

export default function Diary() {
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
								<StyledH4>You were grateful for:</StyledH4>

								<ul>
									<StyledLi>{entry.first}</StyledLi>
									<StyledLi>{entry.second}</StyledLi>
									<StyledLi>{entry.third}</StyledLi>
								</ul>
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
	flex-direction: column-reverse;
	width: 93vw;
	border: 1px solid var(--turq_light);
	border-radius: 5px;
`;

const StyledH4 = styled.h4`
	display: flex;
	order: 1;
	margin-left: 15px;
	color: var(--turq_light);
`;

const StyledDate = styled.div`
	order: 2;
	margin-left: 15px;
	color: var(--turq_light);
`;
