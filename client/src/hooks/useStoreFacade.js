import { shallow } from 'zustand/shallow';
import { useTrickers } from '../store/store';

const useTrickersFacade = () => {
	const {
		loaded, AAPL, GOOGL, MSFT, AMZN, FB, TSLA,
	} = useTrickers((state) => ({
		loaded: state.loaded,
		AAPL: state.AAPL,
		GOOGL: state.GOOGL,
		MSFT: state.MSFT,
		AMZN: state.AMZN,
		FB: state.FB,
		TSLA: state.TSLA,
	}), shallow);

	return {
		loaded, AAPL, GOOGL, MSFT, AMZN, FB, TSLA,
	};
};

export default useTrickersFacade;
