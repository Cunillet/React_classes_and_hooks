import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import useVideos from '../../hooks/useVideos';

const VideosWithHooks = () => {
	const [videos, search] = useVideos('cute cats');
	const [selectedVideo, setSelectedVideo] = useState(null);

	const onVideoSelect = (video) => {
		setSelectedVideo(video);
		document.querySelector('#video-list').classList.add('col-lg-5');
	}

	useEffect(() => {
		setSelectedVideo(null);

		document.querySelector('#video-list').classList.remove('col-lg-5');
	}, [videos]);

	return (
		<div className="container">
			<SearchBar onFormSubmit={search} />
			<div className="d-lg-flex">
				<VideoDetail video={selectedVideo} />
				<VideoList
					onVideoSelect={onVideoSelect}
					videos={videos} />
			</div>
		</div>
	);
};

export default VideosWithHooks;