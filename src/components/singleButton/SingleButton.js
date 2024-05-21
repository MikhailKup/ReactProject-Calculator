import './SingleButton.scss'

const SingleButton = ({text, btnType, action}) => {
	const btnClass = `btn ${btnType}`;
	return (
		<button className={btnClass} onClick={action}>
			{text}
		</button>
	);
};

export default SingleButton;