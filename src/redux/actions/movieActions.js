import { ActionTypes } from "../actionTypes";
import { options } from "../../constants";
import axios from "axios";

export const getPopular = () => (dispatch) => {
  //yüklenme durumunu reducer'a bildir.
  dispatch({
    type: ActionTypes.MOVIE_LOADING,
  });

  axios
    .get("https://api.themoviedb.org/3/movie/popular", options)
    .then((res) =>
      dispatch({
        type: ActionTypes.MOVIE_SUCCESS,
        payload: res.data.results,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.MOVIE_ERROR,
        payload: err.message,
      })
    );
};
