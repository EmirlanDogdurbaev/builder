import classes from "./Medicine2.module.css";
import askorbinka from "../../../images/askorbinka.svg";
import trimol from "../../../images/trimol.svg";
import dimidrol from "../../../images/dimidrol.svg";
import loperamid from "../../../images/loperamid.svg";
import mezim from "../../../images/mezim.svg"
import laktoG from "../../../images/laktoG.svg"

const Medicine2 = ({ type }) => {
  const types = {
    askorbinka: {
      backgroundImage: `url(${askorbinka})`,
      width: "30px",
      height: "30px",
      margin: "10px 15px",
    },
    trimol: {
      backgroundImage: `url(${trimol})`,
      width: "30px",
      height: "30px",
      margin: "10px 15px",
    },
    dimidrol: {
      backgroundImage: `url(${dimidrol})`,
      width: "30px",
      height: "30px",
      margin: "10px 15px",
    },
    loperamid: {
      backgroundImage: `url(${loperamid})`,
      width: "30px",
      height: "30px",
      margin: "10px 15px",
    },
    mezim: {
      backgroundImage: `url(${mezim})`,
      width: "30px",
      height: "30px",
      margin: "10px 15px",
    },
    laktoG: {
      backgroundImage: `url(${laktoG})`,
      width: "30px",
      height: "30px",
      margin: "10px 15px",
    },
  };



  return (
    <div className={classes.Medicine2 }  style={types[type]}></div>
  );
};
export default Medicine2;
