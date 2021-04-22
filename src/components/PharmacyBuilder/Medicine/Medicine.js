import classes from "./Medicine.module.css";
import askorbinka from "../../../images/askorbinka.svg";
import trimol from "../../../images/trimol.svg";
import dimidrol from "../../../images/dimidrol.svg";
import loperamid from "../../../images/loperamid.svg";
import mezim from "../../../images/mezim.svg"
import laktoG from "../../../images/laktoG.svg"

const Medicine = ({ type }) => {
  const types = {
    askorbinka: {
      backgroundImage: `url(${askorbinka})`,
      width: "40px",
      height: "40px",
      margin: "15px",
      padding: "5px",
    },
    trimol: {
      backgroundImage: `url(${trimol})`,
      width: "40px",
      height: "40px",
      margin: "15px",
      padding: "5px",
    },
    dimidrol: {
      backgroundImage: `url(${dimidrol})`,
      width: "40px",
      height: "40px",
      margin: "15px",
      padding: "5px",
    },
    loperamid: {
      backgroundImage: `url(${loperamid})`,
      width: "40px",
      height: "40px",
      margin: "15px",
      padding: "5px",
    },
    mezim: {
      backgroundImage: `url(${mezim})`,
      width: "40px",
      height: "40px",
      margin: "15px",
      padding: "5px",
    },
    laktoG: {
      backgroundImage: `url(${laktoG})`,
      width: "40px",
      height: "40px",
      margin: "15px",
      padding: "5px",
    },
  };



  return (
    <div className={classes.Medicine }  style={types[type]}></div>
  );
};
export default Medicine;

