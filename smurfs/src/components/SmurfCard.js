import React from "react";
import { connect } from "react-redux";

const SmurfCard = (props) => {
  console.log(props);

  return (
    <div className="smurfCard">
      <h2>Name: {props.smurf.name}</h2>
      <h3>Age: {props.smurf.age}</h3>
      <h3>Size:{props.smurf.height}</h3>
      {/* <button onClick={() => props.deleteItem(props.smurf)}>Delete</button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    name: state.smurfs.name,
  };
};

export default connect(mapStateToProps, {})(SmurfCard);
