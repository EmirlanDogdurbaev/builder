import classes from "./Medicine.module.css";
import askorbinka from "../../../images/askorbinka.svg";
import trimol from "../../../images/trimol.svg";
import dimidrol from "../../../images/dimidrol.svg";
import loperamid from "../../../images/loperamid.svg";
import mezim from "../../../images/mezim.svg";
import laktoG from "../../../images/laktoG.svg";
import React from "react";

const Medicine = ({ type }) => {
  const types = {
    loperamid: {
      backgroundImage: `url(${loperamid})`,
      width: "60px",
      height: "60px",
      margin: "10px 15px",
      backgroundSize:"cover",
    },
    askorbinka: {
      backgroundImage: `url(${askorbinka})`,
      width: "60px",
      height: "60px",
      margin: "10px 15px",
    },
    trimol: {
      backgroundImage: `url(${trimol})`,
      width: "60px",
      height: "60px",
      margin: "10px 15px",
    },
    dimidrol: {
      backgroundImage: `url(${dimidrol})`,
      width: "60px",
      height: "60px",
      margin: "10px 15px",
    },
    mezim: {
      backgroundImage: `url(${mezim})`,
      width: "60px",
      height: "60px",
      margin: "10px 15px",
    },
    laktoG: {
      backgroundImage: `url(${laktoG})`,
      width: "60px",
      height: "60px",
      margin: "10px 15px",
    },
  };
  return <div className={classes.Medicine} style={types[type]}></div>;
};
export default React.memo(Medicine);
