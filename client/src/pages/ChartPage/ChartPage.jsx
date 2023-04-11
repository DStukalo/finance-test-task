import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Chart } from '../../components/Chart/Charts';
import { useChartStore } from '../../store/chartStore';
import styles from './СhartPage.module.scss';

export function ChartPage() {
	const chartStore = useChartStore();
	const { tricker } = useParams();

	useEffect(() => {
		if (!tricker) document.title = 'Chart page';
		else document.title = `Chart page | ${tricker}`;
	}, [tricker]);

	function isActive(pathStat) {
		if (tricker === pathStat) return 'active';
		return 'link';
	}

	return (
		<div className={styles.wrapper_chart}>
			<ul className={styles.charts__list}>
				<li className={styles.charts__item_link}>
					<Link to="/chart/Apple" className={styles[isActive('Apple')]}>Apple</Link>
				</li>
				<li className={styles.charts__item_link}>
					<Link to="/chart/Alphabet" className={styles[isActive('Alphabet')]}>Alphabet</Link>
				</li>
				<li className={styles.charts__item_link}>
					<Link to="/chart/Microsoft" className={styles[isActive('Microsoft')]}>Microsoft</Link>
				</li>
				<li className={styles.charts__item_link}>
					<Link to="/chart/Amazon" className={styles[isActive('Amazon')]}>Amazon</Link>
				</li>
				<li className={styles.charts__item_link}>
					<Link to="/chart/Facebook" className={styles[isActive('Facebook')]}>Facebook</Link>
				</li>
				<li className={styles.charts__item_link}>
					<Link to="/chart/Tesla" className={styles[isActive('Tesla')]}>Tesla</Link>
				</li>
			</ul>
			{tricker ? (
				<div className={styles.chart}>
					<h3 className={styles.chart__title}>
						You see a graph of changes in the value of the
						{' '}
						{tricker }
					</h3>
					<Chart data={chartStore[tricker]} />
				</div>
			) : (
				<h4 className={styles.title}>Choose which graph you want to see</h4>
			)}
		</div>
	);
}
