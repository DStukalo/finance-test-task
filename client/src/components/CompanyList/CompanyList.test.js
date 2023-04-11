import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CompanyList } from './CompanyList';
import useTrickersFacade from '../../hooks/useStoreFacade';

jest.mock('../../hooks/useStoreFacade', () => jest.fn());

describe('CompanyList component', () => {
	it('CompanyList render with falsy values of store', () => {
		useTrickersFacade.mockImplementationOnce(() => ({
			loaded: false,
			AAPL: false,
			GOOGL: false,
			MSFT: false,
			AMZN: false,
			FB: false,
			TSLA: false,
		}));

		render(<CompanyList />, { wrapper: BrowserRouter });

		expect(screen.getByText('Our Company')).toHaveClass('companies__title');
		expect(screen.getByText('loading...')).toHaveClass('loading');
	});

	it('CompanyList render with correct values of store', () => {
		useTrickersFacade.mockImplementationOnce(() => ({
			loaded: true,
			AAPL: {
				change: '171.57',
				change_percent:	'0.35',
				dividend:	'0.10',
				exchange:	'NASDAQ',
				last_trade_time:	'2023-04-11T10:49:05.000Z',
				price:	'137.33',
				ticker:	'AAPL',
				yield:	'0.76',
			},
			GOOGL: {
				change:	'175.21',
				change_percent:	'0.81',
				dividend:	'0.70',
				exchange:	'NASDAQ',
				last_trade_time:	'2023-04-11T10:49:05.000Z',
				price:	'251.27',
				ticker:	'GOOGL',
				yield:	'0.67',
			},
			MSFT: {
				change:	'189.53',
				change_percent:	'0.46',
				dividend:	'0.34',
				exchange:	'NASDAQ',
				last_trade_time:	'2023-04-11T10:49:05.000Z',
				price:	'141.77',
				ticker:	'MSFT',
				yield:	'1.33',
			},
			AMZN: {
				change:	'46.43',
				change_percent:	'0.46',
				dividend:	'0.68',
				exchange:	'NASDAQ',
				last_trade_time:	'2023-04-11T10:49:05.000Z',
				price:	'205.48',
				ticker:	'AMZN',
				yield:	'0.01',
			},
			FB: {
				change:	'171.42',
				change_percent:	'0.09',
				dividend:	'0.95',
				exchange:	'NASDAQ',
				last_trade_time:	'2023-04-11T10:49:05.000Z',
				price:	'241.02',
				ticker:	'FB',
				yield:	'1.49',
			},
			TSLA: {
				change:	'157.71',
				change_percent:	'0.67',
				dividend:	'0.98',
				exchange:	'NASDAQ',
				last_trade_time:	'2023-04-11T10:49:05.000Z',
				price:	'296.22',
				ticker:	'TSLA',
				yield:	'1.59',
			},
		}));

		render(<CompanyList />, { wrapper: BrowserRouter });

		expect(screen.getByText('Our Company')).toHaveClass('companies__title');
		expect(screen.getByText('Apple')).toHaveClass('company__name');
		expect(screen.getByText('Alphabet')).toHaveClass('company__name');
		expect(screen.getByText('Microsoft')).toHaveClass('company__name');
		expect(screen.getByText('Amazon')).toHaveClass('company__name');
		expect(screen.getByText('Facebook')).toHaveClass('company__name');
		expect(screen.getByText('Tesla')).toHaveClass('company__name');
	});

	it('CompanyList snapshot with falsy values of store', () => {
		useTrickersFacade.mockImplementationOnce(() => ({
			loaded: false,
			AAPL: false,
			GOOGL: false,
			MSFT: false,
			AMZN: false,
			FB: false,
			TSLA: false,
		}));

		const companyList = render(<CompanyList />, { wrapper: BrowserRouter });

		expect(companyList).toMatchSnapshot();
	});

	it('CompanyList snapshot with correct values of store', () => {
		useTrickersFacade.mockImplementationOnce(() => ({
			loaded: true,
			AAPL: {
				change: '171.57',
				change_percent:	'0.35',
				dividend:	'0.10',
				exchange:	'NASDAQ',
				last_trade_time:	'2023-04-11T10:49:05.000Z',
				price:	'137.33',
				ticker:	'AAPL',
				yield:	'0.76',
			},
			GOOGL: {
				change:	'175.21',
				change_percent:	'0.81',
				dividend:	'0.70',
				exchange:	'NASDAQ',
				last_trade_time:	'2023-04-11T10:49:05.000Z',
				price:	'251.27',
				ticker:	'GOOGL',
				yield:	'0.67',
			},
			MSFT: {
				change:	'189.53',
				change_percent:	'0.46',
				dividend:	'0.34',
				exchange:	'NASDAQ',
				last_trade_time:	'2023-04-11T10:49:05.000Z',
				price:	'141.77',
				ticker:	'MSFT',
				yield:	'1.33',
			},
			AMZN: {
				change:	'46.43',
				change_percent:	'0.46',
				dividend:	'0.68',
				exchange:	'NASDAQ',
				last_trade_time:	'2023-04-11T10:49:05.000Z',
				price:	'205.48',
				ticker:	'AMZN',
				yield:	'0.01',
			},
			FB: {
				change:	'171.42',
				change_percent:	'0.09',
				dividend:	'0.95',
				exchange:	'NASDAQ',
				last_trade_time:	'2023-04-11T10:49:05.000Z',
				price:	'241.02',
				ticker:	'FB',
				yield:	'1.49',
			},
			TSLA: {
				change:	'157.71',
				change_percent:	'0.67',
				dividend:	'0.98',
				exchange:	'NASDAQ',
				last_trade_time:	'2023-04-11T10:49:05.000Z',
				price:	'296.22',
				ticker:	'TSLA',
				yield:	'1.59',
			},
		}));

		const companyList = render(<CompanyList />, { wrapper: BrowserRouter });

		expect(companyList).toMatchSnapshot();
	});
});
