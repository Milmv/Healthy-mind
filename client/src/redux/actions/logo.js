import axios from "axios";

export const fetchLogo = () => (dispatch) => {
  axios.get("http://localhost:5000/static/logo.svg").then(( {data }) => {
    dispatch(setLogo(data));
  });
};

export const setLogo = (items) => ({
  type: "SET_LOGO",
  payload: items,
});