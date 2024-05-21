import './Buttons.scss'
import SingleButton from '../singleButton/SingleButton';

const Buttons = ({result, setResult, setIsResulted}) => {

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
			setResult(String(calcResult))
		}
		else if (result !== 0 && result.includes('%')) {
			let newCalcResult = calculatePercent(result);
			newCalcResult = parseFloat(newCalcResult.toFixed(3));
			setResult(String(newCalcResult))
		}
	};
	const onAddSymbol = (text) => {
		setIsResulted(false)
		setResult(result + text)
	};
	const onDeleteSymbol = () => {
		setResult(result.slice(0, -1))
	};
	const onDeleteAllSymbols = () => {
		setResult('')
		setIsResulted(false)
	};
	const onEqual = () => {
		setIsResulted(true)
		calculateResult(result)
	};

	return (
		<div className="buttons">
			<div className="buttons__row">
				<SingleButton text={'.'} btnType={'number'} action={() => onAddSymbol('.')}/>
				<SingleButton text={'0'} btnType={'number'} action={() => onAddSymbol('0')}/>
				<SingleButton text={'='} btnType={'equal'} action={() => onEqual()}/>
			</div>
			<div className="buttons__row">
				<SingleButton text={'1'} btnType={'number'} action={() => onAddSymbol('1')}/>
				<SingleButton text={'2'} btnType={'number'} action={() => onAddSymbol('2')}/>
				<SingleButton text={'3'} btnType={'number'} action={() => onAddSymbol('3')}/>
				<SingleButton text={'+'} btnType={'counting'} action={() => onAddSymbol('+')}/>
			</div>
			<div className="buttons__row">
				<SingleButton text={'4'} btnType={'number'} action={() => onAddSymbol('4')}/>
				<SingleButton text={'5'} btnType={'number'} action={() => onAddSymbol('5')}/>
				<SingleButton text={'6'} btnType={'number'} action={() => onAddSymbol('6')}/>
				<SingleButton text={'-'}btnType={'counting'} action={() => onAddSymbol('-')}/>
			</div>
			<div className="buttons__row">
				<SingleButton text={'7'} btnType={'number'} action={() => onAddSymbol('7')}/>
				<SingleButton text={'8'} btnType={'number'} action={() => onAddSymbol('8')}/>
				<SingleButton text={'9'} btnType={'number'} action={() => onAddSymbol('9')}/>
				<SingleButton text={'x'}btnType={'counting'} action={() => onAddSymbol('*')}/>
			</div>
			<div className="buttons__row">
				<SingleButton text={'AC'} btnType={'clean'} action={() => onDeleteAllSymbols()}/>
				<SingleButton text={'C'} btnType={'counting'} action={() => onDeleteSymbol()}/>
				<SingleButton text={'%'} btnType={'counting'} action={() => onAddSymbol('%')}/>
				<SingleButton text={'/'}btnType={'counting'} action={() => onAddSymbol('/')}/>
			</div>
		</div>
	);
};

export default Buttons;