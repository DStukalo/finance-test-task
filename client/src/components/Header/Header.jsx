import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.header__logo}>
				<div className={styles.header__logo_logo} />
				<h1 className={styles.header__title}>
					Finance dashboard
				</h1>
			</div>
			<nav role="navigation" className={styles.navigation}>
				<NavLink
					className={({ isActive }) => (isActive
						? `${styles.active}`
						: `${styles.navigation__item}`)}
					end
					to="/"
				>
					Main
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive
						? `${styles.active}`
						: `${styles.navigation__item}`)}
					to="/chart"
				>
					Charts
				</NavLink>
			</nav>
		</header>
	);
}
