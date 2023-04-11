import { useRunningLine } from '../store/runningLineStore';

const useRunningLineFacade = () => {
	const runLine = useRunningLine();

	return runLine;
};

export default useRunningLineFacade;
