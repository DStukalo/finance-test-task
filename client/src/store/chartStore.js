import { create } from 'zustand';

export const useChartStore = create((set, get) => ({
	Apple: [],
	Alphabet: [],
	Microsoft: [],
	Amazon: [],
	Facebook: [],
	Tesla: [],

	setApple: (value) => {
		const prev = get().Apple;
		set({ Apple: [...prev, value] });
	},

	setAlphabet: (value) => {
		const prev = get().Alphabet;
		set({ Alphabet: [...prev, value] });
	},

	setMicrosoft: (value) => {
		const prev = get().Microsoft;
		set({ Microsoft: [...prev, value] });
	},

	setAmazon: (value) => {
		const prev = get().Amazon;
		set({ Amazon: [...prev, value] });
	},

	setFacebook: (value) => {
		const prev = get().Facebook;
		set({ Facebook: [...prev, value] });
	},

	setTesla: (value) => {
		const prev = get().Tesla;
		set({ Tesla: [...prev, value] });
	},

}));
