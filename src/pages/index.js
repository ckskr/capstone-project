import FormPage from '../components/Form/StyledForm';
import StyledDiaryHeadline from '../components/Headline/StyledDiaryHeadline';
import StyledHeadline1 from '../components/Headline/StyledHeadline1';
import StyledHeadline2 from '../components/Headline/StyledHeadline2';

export default function HomePage() {
	return (
		<>
			<StyledHeadline1></StyledHeadline1>
			<StyledHeadline2></StyledHeadline2>
			<FormPage></FormPage>
			<StyledDiaryHeadline></StyledDiaryHeadline>
		</>
	);
}
