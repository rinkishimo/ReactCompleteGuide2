import Char from "./Char/Char";

const Charbox = (props) => {
	return (
		<div className={props.className}>
			<div className="d-flex flex-wrap justify-content-start m-n1">
				{props.word.split("").map((char, index) => {
					return (
						<Char
							className="minw-2r m-1"
							key={index}
							char={char}
							clickHandler={(e) => {props.clickHandler(e, index);}}
						/>
					);
				})}
			</div>
			<p className="text-muted mt-2">
				<small>Click = Remove char, Alt+Click = Double char.</small>
			</p>
		</div>
	);
};

export default Charbox;
