import styles from './Footer.module.scss';

export function Footer() {
	const year = new Date().getUTCFullYear();
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<a
					href="https://github.com/DStukalo"
					className={styles.link}
					target="_blank"
					rel="noreferrer"
				>
					Github
				</a>
				<p className={styles.year}>
					{year}
					{' '}
					&#xa9;
				</p>
				<a
					href="https://t.me/DStukalo_90"
					className={styles.link}
					target="_blank"
					rel="noreferrer"
				>
					Telegram
				</a>
			</div>
		</footer>
	);
}
