import React from 'react';
import {
  Link
} from 'react-router-dom';

import './ArtistImageItem.css';

function ArtistImageItem(props) {
  return (
    <div className="artist-item artist-image" style={{backgroundImage: "url(" + props.image[3]['#text'] + ")"}} >
      <Link to={`/artist/${props.mbid}`}>
        {props.name}
      </Link>
    </div>
  )
}

export default ArtistImageItem;