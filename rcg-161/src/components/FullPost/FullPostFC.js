import axios from "axios";
import {
	useEffect,
	useState
} from "react";

import "./FullPost.css";

const FullPostFC = (props) => {
	const [loadedPost, setLoadedPost] = useState(null);

	useEffect(() => {
		// console.log("useEffect() 1", props.id, loadedPost);
		if (props.id && (!loadedPost || loadedPost.id !== props.id)) {
			axios.get(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
				.then((response) => {
					setLoadedPost(response.data);
				});
		}
	}, [props.id, loadedPost]);


	const deletePostHandler = () => {
		axios.delete(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
			.then((response) => {
				console.log(response);
			});
	};


	let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
	if (props.id != null) {
		post = <p style={{ textAlign: "center" }}>Loading...</p>;
	}
	if (loadedPost) {
		post = (
			<div className="FullPost">
				<h1>{loadedPost.title}</h1>
				<p>{loadedPost.body}</p>
				<div className="Edit" >
					<button onClick={deletePostHandler} className="Delete" >Delete</button>
				</div>
			</div>
		);
	}
	return post;
}

export default FullPostFC;