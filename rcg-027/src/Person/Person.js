const person = (props) => (
	<p>
		I'm {props.name} and I'm {props.age} years old.
		{props.children ? (<><br />{props.children}</>) : null}
	</p>
);

export default person;
