import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import SVG from '../svg';

export default function Navigation() {
	const router = useRouter();
	return (
		<StyledNavigation>
			<Link href="./entry">
				<StyledLink active={router.pathname === '/entry'}>
					<SVG variant="pen" size="24px" />
					Daily entry
				</StyledLink>
			</Link>
			<Link href="./diary">
				<StyledLink active={router.pathname === '/diary'}>
					<SVG variant="diary" size="24px" />
					My Diary
				</StyledLink>
			</Link>
			<Link href="./breathwork">
				<StyledLink active={router.pathname === '/breathwork'}>
					<SVG variant="lotus" size="24px" />
					Breath deeply
				</StyledLink>
			</Link>
		</StyledNavigation>
	);
}

const StyledNavigation = styled.nav`
	display: flex;
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	justify-content: space-around;
	height: 60px;
	background-color: var(--rose);
`;

const StyledLink = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 5px;
	color: ${({active}) => (active ? 'var(--turq)' : 'var(--salmon)')};
	font-size: 10px;
`;
