import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 200;
  src: url('/fonts/poppins-v20-latin-200.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/poppins-v20-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/poppins-v20-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/poppins-v20-latin-200.woff') format('woff'), /* Modern Browsers */
       url('/fonts/poppins-v20-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/poppins-v20-latin-200.svg#Poppins') format('svg'); /* Legacy iOS */
}


@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/poppins-v20-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/poppins-v20-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/poppins-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/poppins-v20-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/poppins-v20-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/poppins-v20-latin-regular.svg#Poppins') format('svg'); /* Legacy iOS */
}


@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/poppins-v20-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/poppins-v20-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/poppins-v20-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/poppins-v20-latin-600.woff') format('woff'), /* Modern Browsers */
       url('/fonts/poppins-v20-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/poppins-v20-latin-600.svg#Poppins') format('svg'); /* Legacy iOS */
}


@font-face {
 font-family: 'Oooh Baby';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/OoohBaby-Regular.ttf'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/OoohBaby-Regular.ttf') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/OoohBaby-Regular.ttf') format('woff2'), /* Super Modern Browsers */
       url('/fonts/OoohBaby-Regular.ttf') format('woff'), /* Modern Browsers */
       url('/fonts/OoohBaby-Regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/OoohBaby-Regular.ttf') format('svg'); /* Legacy iOS */
}


@font-face {
 font-family: 'Nothing You';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/NothingYouCouldDo-Regular'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/NothingYouCouldDo-Regular') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/NothingYouCouldDo-Regular') format('woff2'), /* Super Modern Browsers */
       url('/fonts/NothingYouCouldDo-Regular.ttf') format('woff'), /* Modern Browsers */
       url('/fonts/NothingYouCouldDo-Regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/NothingYouCouldDo-Regular.ttf') format('svg'); /* Legacy iOS */
}


	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;

	}

	body {
		height: 100%;
		margin-bottom: 20px;
		padding:10px;
		font-family: 'Poppins', sans-serif;
		font-size: 1rem;
		font-style: "normal";

	}


:root {
--turq: #006D77;
--turq_light: #83C5BE;
--neutral: #edf6f9;
--rose: #ffddd2;
--salmon: #e29578;
}
`;
