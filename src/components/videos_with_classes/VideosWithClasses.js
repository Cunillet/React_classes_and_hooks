import youtube from '../../apis/youtube';
import React from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class VideosWithClasses extends React.Component {
	state = { videos: [], selectedVideo: null };

	onSearchSubmit = async (searchText) => {
		const response = await youtube.get('/search', {
			params: {
				q: searchText,
			},
		});

		this.setState({
			videos: response.data.items,
			selectedVideo: null
		});

		document.querySelector('#video-list').classList.remove('col-lg-5');
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });

		// new structure when selecting a video, 7 - 5 cols
		document.querySelector('#video-list').classList.add('col-lg-5');
	};

	componentDidMount() {
		this.onSearchSubmit('cute cats');
	}

	render() {
		return (
			<div className="container">
				<SearchBar onFormSubmit={this.onSearchSubmit} />
				<div className="d-lg-flex">
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList
						onVideoSelect={this.onVideoSelect}
						videos={this.state.videos} />
				</div>
			</div>
		);
	}
}

export default VideosWithClasses;