import axios from "axios";

export const fetchMenu = (bmi) => (dispatch) => {
  axios.get(`http://localhost:5000/menu?bmi=${bmi}`).then(({ data }) => {
    dispatch(setMenu(data));
  });
};
export const setMenu = (items) => ({
  type: "SET_MENU",
  payload: items,
});

