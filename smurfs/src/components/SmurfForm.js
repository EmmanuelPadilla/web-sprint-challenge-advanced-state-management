import React from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";

const SmurfForm = () => {
  return (
    <div className="form">
      <form>
        <input type="text" placeholder="Smurf Name" />
        <input type="text" placeholder="Smurf Height" />
        <input type="text" placeholder="Smurf Age" />
      </form>
      <button>Add to Village</button>
    </div>
  );
};

export default connect(null, { addItem })(SmurfForm);
