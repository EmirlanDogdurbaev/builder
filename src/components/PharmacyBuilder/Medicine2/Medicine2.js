import classes from "./Medicine2.module.css";
import vitA from "../../../images/vitA.svg";
import vitC from "../../../images/vitC.svg";
import vitB from "../../../images/vitB.svg";
import vitD from "../../../images/vitD.svg";
import vitE from "../../../images/vitE.svg";
import vitK from "../../../images/vitK.svg";
import React from "react";

const Medicine2 = ({ type }) => {
  const types = {
    vitA: {
      backgroundImage: `url(${vitA})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },
    vitB: {
      backgroundImage: `url(${vitB})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },
    vitC: {
      backgroundImage: `url(${vitC})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },
    vitD:{
      backgroundImage: `url(${vitD})`,
          width: "50px",
          height: "50px",
          backgroundSize: "cover",
    },
    vitE:{
      backgroundImage: `url(${vitE})`,
          width: "50px",
          height: "50px",
          backgroundSize: "cover",
    },
    vitK:{
      backgroundImage: `url(${vitK})`,
          width: "50px",
          height: "50px",
          backgroundSize: "cover",
    }
  }

  return (
    <div className={classes.Medicine2 }  style={types[type] }></div>
  );
};
export default React.memo(Medicine2)

