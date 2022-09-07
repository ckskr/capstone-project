/**
 * @jest-environment jsdom
 */

import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import BreatheAnimation from '../breathAnimation/breathAnimation';

describe('BreatheAnimation', () => {
	it('renders the BreatheAnimation component', () => {
		render(<BreatheAnimation />);

		const animation = screen.getByTestId('animation');

		expect(animation).toBeInTheDocument();
	});
});
