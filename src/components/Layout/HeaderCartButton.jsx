import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  return (
    <button className={classes.button}>
      <span>
        <CartIcon />
      </span>
      <span className={classes.text}>Your cart</span>
      <span className={classes.bagde}>3</span>
    </button>
  );
}
