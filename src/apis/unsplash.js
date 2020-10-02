import axios from 'axios';
import unsplash_API from '../files/unsplash_API';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: unsplash_API,
	},
});
