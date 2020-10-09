import React from "react";
import { connect } from "react-redux";
import SmurfCard from "./SmurfCard";

const AddedSmurfs = (props) => {
  return (
    <div className="smurfVillage">
      <h2>Smurf Village</h2>
      {props.smurfs.map((smurf) => (
        <SmurfCard key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("added smurfs", state);
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, {})(AddedSmurfs);
