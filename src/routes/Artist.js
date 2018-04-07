// import libraries
import React from 'react';

// import local libraries
import api from '../config/api';

// import componentes
import Layout from '../components/general/Layout';
import AlbumImageList from '../components/album-list/AlbumImageList';

import './Artist.css';

class Artist extends React.Component {

  constructor() {
    super();

    this.state = {
      artist: null,
      albums: [],
    }
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    const { id } = this.props.match.params;
    const [artist, albums] = await Promise.all([
      api.artists.getInfo(id),
      api.artists.getTopTracksById(id, 5),
    ]);

    const artistAlbums = albums.topalbums.album;

    this.setState({ artist: artist.artist, albums: artistAlbums });
  }

  render() {
    const { artist, albums } = this.state;

    if(!artist) {
      return (
        <Layout>
          <h1>Cargando...</h1>
        </Layout>
      )
    }
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img className="artist-image" width={270} height={270} src={artist.image[3]['#text']} />
            </div>
            <div className="col-md-8">
              <h1>{artist.name}</h1>
              <p className="artist-summary">{artist.bio.summary}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <AlbumImageList albums={albums} />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Artist;