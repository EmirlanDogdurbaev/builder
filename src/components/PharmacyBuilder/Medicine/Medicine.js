import classes from "./Medicine.module.css";
import vitA from "../../../images/vitA.svg";
import vitC from "../../../images/vitC.svg";
import vitB from "../../../images/vitB.svg";
import vitD from "../../../images/vitD.svg";
import vitE from "../../../images/vitE.svg";
import vitK from "../../../images/vitK.svg";
import vitAF1 from "../../../images/aspirin.svg";
import vitBF1 from "../../../images/citramon.svg";
import vitCF1 from "../../../images/dimidrol.svg";
import vitDF1 from "../../../images/ketonal.svg";
import vitEF1 from "../../../images/paracetamol.svg";
import vitKF1 from "../../../images/analgin.svg";

import vitAF2 from "../../../images/aminofen.svg";
import vitBF2 from "../../../images/busfar.svg";
import vitCF2 from "../../../images/ery.svg";
import vitDF2 from "../../../images/ibuprofen.svg";
import vitEF2 from "../../../images/kineret.svg";
import vitKF2 from "../../../images/mapap.svg";
import React from "react";

const Medicine = ({ type }) => {
  const types = {
    vitA: {
      backgroundImage: `url(${vitA})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    } ,
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
    vitD: {
      backgroundImage: `url(${vitD})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },
    vitE: {
      backgroundImage: `url(${vitE})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },
    vitK: {
      backgroundImage: `url(${vitK})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },



    vitAF1: {
      backgroundImage: `url(${vitAF1})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },
    vitBF1: {
      backgroundImage: `url(${vitBF1})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },
    vitCF1: {
      backgroundImage: `url(${vitCF1})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },
    vitDF1: {
      backgroundImage: `url(${vitDF1})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },
    vitEF1: {
      backgroundImage: `url(${vitEF1})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },  
    vitKF1: {
      backgroundImage: `url(${vitKF1})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },


    vitAF2: {
      backgroundImage: `url(${vitAF2})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },
    vitBF2: {
      backgroundImage: `url(${vitBF2})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },
    vitCF2: {
      backgroundImage: `url(${vitCF2})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },
    vitDF2: {
      backgroundImage: `url(${vitDF2})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },
    vitEF2: {
      backgroundImage: `url(${vitEF2})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },  
    vitKF2: {
      backgroundImage: `url(${vitKF2})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover",
    },

  };

  return <div className={classes.Medicine} style={types[type]}></div>;
};
export default React.memo(Medicine);
