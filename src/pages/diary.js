import dayjs from 'dayjs';
import styled from 'styled-components';

import Footer from '../components/Footer/Footer';
import DiaryHeadline from '../components/Headline/DiaryHeadline';

function Date({datum}) {
	return <StyledDate>{dayjs(datum).format('DD.MM.YYYY h:mm A')}</StyledDate>;
}

export default function Diary({entries}) {
	return (
		<>
			<DiaryHeadline />
			<StyledWrapper>
				{entries &&
					entries.map(entry => {
						return (
							<StyledCard key={entry.id}>
								<Date />
								<StyledH4>You were grateful for:</StyledH4>

								<ul>
									<StyledLi>{entry.firstEntry}</StyledLi>
									<StyledLi>{entry.secondEntry}</StyledLi>
									<StyledLi>{entry.thirdEntry}</StyledLi>
								</ul>
							</StyledCard>
						);
					})}
			</StyledWrapper>
			<Footer />
		</>
	);
}

/* --------------------Styling --------------------------------*/

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

const StyledCard = styled.section`
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
