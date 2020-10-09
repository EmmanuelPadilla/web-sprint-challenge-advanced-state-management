import {
  ADD_SMURF,
  DELETE_SMURF,
  GOT_SMURFS,
  GET_SMURFS,
  POSTED_SMURF,
  POST_SMURFS,
} from "../actions";

const initialState = {
  smurfs: [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0,
    },
    {
      name: "Sleepy",
      age: 100,
      height: "5cm",
      id: 0,
    },
  ],
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
