const InputForm = (props) => {
    const pocetZnakov = props.word ? props.word.length : 0;
    
    const isValidWord = pocetZnakov >= 10
    const validWord = isValidWord ? 'valid' : 'invalid'

	return (
		<form className={props.className}>
			<div className="">
				<label htmlFor="word" className="form-label">
					Enter some text
				</label>
				<input
					id="word"
					type="text"
					className={`form-control is-${validWord}`}
					onChange={props.wordChangeHandler}
					value={props.word}
				/>
				<div id="wordHelp" className={`${validWord}-feedback`}>
					{pocetZnakov} chars. { isValidWord ? "That is long enough." : "That is too short." }
				</div>
			</div>
		</form>
	);
};

export default InputForm;
