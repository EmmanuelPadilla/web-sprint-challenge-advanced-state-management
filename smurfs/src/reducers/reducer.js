import { GET_SMURFS, GOT_SMURFS, POSTED_SMURF, POST_SMURF } from "../actions";

const initialState = {
  smurfs: [],
  loadedSmurfs: false,
  addedSmurf: {},
  error: "doenst work",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        loadedSmurfs: true,
      };
    case GOT_SMURFS:
      return {
        ...state,
        loadedSmurfs: false,
        smurfs: action.payload,
      };

    case POST_SMURF:
      console.log("add smurf", action.payload);
      return {
        ...state,
        loadedSmurfs: true,
      };
    case POSTED_SMURF:
      return {
        ...state,
        loadedSmurfs: false,
        smurfs: action.payload,
      };

    default:
      return state;
  }
};
