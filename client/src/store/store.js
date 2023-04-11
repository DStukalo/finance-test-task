import { create } from 'zustand';

export const useTrickers = create((set) => ({
	loaded: false,

	AAPL: false, // Apple
	GOOGL: false, // Alphabet
	MSFT: false, // Microsoft
	AMZN: false, // Amazon
	FB: false, // Facebook
	TSLA: false, // Tesla

	setLoaded: () => {
		set({ loaded: true });
	},

	setAAPL: (value) => {
		set({ AAPL: value });
	},

	setGOOGL: (value) => {
		set({ GOOGL: value });
	},

	setMSFT: (value) => {
		set({ MSFT: value });
	},

	setAMZN: (value) => {
		set({ AMZN: value });
	},

	setFB: (value) => {
		set({ FB: value });
	},

	setTSLA: (value) => {
		set({ TSLA: value });
	},

}));
