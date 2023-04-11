import useTrickersFacade from '../../hooks/useStoreFacade';
import { Company } from './Company/Company';
import styles from './CompanyList.module.scss';

export function CompanyList() {
	const {
		loaded, AAPL, GOOGL, MSFT, AMZN, FB, TSLA,
	} = useTrickersFacade();

	return (
		<div className={styles.companies}>
			<h3 className={styles.companies__title}>
				Our Company
			</h3>
			{loaded ? (
				<div className={styles.list}>
					{AAPL ? (
						<Company
							fullname="Apple"
							name={AAPL.ticker}
							price={AAPL.price}
							percent={AAPL.change_percent}
							change={AAPL.change}
						/>
					) : null}
					{GOOGL ? (
						<Company
							fullname="Alphabet"
							name={GOOGL.ticker}
							price={GOOGL.price}
							percent={GOOGL.change_percent}
							change={GOOGL.change}
						/>
					) : null}
					{MSFT ? (
						<Company
							fullname="Microsoft"
							name={MSFT.ticker}
							price={MSFT.price}
							percent={MSFT.change_percent}
							change={MSFT.change}
						/>
					) : null}
					{AMZN ? (
						<Company
							fullname="Amazon"
							name={AMZN.ticker}
							price={AMZN.price}
							percent={AMZN.change_percent}
							change={AMZN.change}
						/>
					) : null}
					{FB ? (
						<Company
							fullname="Facebook"
							name={FB.ticker}
							price={FB.price}
							percent={FB.change_percent}
							change={FB.change}
						/>
					) : null}
					{TSLA ? (
						<Company
							fullname="Tesla"
							name={TSLA.ticker}
							price={TSLA.price}
							percent={TSLA.change_percent}
							change={TSLA.change}
						/>
					) : null}
				</div>
			) : (
				<div className={styles.loading}>loading...</div>
			)}
		</div>
	);
}
