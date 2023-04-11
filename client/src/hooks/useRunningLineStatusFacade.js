import { useRunningLineStatus } from '../store/runningLineStore';

const useRunningLineStatusFacade = () => {
	const runLine = useRunningLineStatus();

	return runLine;
};

export default useRunningLineStatusFacade;
