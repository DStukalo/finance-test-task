import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RunningLine } from './RunningLine';
import useTrickersFacade from '../../hooks/useStoreFacade';
import useRunningLineFacade from '../../hooks/useRunningStoreFacade';
import useRunningLineStatusFacade from '../../hooks/useRunningLineStatusFacade';

jest.mock('../../hooks/useStoreFacade', () => jest.fn());
jest.mock('../../hooks/useRunningStoreFacade', () => jest.fn());
jest.mock('../../hooks/useRunningLineStatusFacade', () => jest.fn());

describe('RunningLine component', () => {
	it('RunningLine render ', () => {
		useTrickersFacade.mockImplementationOnce(() => ({
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
		}));
		useRunningLineFacade.mockImplementationOnce(() => ({
			Apple: true,
		}));
		useRunningLineStatusFacade.mockImplementationOnce(() => ({
			Apple: 'down',
		}));

		const runline = render(<RunningLine />, { wrapper: BrowserRouter });
		expect(runline).toBeTruthy();
	});

	it('RunningLine snapshot', () => {
		useTrickersFacade.mockImplementationOnce(() => ({
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
		}));
		useRunningLineFacade.mockImplementationOnce(() => ({
			Apple: true,
		}));
		useRunningLineStatusFacade.mockImplementationOnce(() => ({
			Apple: 'down',
		}));

		const runline = render(<RunningLine />, { wrapper: BrowserRouter });
		expect(runline).toMatchSnapshot();
	});
});
