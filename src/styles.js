import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}

	body {
		margin: 0;
		font-size: 1rem;

	}

:root {
--turq: #006D77;
--turq_light: #83C5BE;
--neutral: #edf6f9;
--rose: #ffddd2;
--salmon: #e29578;
}


`;
