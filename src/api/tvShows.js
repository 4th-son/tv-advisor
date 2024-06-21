import axios from "axios";

const API_KEY = "5f52c98bc154410d6950b365c335e9e1";
const API_URL = "https://api.themoviedb.org/3/";

export class TVShowAPI {
  static async fetchPopulars() {
    try {
      const response = await axios.get(`${API_URL}tv/popular`, {
        params: {
          api_key: API_KEY,
        },
      });
      console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching popular TV shows:", error);
      return []; // Return empty array or handle error as appropriate
    }
  }
}
