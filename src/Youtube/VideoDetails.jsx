import React from "react";
import '../css/style.css';

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title="video-title"/>
      </div>
      <div className="details">
        <div><h2>{video.snippet.title}</h2></div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetails;
