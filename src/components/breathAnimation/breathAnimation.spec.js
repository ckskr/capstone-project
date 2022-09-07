import {render, screen} from '@testing-library/react';

import BreatheAnimation from './BreatheAnimation';

describe('BreatheAnimation', () => {
	it('renders the BreatheAnimation component', () => {
		render(<BreatheAnimation />);

		const animation = screen.getByTestId('animation');

		expect(animation).toBeInTheDocument();
	});
});
