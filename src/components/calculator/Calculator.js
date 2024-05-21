import { useState } from 'react';
import ResultWindow from '../resultWindow/ResultWindow';
import Buttons from '../buttons/Buttons';

import './Calculator.scss'

const Calculator = () => {
	const [result, setResult] = useState('');
	const [isResulted, setIsResulted] = useState(false);
	return (
		<div className='calculator'>
			<ResultWindow result={result} setResult={setResult} isResulted={isResulted}/>
    	<Buttons result={result} setResult={setResult} setIsResulted={setIsResulted}/>
		</div>
	);
};

export default Calculator;