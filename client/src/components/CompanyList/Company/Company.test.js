import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Company } from './Company';

describe('Company component', () => {
	it('Company render with fullname Apple', () => {
		render(<Company fullname="Apple" name="AAPL" price="137.33" percent="0.35" change="171.57" />, { wrapper: BrowserRouter });

		expect(screen.getByText('Apple')).toHaveClass('company__name');

		expect(screen.queryByText('Alphabet')).not.toBeInTheDocument();
		expect(screen.queryByText('Microsoft')).not.toBeInTheDocument();
		expect(screen.queryByText('Amazon')).not.toBeInTheDocument();
		expect(screen.queryByText('Facebook')).not.toBeInTheDocument();
		expect(screen.queryByText('Tesla')).not.toBeInTheDocument();
	});

	it('render 6 Company component', () => {
		render(<Company fullname="Apple" name="AAPL" price="137.33" percent="0.35" change="171.57" />, { wrapper: BrowserRouter });
		render(<Company fullname="Alphabet" name="AAPL" price="137.33" percent="0.35" change="171.57" />, { wrapper: BrowserRouter });
		render(<Company fullname="Microsoft" name="AAPL" price="137.33" percent="0.35" change="171.57" />, { wrapper: BrowserRouter });
		render(<Company fullname="Amazon" name="AAPL" price="137.33" percent="0.35" change="171.57" />, { wrapper: BrowserRouter });
		render(<Company fullname="Facebook" name="AAPL" price="137.33" percent="0.35" change="171.57" />, { wrapper: BrowserRouter });
		render(<Company fullname="Tesla" name="AAPL" price="137.33" percent="0.35" change="171.57" />, { wrapper: BrowserRouter });

		expect(screen.getByText('Apple')).toHaveClass('company__name');
		expect(screen.getByText('Alphabet')).toHaveClass('company__name');
		expect(screen.getByText('Microsoft')).toHaveClass('company__name');
		expect(screen.getByText('Amazon')).toHaveClass('company__name');
		expect(screen.getByText('Facebook')).toHaveClass('company__name');
		expect(screen.getByText('Tesla')).toHaveClass('company__name');
	});

	it('Company snapshot', () => {
		const company = render(<Company fullname="Apple" name="AAPL" price="137.33" percent="0.35" change="171.57" />, { wrapper: BrowserRouter });
		expect(company).toMatchSnapshot();
	});
});
