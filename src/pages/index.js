import dynamic from 'next/dynamic';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import SVG from '../components/svg';

export default function StartPage() {
	const DynamicWrapper = dynamic(() => import('../components/styledWrapper'), {
		ssr: false,
	});
	const router = useRouter();
	return (
		<DynamicWrapper>
			<StyledH1>Welcome to Daimoo</StyledH1>
			<StyledH2>your daily mood check</StyledH2>
			<StyledBox>
				<Link href="./entry">
					<StyledLink active={router.pathname === '/entry'}>
						<SVG variant="pen" size="40px" color="black" margin="15px" />
						<StyledH3>How did you feel today?</StyledH3>
					</StyledLink>
				</Link>
				<Link href="./diary">
					<StyledLink active={router.pathname === '/diary'}>
						<SVG variant="diary" size="40px" color="black" margin="15px" />
						<StyledH3>Your mood in a retrospective</StyledH3>
					</StyledLink>
				</Link>
				<Link href="./breathwork">
					<StyledLink active={router.pathname === '/breathwork'}>
						<SVG variant="lotus" size="40px" color="black" margin="15px" />
						<StyledH3>Make some breathing exercise</StyledH3>
					</StyledLink>
				</Link>
			</StyledBox>
			<StyledH4>
				Made with <SVG variant="heart" size="15px" color="var(--salmon)" /> in Munich
			</StyledH4>
		</DynamicWrapper>
	);
}

const StyledH1 = styled.h1`
	display: flex;
	justify-content: center;
	margin-bottom: 0;
	color: black;
	font-size: 30px;
	font-weight: 500;
`;

const StyledH2 = styled.h2`
	display: flex;
	justify-content: center;
	margin-top: -10px;
	color: black;
	font-size: 20px;
	font-weight: 500;
`;

const StyledLink = styled.a`
	display: flex;
	align-items: center;
	width: 300px;
	height: 70px;
	margin: 10px;
	border-radius: 5px;
	background-color: var(--rose);
	box-shadow: rgba(17, 17, 26, 0.05) 0 1px 0, rgba(17, 17, 26, 0.1) 0 0 8px;
	color: var(--salmon);

	&:hover {
		font-weight: 1000;
	}
`;

const StyledBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	flex-wrap: wrap;
	align-content: center;
	padding-top: 50px;
`;

const StyledH3 = styled.h3`
	width: 200px;
	margin-left: 40px;
	font-weight: 300;
`;

const StyledH4 = styled.h4`
	display: flex;
	justify-content: center;
	margin-top: 150px;
	font-size: 12px;
	font-weight: 200;
`;
