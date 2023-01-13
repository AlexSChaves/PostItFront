import { useEffect, useState } from 'react';
import { api } from '../../api';
import './styles.css';

import { Post } from '../../types/Post';

// const delUrl = 'http://localhost:3001/post?id=';

const Posts = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		showPosts();
	}, []);

	const showPosts = async () => {
		setLoading(true);
		let json = await api.getAllPosts();
		setLoading(false);
		setPosts(json);
	};

	const deletePost = async (id: string) => {
		let json = await api.deletePost(id);

		setPosts(posts.filter((post) => post.id !== id));

		console.log(json);
	};

	return (
		<>
			{loading ? (
				<h1>Carregando Post-it</h1>
			) : (
				<div className='post-area'>
					{/* <div>Total de Posts: {posts.length}</div> */}

					{posts.map((post, index) => (
						<div key={index} className='post'>
							<div className='button-area'>
								<button onClick={() => deletePost(post.id)}></button>
							</div>
							<div className='content'>
								<span>{post.content}</span>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Posts;
