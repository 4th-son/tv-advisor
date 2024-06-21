import { TVShowAPI } from "./api/tvShows";
import LandingPage from "./assets/components/landingPage";

TVShowAPI.fetchPopulars();
function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
