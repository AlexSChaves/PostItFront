import axios from 'axios';

const getURL = 'http://localhost:3001/posts';
const createURL = 'http://localhost:3001/post/create';
const delUrl = 'http://localhost:3001/post?id=';

export const api = {
	getAllPosts: async () => {
		// let response = await fetch(getURL);
		// let json = await response.json();
		// return json;

		let response = await axios.get(getURL);
		return response.data;
	},

	addNewPost: async (content: string) => {
		// const response = await fetch(createURL, {
		// 	method: 'POST',
		// 	body: JSON.stringify({ content }),
		// 	headers: { 'Content-Type': 'application/json' },
		// });
		// const json = await response.json();

		// return json;

		let response = await axios.post(createURL, {
			content,
		});

		return response.data;
	},

	deletePost: async (id: string) => {
		// const response = await fetch(delUrl + id, { method: 'Delete' });

		// const json = await response.json();

		// return json;

		let response = await axios.delete(delUrl + id);

		return response.data;
	},
};
