import Link from 'next/link';
import {useRouter} from 'next/router';
import styled from 'styled-components';

export default function Footer() {
	const router = useRouter();
	return (
		<StyledFooter>
			<Link href="./">
				<StyledLink active={router.pathname === '/'}>Daily entry</StyledLink>
			</Link>
			<Link href="./diary">
				<StyledLink active={router.pathname === '/diary'}>My Diary</StyledLink>
			</Link>
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
	display: flex;
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	justify-content: space-around;
	padding: 10px;
	background-color: var(--rose);
`;

const StyledLink = styled.a`
	color: var(--rose);
	color: ${({active = true}) => (active ? 'var(--turq)' : 'var(--salmon)')};
	font-weight: ${({active = true}) => (active ? '1000' : '500')};

	&:hover {
		font-weight: 1000;
	}
`;
