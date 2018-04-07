import React from 'react';

import ArtistImageItem from './ArtistImageItem';

import './ArtistImageList.css';

function ArtistImageList(props) {
  const { artists } = props;
  return (
    <div className="artists-image-list">
      { artists.map((item, key) => {
        return (
          <ArtistImageItem key={key} {...item} />
        )
      }) }
    </div>
  )
}

export default ArtistImageList;