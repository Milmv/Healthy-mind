import axios from "axios";

export const fetchResult = (Height, Weight) => (dispatch) => {
  
  axios.get(`http://localhost:5000/result?height=${Height}&weight=${Weight}`).then(({ data }) => {
    dispatch(setResult(data));
  });
};

export const setResult = (obj) => ({
  type: "SET_RESULT",
  payload: obj,
});