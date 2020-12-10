import { useEffect, useState } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Brick from "./Brick/Brick";

const userOutputMasonryId = "useroutput-msnry";
const userOutputMasonryColumns = { default: 1, 510: 2, 690: 3, 930: 4 };
let userOutputMasonry = null;

const rnd = (num) => Math.floor(Math.random() * (num || 100));

const numbers = Array.from(Array(rnd(20) + 1), () => 0).map((val, idx) => (idx + 1));

const App = () => {
	const [username, setUsername] = useState("supermaxo");
	const [showOutput, setShowOutput] = useState(false);

	const usernameChangedHandler = (value) => {
		setUsername(value);
	};

	const toogleShowOutputHandler = () => {
		setShowOutput(!showOutput);
	};

	useEffect(() => {
		if (showOutput) {
			// create masonry
			setTimeout(() => {
				userOutputMasonry && userOutputMasonry.destroy();
				userOutputMasonry = new window.Masonry(
					`#${userOutputMasonryId}`,
					{
						// horizontalOrder: true
					}
				);
				// console.log(userOutputMasonry)
			}, 0);
		} else {
			// destroy masonry
			userOutputMasonry && userOutputMasonry.destroy();
		}
	}, [showOutput, username]);

	

	return (
		<div className="App">
			<div className="container">
				<UserInput changed={usernameChangedHandler} value={username} />
				<button onClick={toogleShowOutputHandler}>Toogle output</button>
				{showOutput ? (
					<div
						className="row g-3 -gx-2 -gy-2 my-4"
						id={userOutputMasonryId}
					>
						<UserOutput username={username} />
						<UserOutput username={`2 FixeD ${rnd()}`} />
						<UserOutput username={`3 FixeD ${rnd()}`} />
						<UserOutput username={username} />
						<UserOutput username={`5 FixeD ${rnd()}`} />
					</div>
				) : null}
				<hr />
        
				{showOutput ? (
          <div className="row"><div className="col-12 col-lg-8 offset-lg-4 bg-teal">
					<ResponsiveMasonry
						columnsCountBreakPoints={userOutputMasonryColumns}
						className="my-4"
					>
						<Masonry c-olumnsCount={3} gutter={".5em"}>
							{numbers.map((number) => (
								<Brick
                  key={number}
                  number={number}
									username={
										Array.from(
											Array(rnd(20) + 1),
											() => "ahojky"
										).join(" ")
									}
								/>
							))}
						</Masonry>
					</ResponsiveMasonry>
          </div></div>
				) : null}
			</div>
		</div>
	);
};

export default App;
