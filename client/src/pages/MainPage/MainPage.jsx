import { useEffect } from 'react';
import { CompanyList } from '../../components/CompanyList/CompanyList';
import { RunningLine } from '../../components/RunningLine/RunningLine';
import styles from './MainPage.module.scss';

export function MainPage() {
	useEffect(() => {
		document.title = 'Main';
	}, []);

	return (
		<div className={styles.wrapper}>
			<RunningLine />
			<CompanyList />
		</div>
	);
}
