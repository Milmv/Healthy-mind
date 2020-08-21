import axios from "axios";

export const fetchList = () => (dispatch) => {
  axios.get("http://localhost:5000/list").then(({ data }) => {
    dispatch(setList(data));
  });
};
export const setList = (items) => ({
  type: "SET_LIST",
  payload: items,
});