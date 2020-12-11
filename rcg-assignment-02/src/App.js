import { useState } from "react";
import "./App.css";

import InputForm from "./InputForm/InputForm";
import Charbox from "./Charbox/Charbox";

const App = () => {
	const [word, setWord] = useState("ahojky");

	const wordChangeHandler = (newWord) => {
		setWord(newWord);
	};

	const deleteCharHandler = (charIndex) => {
		const chars = word.split("");
		chars.splice(charIndex, 1);
		const newWord = chars.join("");
		setWord(newWord);
	};

	const doubleCharHandler = (charIndex) => {
		const chars = word.split("");
		chars.splice(charIndex, 0, chars[charIndex]);
		const newWord = chars.join("");
		setWord(newWord);
	};

	const stopPropagation = (e) => {
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();
	};

	return (
		<div className="App container">
			<InputForm
				className="my-4"
				wordChangeHandler={(e) => wordChangeHandler(e.target.value)}
				word={word}
			/>
			<Charbox
				className="my-4"
				word={word}
				clickHandler={(e) => {
					stopPropagation(e);
					console.log(e);
					if (e.altKey === true) {
						doubleCharHandler(index);
					} else {
						deleteCharHandler(index);
					}
				}}
			/>
		</div>
	);
};

export default App;
