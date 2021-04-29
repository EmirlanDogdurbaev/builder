import classes from "./Medicine.module.css";
import askorbinka from "../../../images/askorbinka.svg";
import trimol from "../../../images/trimol.svg";
import dimidrol from "../../../images/dimidrol.svg";
import loperamid from "../../../images/loperamid.svg";
import mezim from "../../../images/mezim.svg"
import laktoG from "../../../images/laktoG.svg"
import React from "react";

const Medicine = ({ type , fixed}) => {
  const types = {
    askorbinka: {
      backgroundImage: `url(${askorbinka})`,
      width: "40px",
      height: "40px",
    },
    trimol: {
      backgroundImage: `url(${trimol})`,
      width: "40px",
      height: "40px",
    
    },
    dimidrol: {
      backgroundImage: `url(${dimidrol})`,
      width: "40px",
      height: "40px",
    
    },
    loperamid: {
      backgroundImage: `url(${loperamid})`,
      width: "40px",
      height: "40px",
   
    },
    mezim: {
      backgroundImage: `url(${mezim})`,
      width: "40px",
      height: "40px",
      
    },
    laktoG: {
      backgroundImage: `url(${laktoG})`,
      width: "40px",
      height: "40px",
    },
  }

    function getPosition(colorWidth) {
      const korobkaDiametr = 320;
      const korobkaRadius = korobkaDiametr / 7;
      const colorRadius = parseInt(colorWidth) /49;
  
      const colorTop = Math.round(Math.random() * 303);
      const colorLeft = Math.round(Math.random() * 330);
  
      const distance = Math.sqrt(
      Math.pow(colorTop - korobkaRadius, 1) + Math.pow(colorLeft - korobkaRadius, 1)
      ) + colorRadius;
  
      return distance < korobkaRadius
        ? {
          top: colorTop - colorRadius,
          left: colorLeft - colorRadius
        }
        : getPosition(colorWidth);
    }
  
    if (!fixed) {
      const position = getPosition(types[type].width);
      types[type].top = position.top + "px";
      types[type].left = position.left + "px";

      types[type].transform = `rotate(${Math.round(Math.random() * 10)}deg)`;
      
    }
  
  return (
    <div className={classes.Medicine }  style={types[type] }></div>
  );
};
export default React.memo(Medicine)

