const Char = (props) => {
	const isBlank = props.char.trim() === '';
	const isPunct = '.,;?!'.includes(props.char);

	let bgColor = null;
	if (isBlank) {
		bgColor = 'bg-info';
	} else if (isPunct) {
		bgColor = 'bg-warning';
	}

	return (
		<div
			className={`card shadow-sm cursor-pointer ${props.className} ${bgColor}`}
			onClick={props.clickHandler}
		>
			<div className="card-body text-center">
				<h1 className="card-title">{props.char}</h1>
			</div>
		</div>
	);
};

export default Char;
