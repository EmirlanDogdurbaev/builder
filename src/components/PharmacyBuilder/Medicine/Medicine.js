
import askorbinka from "../../../images/askorbinka.svg"
import trimol from "../../../images/trimol.svg"
import dimidrol from "../../../images/dimidrol.svg"
import classes  from "./Medicine.module.css"
 const Medicine = ({type}) => {
     const types ={
        askorbinka:{backgroundImage: `url(${askorbinka})`, width:"60px" , height:"60px" , margin:"10px 15px"},
        trimol:{backgroundImage: `url(${trimol})`, width:"60px" , height:"60px",margin:"10px 15px"},
        dimidrol:{backgroundImage: `url(${dimidrol})`, width:"60px" , height:"60px",margin:"10px 15px"},
     }


     return (
     <div className={classes.Medicine} style={types[type]}>

     </div>)};
 export default Medicine;
