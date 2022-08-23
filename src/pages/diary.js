import dayjs from 'dayjs';
import styled from 'styled-components';

import DiaryHeadline from '../components/Headline/DiaryHeadline';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column-reverse;
	width: 400px;
	margin-bottom: 20px;
	border-radius: 5px;
	gap: 10px;
`;

const StyledLi = styled.li`
	display: flex;
	flex-direction: column;
	margin: 0 15px 10px 15px;
	color: var(--turq_light);
	gap: 50px;
`;

const StyledCard = styled.p`
	display: flex;
	flex-direction: column-reverse;
	width: 800px;
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

function Date({datum}) {
	return <StyledDate>{dayjs(datum).format('DD.MM.YYYY h:mm A')}</StyledDate>;
}

export default function DiaryEntry({entries}) {
	return (
		<>
			<DiaryHeadline />
			<StyledWrapper>
				{entries.map(entry => {
					return (
						<StyledCard key={entry.id}>
							<Date />
							<StyledH4>You were grateful for:</StyledH4>

							<ul>
								<StyledLi key={entry.id}>{entry.firstEntry}</StyledLi>
								<StyledLi key={entry.id}>{entry.secondEntry}</StyledLi>
								<StyledLi key={entry.id}>{entry.thirdEntry}</StyledLi>
							</ul>
						</StyledCard>
					);
				})}
			</StyledWrapper>
		</>
	);
}
