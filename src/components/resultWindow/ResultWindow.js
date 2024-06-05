import { useSelector } from 'react-redux';
import './ResultWindow.scss'

const ResultWindow = () => {
	const result = useSelector(state => state.result.result);
	const isResulted = useSelector(state => state.result.isResulted);
	const windowClass = isResulted ? 'resultwindow__output resultClass' : 'resultwindow__output operationalClass';
	return (
		<div className="resultwindow">
			<div className={windowClass}>
				{result}
			</div>
		</div>
	);
};

export default ResultWindow;