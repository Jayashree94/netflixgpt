import { useDispatch } from "react-redux";
import { API__OPTIONS } from "../utils/const";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API__OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useGetNowPlayingMovies;
