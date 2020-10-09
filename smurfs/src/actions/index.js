import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const GOT_SMURFS = "GOT_SMURFS";
export const POST_SMURF = "POST_SMURF";
export const POSTED_SMURF = "POSTED_SMURF";

export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: GET_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("is data here", res);
      dispatch({ type: GOT_SMURFS, payload: res.data });
    })
    .catch((err) => console.log(err, "Gargamel got them all"));
};

export const postSmurfs = (newSmurf) => (dispatch) => {
  dispatch({ type: POST_SMURF });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      dispatch({ type: POSTED_SMURF, payload: res.data });
    })

    .catch((err) => console.log(err, "couldn't post"));
};

// export const addItem = (newSmurf) => {
//   return {
//     type: ADD_SMURF,
//     payload: smurf,
//   };
// };

// export const deleteItem = (smurf) => {
//   return {
//     type: DELETE_SMURF,
//     payload: smurf,
//   };
// };
