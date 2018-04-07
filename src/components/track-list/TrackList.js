import React from 'react';

import TrackItem from '../track-list/TrackItem';

import './TrackList.css';

function TrackList(props) {
  const { tracks } = props;
  return (
    <div className="tracklist">
      <ul>
        { tracks.map((item, key) => {
          return (
            <li key={key}>
              <TrackItem {...item} />
            </li>
          )
        }) }
      </ul>
    </div>
  )
}

export default TrackList;