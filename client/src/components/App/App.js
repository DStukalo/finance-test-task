import { useEffect } from 'react';
import io from 'socket.io-client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useTrickers } from '../../store/store';
import { useChartStore } from '../../store/chartStore';
import { MainPage } from '../../pages/MainPage/MainPage';
import { ChartPage } from '../../pages/ChartPage/ChartPage';
import { NotFoundPage } from '../../pages/404/NotFoundPage';
import { Layout } from '../Layout/Layout';

export const routesConfig = [
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{ index: true, element: <MainPage /> },
			{ path: '/chart', element: <ChartPage /> },
			{ path: '/chart/:tricker', element: <ChartPage /> },
		],
	},
];

const router = createBrowserRouter(routesConfig);

function App() {
	const store = useTrickers();
	const chartStore = useChartStore();

	useEffect(() => {
		const socket = io('https://finance-back-end.onrender.com/');

		socket.on('connect', () => {
			store.setLoaded();
			socket.on('ticker', (tickers) => {
				if (Array.isArray(tickers)) {
					tickers.forEach((element) => {
						if (typeof element === 'object') {
							switch (element.ticker) {
							case 'AAPL':
								store.setAAPL(element);
								chartStore.setApple(element.price);
								break;
							case 'GOOGL':
								store.setGOOGL(element);
								chartStore.setAlphabet(element.price);
								break;
							case 'MSFT':
								store.setMSFT(element);
								chartStore.setMicrosoft(element.price);
								break;
							case 'AMZN':
								store.setAMZN(element);
								chartStore.setAmazon(element.price);
								break;
							case 'FB':
								store.setFB(element);
								chartStore.setFacebook(element.price);
								break;
							default:
								store.setTSLA(element);
								chartStore.setTesla(element.price);
								break;
							}
						}
					});
				}
			});
		});

		socket.emit('start');

		return () => {
			socket.disconnect();
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<RouterProvider router={router} />
	);
}

export default App;
