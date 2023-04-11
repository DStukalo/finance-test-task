import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './Footer';

describe('Footer component', () => {
	it('Footer render', () => {
		render(<Footer />, { wrapper: BrowserRouter });

		expect(screen.getByText('Github')).toHaveClass('link');
	});

	it('Footer snapshot', () => {
		const footer = render(<Footer />, { wrapper: BrowserRouter });
		expect(footer).toMatchSnapshot();
	});
});
