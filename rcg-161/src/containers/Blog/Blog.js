import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

import axios from "axios";
import FullPostFC from "../../components/FullPost/FullPostFC";

class Blog extends Component {
	state = {
		posts: [],
		selectedPostId: null,
		error: null,
	};
	componentDidMount() {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((response) => {
				const posts = response.data;
				const updatedPosts = posts.slice(0, 6).map((post) => {
					return {
						...post,
						author: "Max",
					};
				});
				this.setState({ posts: updatedPosts });
				// console.log(response);
			})
			.catch((error) => {
				this.setState({ error: error });
			});
	}

	selectPostHandler = (id) => {
		this.setState({ selectedPostId: id });
	};

	render() {
		let posts = (
			<p style={{ textAlign: "center", color: "red" }}>
				Something went wrong
			</p>
		);
		if (!this.state.error) {
			posts = this.state.posts.map((post) => {
				return (
					<Post
						key={post.id}
						title={post.title}
						author={post.author}
						clicked={() => this.selectPostHandler(post.id)}
					/>
				);
			});
		}

		return (
			<div>
				<section className="Posts">{posts}</section>
				<section>
					<FullPost id={this.state.selectedPostId} />
					<hr />
					<FullPostFC id={this.state.selectedPostId} />
				</section>
				<section>
					<NewPost />
				</section>
			</div>
		);
	}
}

export default Blog;
