import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";

import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const numberOfItems = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span>
        <CartIcon />
      </span>
      <span className={classes.text}>Your cart</span>
      <span className={classes.bagde}>{numberOfItems}</span>
    </button>
  );
}
