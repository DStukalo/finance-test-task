import { create } from 'zustand';

export const useRunningLine = create((set) => ({
	Apple: false,
	Alphabet: false,
	Microsoft: false,
	Amazon: false,
	Facebook: false,
	Tesla: false,

	setAppleFalse: () => {
		set({ Apple: false });
	},

	setAppleTrue: () => {
		set({ Apple: true });
	},

	setAlphabetFalse: () => {
		set({ Alphabet: false });
	},

	setAlphabetTrue: () => {
		set({ Alphabet: true });
	},

	setMicrosoftFalse: () => {
		set({ Microsoft: false });
	},

	setMicrosoftTrue: () => {
		set({ Microsoft: true });
	},

	setAmazonFalse: () => {
		set({ Amazon: false });
	},

	setAmazonTrue: () => {
		set({ Amazon: true });
	},

	setFacebookFalse: () => {
		set({ Facebook: false });
	},

	setFacebookTrue: () => {
		set({ Facebook: true });
	},

	setTeslaFalse: () => {
		set({ Tesla: false });
	},

	setTeslaTrue: () => {
		set({ Tesla: true });
	},

}));

export const useRunningLineStatus = create((set) => ({
	Apple: 'down',
	Alphabet: 'down',
	Microsoft: 'down',
	Amazon: 'down',
	Facebook: 'down',
	Tesla: 'down',

	setAppleUp: () => {
		set({ Apple: 'up' });
	},

	setAppleDown: () => {
		set({ Apple: 'down' });
	},

	setAlphabetUp: () => {
		set({ Alphabet: 'up' });
	},

	setAlphabetDown: () => {
		set({ Alphabet: 'down' });
	},

	setMicrosoftUp: () => {
		set({ Microsoft: 'up' });
	},

	setMicrosoftDown: () => {
		set({ Microsoft: 'down' });
	},

	setAmazonUp: () => {
		set({ Amazon: 'up' });
	},

	setAmazonDown: () => {
		set({ Amazon: 'down' });
	},

	setFacebookUp: () => {
		set({ Facebook: 'up' });
	},

	setFacebookDown: () => {
		set({ Facebook: 'down' });
	},

	setTeslaUp: () => {
		set({ Tesla: 'up' });
	},

	setTeslaDown: () => {
		set({ Tesla: 'down' });
	},

}));
