import useGetNowPlayingMovies from "../cusHooks/useGetNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
    useGetNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};


export default Browse;
