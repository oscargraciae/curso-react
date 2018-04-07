import React from 'react';

import './TrackItem.css';

function TrackItem(props) {
  return (
    <div className="track-item">
      <img className="track-item-image" width={50} height={50} src={props.image[2]['#text']} />
      <div className="track-item-detail">
        <a className="track-item-title">{props.name}</a> <br />
        <a className="track-artist-name">{props.artist.name}</a>
      </div>
    </div>
  )
}

export default TrackItem;