import React from 'react';

import './AlbumImageItem.css';

function AlbumImageItem(props) {
  return (
    <div className="album-item">
      <div className="album-image" style={{backgroundImage: "url(" + props.image[3]['#text'] + ")"}} />
      <div className="album-bottom">
        <a href="/">{props.name}</a> <br />
        <a href="/" className="album-artist-name">{props.artist.name}</a>
      </div>
    </div>
  )
}

export default AlbumImageItem;