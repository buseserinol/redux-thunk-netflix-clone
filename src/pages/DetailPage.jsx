import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImgUrl, options } from "../constants";
import axios from "axios";
import Loader from "../components/Loader";

const DetailPage = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,credits`,
        options
      )
      .then((res) => setMovie(res.data));
  }, []);
  console.log(movie);
  return (
    <div>
      {/* üst alan */}
      {!movie && <Loader />}
      {movie && (
        <div>
          <div className="relative h-[20vh] md:h-[50vh]">
            <img
              className="w-full h-full object-cover"
              src={baseImgUrl + movie.backdrop_path}
            />
            <div className="absolute bg-black inset-0 bg-opacity-50 grid place-items-center">
              <span className="text-3xl font-semibold">{movie.title}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* sol taraf */}
            <div></div>
            {/* sağ taraf */}
            <div>fgfg</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
