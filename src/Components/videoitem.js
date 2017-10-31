import React from 'react';

const VideoItem = ({video, onVideoClick}) => {
  const imageurl = video.snippet.thumbnails.default.url;

  return(
    <li oncClick={()=>onVideoClick(video)} className = "list-group-item">
      <div className="video-list-media">
      <div className="media-left">
        <img className="media-object"  src={imageurl}/>
      </div>
      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
      </div>
    </li>
  )
}

export default VideoItem;
