import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';

export default function Navigation() {
	const router = useRouter();
	return (
		<StyledNavigation>
			<Link href="./entry">
				<StyledLink active={router.pathname === '/entry'}>Daily entry</StyledLink>
			</Link>
			<Link href="./diary">
				<StyledLink active={router.pathname === '/diary'}>My Diary</StyledLink>
			</Link>
			<Link href="./breathwork">
				<StyledLink active={router.pathname === '/breathwork'}>Take a breath</StyledLink>
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
	height: 50px;
	padding: 10px;
	background-color: var(--rose);
`;

const StyledLink = styled.a`
	color: ${({active}) => (active ? 'var(--turq)' : 'var(--salmon)')};
	font-weight: ${({active}) => (active ? '1000' : '500')};

	&:hover {
		font-weight: 1000;
	}
`;
