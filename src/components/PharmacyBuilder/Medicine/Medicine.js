import classes from "./Medicine.module.css";
import vitA from "../../../images/vitA.svg";
import vitC from "../../../images/vitC.svg";
import vitB from "../../../images/vitB.svg";
import vitD from "../../../images/vitD.svg";
import vitE from "../../../images/vitE.svg";
import vitK from "../../../images/vitK.svg";

import React from "react";

const Medicine = ({ type }) => {
  const types = {
    vitA: {
      backgroundImage: `url(${vitA})`,
    },
    vitB: {
      backgroundImage: `url(${vitB})`,
    },
    vitC: {
      backgroundImage: `url(${vitC})`,
    },
    vitD: {
      backgroundImage: `url(${vitD})`,
    },
    vitE: {
      backgroundImage: `url(${vitE})`,
    },
    vitK: {
      backgroundImage: `url(${vitK})`,
    },
  };

  return <div className={classes.Medicine} style={types[type]}></div>;
};
export default React.memo(Medicine);
