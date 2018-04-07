import React from 'react';

import AlbumImageItem from './AlbumImageItem';

import './AlbumImageList.css';

function AlbumImageList(props) {
  const { albums } = props;
  return (
    <div className="albums-image-list">
      { albums.map((item, key) => {
        return (
          <AlbumImageItem key={key} {...item} />
        )
      }) }
    </div>
  )
}

export default AlbumImageList;