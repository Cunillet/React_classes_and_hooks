import React from 'react';

const VideoItem = ({ onVideoSelect, video }) => {

	return (
		<div
			onClick={() => onVideoSelect(video)}
			className="list-group-item d-md-flex align-items-center c-pointer"
		>
			<div className="col-md-4">
				<img
					className="img-thumbnail border-0"
					alt={video.snippet.title}
					src={video.snippet.thumbnails.medium.url} />
			</div>
			<div className="ml-1 col-md-8">
				{video.snippet.title}
			</div>
		</div>
	);
};

export default VideoItem;
