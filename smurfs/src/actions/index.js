import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const GOT_SMURFS = "GOT_SMURFS";
// export const POST_SMURFS = "POST_SMURFS";
// export const POSTED_SMURF = "POSTED_SMURF";

export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: GET_SMURFS });
  axios
    .get("https://localhost:3000")
    .then((res) => {
      console.log("is data here", res);
      dispatch({ type: GOT_SMURFS, payload: res });
    })
    .catch((err) => console.log(err, "Gargamel got them all"));
};

// export const postSmurfs = (newSmurf) => (dispatch) => {
//   dispatch({ type: POST_SMURF });
//   axios.post("https://localhost:3000", newSmurf);
// };

export const addItem = (smurf) => {
  return {
    type: ADD_SMURF,
    payload: smurf,
  };
};

export const deleteItem = (smurf) => {
  return {
    type: DELETE_SMURF,
    payload: smurf,
  };
};
