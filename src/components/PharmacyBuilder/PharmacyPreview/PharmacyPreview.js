  import Medicine from "../Medicine/Medicine";
  import classes from "./PharmacyPreview.module.css";

const PharmacyPreview = ({ ingredients }) => {
    const result =[];

    for (const ingredient in ingredients) {
        for (let i = 0; i < ingredients[ingredient]; i++) {
            result.push(<Medicine type = {ingredient} />)
        }
    }

    return ( 
        <div className = {classes.PharmacyPreview}>
            <div className={classes.ingredients}>
                {result}
            </div>
        </div>
    );
}
 
export default PharmacyPreview;
