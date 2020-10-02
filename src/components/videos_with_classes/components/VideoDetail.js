import React from 'react';

const VideoDetail = ({ video }) => {

	if (!video) {
		return <div></div>;
	}
	return (
		<div id="video-detail" className="col-lg-7">
			<div className="mt-4 mb-2 embed-responsive embed-responsive-16by9">
				<iframe
					className="embed-responsive-item"
					src={`https://www.youtube.com/embed/${video.id.videoId}`}
					title={video.snippet.title}
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
			<div className="card">
				<div className="card-body">
					<h4 className="card-title">{video.snippet.title}</h4>
					<p className="card-text">{video.snippet.description}</p>
				</div>
			</div>
		</div>
	);
};

export default VideoDetail;