import axios from 'axios';

const API_KEY = '0f5019eb4cbbeb342dec76557e2ac38d'
const BASE_URL = `https://ws.audioscrobbler.com/2.0/?api_key=${API_KEY}&format=json`;
// axios.defaults.baseURL = `https://ws.audioscrobbler.com/2.0/?api_key=${API_KEY}&format=json`

const api = {
  artists: {
    async getTop(limit) {
      const response = await axios.get(`${BASE_URL}&method=chart.gettopartists&limit=${limit}`);
      return response.data;
    },
    async getInfo(id) {
      const response = await axios.get(`${BASE_URL}&method=artist.getinfo&mbid=${id}`);
      return response.data;
    },
    async getTopTracksById(id, limit) {
      const response = await axios.get(`${BASE_URL}&method=artist.gettopalbums&mbid=${id}&limit=${limit}`);
      return response.data;
    }
  },
  albums: {
    async getTop(limit) {
      const response = await axios.get(`${BASE_URL}&method=tag.gettopalbums&tag=pop&limit=${limit}`);
      return response.data;
    }
  },
  tracks: {
    async getTop(limit) {
      const response = await axios.get(`${BASE_URL}&method=chart.gettoptracks&limit=${limit}`);
      return response.data;
    },
    async getByCountry(limit, country) {
      const response = await axios.get(`${BASE_URL}&method=geo.gettoptracks&country=${country}&limit=${limit}`);
      return response.data;
    }
  }

}

export default api;