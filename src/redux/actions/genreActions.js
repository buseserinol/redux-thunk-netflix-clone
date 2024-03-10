// kategori verilerini al ve reducer'a haber ver

import axios from "axios";
import { ActionTypes } from "../actionTypes";
import { options } from "../../constants";

export const getGenres = () => (dispatch) => {
  //api isteği atıldığını reducer'a haber ver.
  dispatch({
    type: ActionTypes.GENRES_LOADING,
  });

  //api isteği at
  axios
    .get("https://api.themoviedb.org/3/genre/movie/list", options)
    .then((res) =>
      dispatch({ type: ActionTypes.GENRES_SUCCESS, payload: res.data.genres })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.GENRES_ERROR,
        payload: err.message,
      })
    );
};
