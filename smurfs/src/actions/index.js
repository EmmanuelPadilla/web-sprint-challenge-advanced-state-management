export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";

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
