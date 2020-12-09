const UserInput = (props) => {
	return (
		<div className="my-3 w-25">
			<label htmlFor="usernameInput" className="form-label">
				Username
			</label>
			<input
				type="text"
				value={props.value}
				onChange={(event) => props.changed(event.target.value)}
				className="form-control"
				id="usernameInput"
			/>
		</div>
	);
};

export default UserInput;
