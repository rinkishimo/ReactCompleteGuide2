const Brick = (props) => {
	return (
		<div className="card shadow-sm">
			<div className="card-body">
				<p className="card-text">{props.username}</p>
				<p className="card-text">
					<small className="text-muted">{props.number}</small>
				</p>
			</div>
		</div>
	);
};

export default Brick;
