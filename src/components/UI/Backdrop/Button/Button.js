import classes from "./Button.module.css";

const Button = (props) => {
  const className = [classes.Button];
  if (props.green) {
    className.push(classes.green);
  }
  if (props.red) {
    className.push(classes.red);
  }

  return (
    <button {...props} className={className.join(' ')}>{props.children}</button>
  );
}

export default Button;