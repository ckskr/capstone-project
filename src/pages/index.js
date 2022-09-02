import dynamic from 'next/dynamic';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';

export default function StartPage() {
	const DynamicWrapper = dynamic(() => import('../components/styledWrapper'), {
		ssr: false,
	});
	const router = useRouter();
	return (
		<DynamicWrapper>
			<StyledH1>
				Welcome to Daimoo
				<div>your daily mood check</div>
				<h2>Great to have you here</h2>
			</StyledH1>
			<StyledBox>
				<Link href="./entry">
					<StyledLink active={router.pathname === '/entry'}>
						How did you feel today?
					</StyledLink>
				</Link>
				<Link href="./diary">
					<StyledLink active={router.pathname === '/diary'}>
						Your mood in a retrospective
					</StyledLink>
				</Link>
				<Link href="./breathwork">
					<StyledLink active={router.pathname === '/breathwork'}>
						Make some breathing exercise
					</StyledLink>
				</Link>
			</StyledBox>
		</DynamicWrapper>
	);
}

const StyledH1 = styled.h1`
	color: var(--turq);
	& div {
		color: var(--turq);
		font-size: 20px;
	}
	& h2 {
		color: var(--turq_light);
		font-size: 20px;
	}
`;

const StyledLink = styled.a`
	display: flex;
	flex-wrap: wrap;
	width: 120px;
	height: 70px;
	margin: 10px;
	border-radius: 5px;
	background-color: var(--neutral);
	box-shadow: rgba(17, 17, 26, 0.05) 0 1px 0, rgba(17, 17, 26, 0.1) 0 0 8px;
	color: var(--salmon);

	&:hover {
		font-weight: 1000;
	}
`;

const StyledBox = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
