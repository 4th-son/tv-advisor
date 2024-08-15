import { useEffect, useState } from "react";
import { TVShowAPI } from "../../api/tvShows";
import { BACKDROP_BASE_URL } from "../../config";

function LandingPage() {
  const [currentTVShows, setCurrentTVShows] = useState(null);
  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShows(popularTVShowList[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);
  console.log(currentTVShows);

  const backdropStyle = currentTVShows
    ? {
        background: `url("${BACKDROP_BASE_URL}${currentTVShows.backdrop_path}")`,
      }
    : {};
  return (
    <div
      className=" main_container h-screen w-full flex flex-col p-6 text-white font-extrabold "
      style={{ backdropStyle }}
    >
      <div className=" header h-24 w-full  flex justify-around">
        {" "}
        <div>LOGO</div>{" "}
        <div>
          {" "}
          <input type="text" />
        </div>
      </div>
      <div className=" tvShow_detail h-52 w-full"></div>
      <div className=" recommended_shows h-60 w-full"></div>
    </div>
  );
}

export default LandingPage;
