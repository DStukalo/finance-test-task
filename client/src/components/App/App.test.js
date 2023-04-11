import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider,	createMemoryRouter } from 'react-router-dom';
import { routesConfig } from './App';

test('full app rendering/navigating', async () => {
	const router = createMemoryRouter(routesConfig, {
		initialEntries: ['/'],
	});
	render(<RouterProvider router={router} />);

	const user = userEvent.setup();
	expect(screen.getByRole('heading', { name: 'Our Company' })).toBeInTheDocument();

	await user.click(screen.getByText(/Charts/i));
	expect(screen.getByRole('heading', { name: 'Choose which graph you want to see' })).toBeInTheDocument();
});

test('click some tricker to go to /chart/:tricker', async () => {
	const router = createMemoryRouter(routesConfig, {
		initialEntries: ['/chart'],
	});

	render(<RouterProvider router={router} />);

	const user = userEvent.setup();

	await user.click(screen.getByText(/Apple/i));
	expect(screen.getByRole('heading', { name: 'You see a graph of changes in the value of the Apple' })).toBeInTheDocument();

	await user.click(screen.getByText(/Tesla/i));
	expect(screen.getByRole('heading', { name: 'You see a graph of changes in the value of the Tesla' })).toBeInTheDocument();
});
