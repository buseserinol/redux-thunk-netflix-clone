import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../redux/actions/movieActions";
import Hero from "../components/Hero";
import { getGenres } from "../redux/actions/genreActions";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";

const MainPage = () => {
  const dispatch = useDispatch();
  const genreState = useSelector((store) => store.genreReducer);
  //api'den populer filmleri al store'a aktar
  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />

      {genreState.isLoading ? (
        <Loader />
      ) : genreState.isError ? (
        <p>{genreState.isError}</p>
      ) : (
        genreState.genres.map((genre) => (
          <MovieList key={genre.id} genre={genre} />
        ))
      )}
    </div>
  );
};

export default MainPage;
