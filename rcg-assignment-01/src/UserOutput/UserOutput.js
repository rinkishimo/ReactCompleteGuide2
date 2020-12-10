const UserOutput = (props) => {
	return (
		<div className="col-sm-6 col-lg-4">
			<div className="card shadow-sm">
				<div className="card-body">
					<p className="card-text">username: {props.username}</p>
					<p className="card-text">
						<small className="text-muted">ahojky</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default UserOutput;
