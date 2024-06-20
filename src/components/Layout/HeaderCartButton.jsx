import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";

import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>
        <CartIcon />
      </span>
      <span className={classes.text}>Your cart</span>
      <span className={classes.bagde}>{numberOfItems}</span>
    </button>
  );
}
