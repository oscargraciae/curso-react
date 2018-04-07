// import libraries
import React from 'react';

// import local libraries
import api from '../config/api';

// import componentes
import Layout from '../components/general/Layout';
import ArtistImageList from '../components/arist-list/ArtistImageList';
import AlbumImageList from '../components/album-list/AlbumImageList';
import TrackList from '../components/track-list/TrackList';

import './Home.css'

class Home extends React.Component {

  constructor() {
    super();

    this.state = {
      artistTop: null,
      albumsTop: null,
      tracksTop: null,
      countryTracks: null,
    }
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    const [artistsTop, albumsTop, tracksTop, countryTracks] = await Promise.all([
      api.artists.getTop(6),
      api.albums.getTop(12),
      api.tracks.getTop(10),
      api.tracks.getByCountry(10, 'mexico'),
    ])
    
    const { artist } = artistsTop.artists;
    const { album } = albumsTop.albums;
    const { track } = tracksTop.tracks;
    const trackCountry = countryTracks.tracks.track;

    this.setState({ artistTop: artist, albumsTop: album, tracksTop: track, trackCountry: trackCountry });
  }

  render() {
    const { artistTop, albumsTop, tracksTop, trackCountry } = this.state;
    return (
      <Layout>
        <div className="container">
          <div className="most-popular">
            <h2 className="subtitle">Artistas más populares</h2>
            { artistTop && <ArtistImageList artists={artistTop} /> }
          </div>

          <div className="most-popular">
            <h2 className="subtitle">Nuevos lanzamientos</h2>
            { albumsTop && <AlbumImageList albums={albumsTop} /> }
          </div>

          <div className="row">
            <div className="col-md-6">
              <h2 className="subtitle">Canciones de la semana</h2>
              { tracksTop && <TrackList tracks={tracksTop} /> }
            </div>
            <div className="col-md-6">
              <h2 className="subtitle">Recomendados en México</h2>
              { trackCountry && <TrackList tracks={trackCountry} /> }
            </div>  
          </div>

        </div>
      </Layout>
    )
  }
}

export default Home;