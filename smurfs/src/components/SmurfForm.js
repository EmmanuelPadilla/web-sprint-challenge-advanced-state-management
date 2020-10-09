import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfs } from "../actions";

const defaultForm = {
  name: "",
  age: "",
  height: "",
};

const SmurfForm = (props) => {
  const [smurf, setSmurf] = useState(defaultForm);

  const submitForm = (e) => {
    e.preventDefault();
    props.postSmurfs(smurf);
    setSmurf(defaultForm); //clears form.
  };

  const updateInput = (e) => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  console.log("smurfForm", props);
  return (
    <div className="form">
      <form>
        <input
          type="name"
          placeholder="Smurf Name"
          name="name"
          value={smurf.name}
          onChange={updateInput}
        />
        <input
          type="number"
          placeholder="Smurf Age"
          value={smurf.age}
          name="age"
          onChange={updateInput}
        />
        <input
          type="number"
          placeholder="Smurf Height"
          value={smurf.height}
          name="height"
          onChange={updateInput}
        />
      </form>
      <button className="submit" onClick={submitForm}>
        Add to Village
      </button>
    </div>
  );
};

export default connect(null, { postSmurfs })(SmurfForm);
