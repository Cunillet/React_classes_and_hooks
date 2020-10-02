import axios from 'axios';
import youtube_API from '../files/youtube_API';


export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: youtube_API,
	}
});