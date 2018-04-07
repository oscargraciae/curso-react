import React from 'react';

import api from '../config/api';

import Layout from '../components/general/Layout';
import ArtistImageList from '../components/arist-list/ArtistImageList';

class Search extends React.Component {

  constructor() {
    super();

    this.state = {
      artists: null,
    }
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    const { query } = this.props.match.params;
    const res = await api.artists.search(query);
    const { artist } = res.results.artistmatches;
    console.log(res);
    console.log("asasasa", artist);
    this.setState({ artists: artist });
  }

  render() {
    const { artists } = this.state;
    return (
      <Layout>
        <div className="container">
          <h1>Resultados</h1>
          { artists && <ArtistImageList artists={artists} /> }
        </div>
      </Layout>
    )
  }
}

export default Search;