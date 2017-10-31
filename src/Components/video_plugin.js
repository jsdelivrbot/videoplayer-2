import React from 'react'

const VideoPlugin = ({video}) => {
  if(!video){
    return(<div>Loading...</div>)
  }
  const videoId = video.id.videoId;
  const url = `http://www.youtube.com/embed/${videoId}`;
  return(
    <div className="video-plugin col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src={url} allowfullscreen></iframe>
      </div>
      <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
      </div>
    </div>
  );

};
export default VideoPlugin;
