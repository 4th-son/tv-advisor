// import axios from "axios";
import { Fake_data } from "./fakeData";

export class TVShowAPI {
  static async fetchPopulars() {
    // try {
    //   const response = await axios.get(`${API_URL}tv/popular`, {
    //     params: {
    //       api_key: API_KEY,
    //     },
    //   });
    //   console.log(response.data.results);
    return Fake_data;

    // } catch (error) {
    //   console.error("Error fetching popular TV shows:", error);
    //   return []; // Return empty array or handle error as appropriate
    // }
  }
}
