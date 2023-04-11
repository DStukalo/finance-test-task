import { create } from 'zustand';

export const useLastPrices = create((set) => ({
	LastAAPL: false, // Apple
	LastGOOGL: false, // Alphabet
	LastMSFT: false, // Microsoft
	LastAMZN: false, // Amazon
	LastFB: false, // Facebook
	LastTSLA: false, // Tesla

	setLastAAPL: (value) => {
		set({ LastAAPL: value });
	},

	setLastGOOGL: (value) => {
		set({ LastGOOGL: value });
	},

	setLastMSFT: (value) => {
		set({ LastMSFT: value });
	},

	setLastAMZN: (value) => {
		set({ LastAMZN: value });
	},

	setLastFB: (value) => {
		set({ LastFB: value });
	},

	setLastTSLA: (value) => {
		set({ LastTSLA: value });
	},

	setIsFirstFalse: () => {
		set({ isFirst: false });
	},

}));
