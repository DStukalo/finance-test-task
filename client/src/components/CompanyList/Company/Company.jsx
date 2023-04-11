/* eslint-disable react-hooks/exhaustive-deps */
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { useLastPrices } from '../../../store/lastPricesStore';
import useRunningLineFacade from '../../../hooks/useRunningStoreFacade';
import useRunningLineStatusFacade from '../../../hooks/useRunningLineStatusFacade';
import styles from './Company.module.scss';

export function Company({
	name, price, percent, change, fullname,
}) {
	const lastPrices = useLastPrices();
	const runLine = useRunningLineFacade();
	const runLineStatus = useRunningLineStatusFacade();
	const difference = parseFloat(price) > parseFloat(lastPrices[`Last${name}`]);

	function onClickHandler() {
		if (runLine[fullname]) runLine[`set${fullname}False`]();
		else runLine[`set${fullname}True`]();
	}

	useEffect(() => {
		if (difference) runLineStatus[`set${fullname}Up`]();
		else runLineStatus[`set${fullname}Down`]();
	}, [difference]);

	useEffect(
		() => () => lastPrices[`setLast${name}`](price),
		[price],
	);

	return (
		<div className={styles.company}>
			<div className={styles.company__brand}>
				{fullname !== '' && <div className={styles[fullname]} />}
				<div className={styles.company__name}>
					{fullname}
				</div>
			</div>
			{price !== '' ? (
				<p className={styles.company__price}>
					{price}
					$
				</p>
			) : null}
			{difference ? (
				<>
					<div className={styles.company__up}>
						<p className={styles.company__percent}>
							{percent}
							%
						</p>
						<div className={styles.company__up_logo} />
					</div>
					<div className={styles.company__change_up}>
						+
						{change}
						$
					</div>
				</>
			) : (
				<>
					<div className={styles.company__down}>
						<p>
							{percent}
							%
						</p>
						<div className={styles.company__down_logo} />
					</div>
					<div className={styles.company__change_down}>
						-
						{change}
						$
					</div>
				</>
			)}
			{!runLine[fullname] ? (
				<button type="button" className={styles.company__btn} onClick={onClickHandler}>+</button>
			) : (
				<button type="button" className={styles.company__btn} onClick={onClickHandler}>-</button>
			)}

		</div>
	);
}

Company.propTypes = {
	name: PropTypes.string,
	price: PropTypes.string,
	percent: PropTypes.string,
	change: PropTypes.string,
	fullname: PropTypes.string,
};

Company.defaultProps = {
	name: '',
	price: '',
	percent: '',
	change: '',
	fullname: '',
};
