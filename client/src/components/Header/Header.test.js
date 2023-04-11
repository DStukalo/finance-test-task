import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

describe('Header component', () => {
	it('Header render', () => {
		render(<Header />, { wrapper: BrowserRouter });

		expect(screen.getByRole('navigation')).toBeInTheDocument();
		expect(screen.getByText('Main')).toHaveClass('active');
	});

	it('Header render and click to link', async () => {
		render(<Header />, { wrapper: BrowserRouter });

		expect(screen.getByText('Main')).toHaveClass('active');
		await userEvent.click(screen.getByText('Charts'));
		expect(screen.getByText('Main')).toHaveClass('navigation__item');
		expect(screen.queryByText('Charts')).toHaveClass('active');
	});

	it('Heder snapshot', () => {
		const heder = render(<Header />, { wrapper: BrowserRouter });
		expect(heder).toMatchSnapshot();
	});
});
