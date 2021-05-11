import axios from "../../axios";
import { ADD_MEDICAL, REMOVE_MEDICAL, SET_MEDICALS } from "./types";

export const add = (medical) => ({
  type: ADD_MEDICAL,
  medical: medical,
});

export const remove = (medical) => ({
  type: REMOVE_MEDICAL,
  medical: medical,
});

export const set = (data) => ({
  type: SET_MEDICALS,
  data: data,
});

export const load = () => {
  return (dispatch) =>
    axios
    .get("/default.json")
    .then((response) => dispatch(set(response.data)));
};
