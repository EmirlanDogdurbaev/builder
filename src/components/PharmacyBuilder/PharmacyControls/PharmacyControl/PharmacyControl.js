import classes from "./PharmacyControl.module.css";

const PharmacyControl = ({ ingredients }) => {
    const result = [];
    for (const ingredient in ingredients) {
        result.push(<PharmacyControl />);
    }
    return ( 
        <div className = {classes.PharmacyControl}>{result}</div>
    );
}
export default PharmacyControl;