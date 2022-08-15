import styled from 'styled-components';

import {pxToRem} from '../../utils/unit';

export default function StyledHeadlineVariants({variant, component, children, ...rest}) {
	if (variant === 'h1') {
		return (
			<StyledH1 as={component} {...rest}>
				{children}
			</StyledH1>
		);
	} else if (variant === 'h2') {
		return (
			<StyledH2 as={component} {...rest}>
				{children}
			</StyledH2>
		);
	} else if (variant === 'h3') {
		return (
			<StyledH3 as={component} {...rest}>
				{children}
			</StyledH3>
		);
	} else {
		return <p>invalid variant</p>;
	}
}

const StyledH1 = styled.h1`
	color: --turq;
	font-size: ${pxToRem(10)};
`;

const StyledH2 = styled.h2`
	color: --salmon;
	font-size: ${pxToRem(14)};
`;

const StyledH3 = styled.h3`
	color: --turq;
	font-size: ${pxToRem(12)};
`;
