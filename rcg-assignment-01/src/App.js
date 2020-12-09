import { useState } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

const App = () => {
	const [username, setUsername] = useState("supermaxo");

	const usernameChangedHandler = (value) => {
		setUsername(value);
  };
  
  const rnd = Math.floor(Math.random() * 100);

	return (
		<div className="App">
			<div className="container">
				<UserInput changed={usernameChangedHandler} value={username} />
				<div className="row" data-masonry='{"percentPosition": true }'>
					<UserOutput username={username} />
					<UserOutput username={username} />
					<UserOutput username={`FixeD ${rnd}`} />
				</div>
			</div>
		</div>
	);
};

export default App;
