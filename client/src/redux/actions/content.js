import axios from "axios";

export const fetchContent = () => (dispatch) => {
  axios.get("http://localhost:5000/project").then(({ data }) => {
    dispatch(setContent(data));
  });
};
export const setContent = (items) => ({
  type: "SET_CONTENT",
  payload: items,
});