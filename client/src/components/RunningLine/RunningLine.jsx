import useTrickersFacade from '../../hooks/useStoreFacade';
import useRunningLineFacade from '../../hooks/useRunningStoreFacade';
import useRunningLineStatusFacade from '../../hooks/useRunningLineStatusFacade';
import styles from './RunningLine.module.scss';

export function RunningLine() {
	const {
		AAPL, GOOGL, MSFT, AMZN, FB, TSLA,
	} = useTrickersFacade();
	const runLine = useRunningLineFacade();
	const runLineStatus = useRunningLineStatusFacade();

	return (
		<div className={styles.container}>
			<div className={styles.component}>
				{
					runLine.Apple ? (
						<p className={runLineStatus.Apple === 'up' ? `${styles.component__item_up} ${styles.component__item}` : `${styles.component__item_down} ${styles.component__item}`}>
							Apple :
							{AAPL.price}
							$
						</p>
					) : null
				}
				{
					runLine.Alphabet ? (
						<p className={runLineStatus.Alphabet === 'up' ? `${styles.component__item_up} ${styles.component__item}` : `${styles.component__item_down} ${styles.component__item}`}>
							Alphabet:
							{GOOGL.price}
							$
						</p>
					) : null
				}
				{
					runLine.Microsoft ? (
						<p className={runLineStatus.Microsoft === 'up' ? `${styles.component__item_up} ${styles.component__item}` : `${styles.component__item_down} ${styles.component__item}`}>
							Microsoft:
							{MSFT.price}
							$
						</p>
					) : null
				}
				{
					runLine.Amazon ? (
						<p className={runLineStatus.Amazon === 'up' ? `${styles.component__item_up} ${styles.component__item}` : `${styles.component__item_down} ${styles.component__item}`}>
							Amazon:
							{AMZN.price}
							$
						</p>
					) : null
				}
				{
					runLine.Facebook ? (
						<p className={runLineStatus.Facebook === 'up' ? `${styles.component__item_up} ${styles.component__item}` : `${styles.component__item_down} ${styles.component__item}`}>
							Faceboo:
							{FB.price}
							$
						</p>
					) : null
				}
				{
					runLine.Tesla ? (
						<p className={runLineStatus.Tesla === 'up' ? `${styles.component__item_up} ${styles.component__item}` : `${styles.component__item_down} ${styles.component__item}`}>
							Tesla:
							{TSLA.price}
							$
						</p>
					) : null
				}
			</div>
		</div>
	);
}
