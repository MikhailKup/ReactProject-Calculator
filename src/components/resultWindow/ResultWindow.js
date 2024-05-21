import './ResultWindow.scss'

const ResultWindow = ({result, isResulted}) => {
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