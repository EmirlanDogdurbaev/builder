import axios from "axios";
import withAxios from "../withAxios";
import classes from "./PainkillersBuilder.module.css";

const PainkillersBuilder = () => {

  return (
    <div className={classes.PainkillersBuilder}>
  
    </div>
  );
};

export default withAxios(PainkillersBuilder, axios);
