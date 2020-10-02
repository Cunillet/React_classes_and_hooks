import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ onVideoSelect, videos }) => {
	const renderedList = videos.map((video) => {
		return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
	});

	return (
		<div id="video-list" className="list-group list-group-flush">{renderedList}</div>
	);
};

export default VideoList;
