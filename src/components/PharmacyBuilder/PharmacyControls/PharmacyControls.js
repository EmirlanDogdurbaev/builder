import classes from "./PharmacyControls.module.css";

const PharmacyControls = ({ingredients}) => {
  const results = [];
  for (const ingredient in ingredients) {
   results.push(ingredient);
    }
 
    return (
      <div className={classes.PharmacyControls}>
       {results}
      </div>
    );
  }
  
  export default PharmacyControls;