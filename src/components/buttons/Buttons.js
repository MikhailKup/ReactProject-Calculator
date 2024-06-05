import { useDispatch } from 'react-redux';
import SingleButton from '../singleButton/SingleButton';
import { onAddSymbol, onDeleteSymbol, onDeleteAllSymbols, onEqual } from '../../store/resultSlice';
import './Buttons.scss'

const Buttons = () => {
	const dispatch = useDispatch();
	return (
		<div className="buttons">
			<div className="buttons__row">
				<SingleButton text={'.'} btnType={'number'} action={() => dispatch(onAddSymbol('.'))}/>
				<SingleButton text={'0'} btnType={'number'} action={() => dispatch(onAddSymbol('0'))}/>
				<SingleButton text={'='} btnType={'equal'} action={() => dispatch(onEqual())}/>
			</div>
			<div className="buttons__row">
				<SingleButton text={'1'} btnType={'number'} action={() => dispatch(onAddSymbol('1'))}/>
				<SingleButton text={'2'} btnType={'number'} action={() => dispatch(onAddSymbol('2'))}/>
				<SingleButton text={'3'} btnType={'number'} action={() => dispatch(onAddSymbol('3'))}/>
				<SingleButton text={'+'} btnType={'counting'} action={() => dispatch(onAddSymbol('+'))}/>
			</div>
			<div className="buttons__row">
				<SingleButton text={'4'} btnType={'number'} action={() => dispatch(onAddSymbol('4'))}/>
				<SingleButton text={'5'} btnType={'number'} action={() => dispatch(onAddSymbol('5'))}/>
				<SingleButton text={'6'} btnType={'number'} action={() => dispatch(onAddSymbol('6'))}/>
				<SingleButton text={'-'}btnType={'counting'} action={() => dispatch(onAddSymbol('-'))}/>
			</div>
			<div className="buttons__row">
				<SingleButton text={'7'} btnType={'number'} action={() => dispatch(onAddSymbol('7'))}/>
				<SingleButton text={'8'} btnType={'number'} action={() => dispatch(onAddSymbol('8'))}/>
				<SingleButton text={'9'} btnType={'number'} action={() => dispatch(onAddSymbol('9'))}/>
				<SingleButton text={'x'}btnType={'counting'} action={() => dispatch(onAddSymbol('*'))}/>
			</div>
			<div className="buttons__row">
				<SingleButton text={'AC'} btnType={'clean'} action={() => dispatch(onDeleteAllSymbols())}/>
				<SingleButton text={'C'} btnType={'counting'} action={() => dispatch(onDeleteSymbol())}/>
				<SingleButton text={'%'} btnType={'counting'} action={() => dispatch(onAddSymbol('%'))}/>
				<SingleButton text={'/'}btnType={'counting'} action={() => dispatch(onAddSymbol('/'))}/>
			</div>
		</div>
	);
};

export default Buttons;