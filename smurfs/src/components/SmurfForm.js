import React from "react";
import { connect } from "react-redux";
import { postSmurfs } from "../actions";

const SmurfForm = (props) => {
  return (
    <div className="form">
      <form>
        <input type="text" placeholder="Smurf Name" />
        <input type="text" placeholder="Smurf Height" />
        <input type="text" placeholder="Smurf Age" />
      </form>
      <button
        className="submit"
        onClick={() => props.postSmurfs(props.newSmurf)}
      >
        Add to Village
      </button>
    </div>
  );
};

export default connect(null, { postSmurfs })(SmurfForm);
