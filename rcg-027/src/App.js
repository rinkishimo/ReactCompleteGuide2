import { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
	const [personsState, setPersonsState] = useState([
		{ name: "Max", age: 28 },
		{ name: "Manu", age: 29, extra: "Hobbies: Racing, ice hockey" },
		{ name: "Stephanie", age: 26 },
	]);

	const addYearsHandler = () => {
		let newPersonsState = [...personsState];
		newPersonsState[0].name = "Maximilian";
		newPersonsState = newPersonsState.map((p) => ({
			...p,
			age: p.age + 1,
		}));
		setPersonsState(newPersonsState);
	};

	return (
		<div className="App">
			<h1>Hi, I'm React App</h1>

			<div className="btn-group my-2"><button onClick={(e) => addYearsHandler()} className="btn btn-primary">Add Years</button></div>

			<Person name={personsState[0].name} age={personsState[0].age}>
				{personsState[0].extra}
			</Person>
			<Person name={personsState[1].name} age={personsState[1].age}>
				{personsState[1].extra}
			</Person>
			<Person name={personsState[2].name} age={personsState[2].age} />
		</div>
	);
};

export default App;
