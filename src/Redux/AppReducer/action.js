//Create ActionCreator functions here

import axios from "axios";
import { GET_SHOES_DATA_FAILURE, GET_SHOES_DATA_REQUEST, GET_SHOES_DATA_SUCCESS } from "./actionTypes";


export const getshoes = () => (dispatch) => {
    dispatch({ type: GET_SHOES_DATA_REQUEST });
    axios
      .get(`https://dog.ceo/api/breeds/list/all`)
      .then((r) => dispatch({ type: GET_SHOES_DATA_SUCCESS, payload: r.data.message }))
      
      .catch((err) => dispatch({ type: GET_SHOES_DATA_FAILURE, payload: err }));
  };
  