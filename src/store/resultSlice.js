import { createSlice } from '@reduxjs/toolkit'

const calculatePercent = (string) => {
	let firstSymbol;
	let secondSymbol;
	let equal;
	if (string.includes('+')) {
		firstSymbol = Number(string.split('+')[0])
		secondSymbol = Number(string.split('+')[1].split('%')[0])
		equal = firstSymbol + ((firstSymbol / 100) * secondSymbol)
	} else if (string.includes('-')) {
		firstSymbol = Number(string.split('-')[0])
		secondSymbol = Number(string.split('-')[1].split('%')[0])
		equal = firstSymbol - ((firstSymbol / 100) * secondSymbol)
	} else if (string.includes('*')) {
		firstSymbol = Number(string.split('*')[0])
		secondSymbol = Number(string.split('*')[1].split('%')[0])
		equal = firstSymbol * ((firstSymbol / 100) * secondSymbol)
	} else if (string.includes('/')) {
		firstSymbol = Number(string.split('/')[0])
		secondSymbol = Number(string.split('/')[1].split('%')[0])
		equal = firstSymbol / ((firstSymbol / 100) * secondSymbol)
	}
	return equal;
};

const calculateResult = (result) => {
	if (result !== 0 && !result.includes('%')) {
		let calcResult = eval(result);
		calcResult = parseFloat(calcResult.toFixed(3));
		return (String(calcResult))
	}
	else if (result !== 0 && result.includes('%')) {
		let newCalcResult = calculatePercent(result);
		newCalcResult = parseFloat(newCalcResult.toFixed(3));
		return (String(newCalcResult))
	}
};

const resultSlice = createSlice({
	name: 'result',
	initialState: {
		result: '',
		isResulted: false
	},
	reducers: {
		onAddSymbol(state, action) {
			state.result = state.result + action.payload;
			state.isResulted = false;
		},
		onDeleteSymbol(state) {
			state.result = state.result.slice(0, -1);
			state.isResulted = false;
		},
		onDeleteAllSymbols(state) {
			state.result = '';
			state.isResulted = false;
		},
		onEqual(state) {
			state.isResulted = true;
			state.result = calculateResult(state.result);
		},
	}
});

export const {onAddSymbol, onDeleteSymbol, onDeleteAllSymbols, onEqual} = resultSlice.actions;

export default resultSlice.reducer;