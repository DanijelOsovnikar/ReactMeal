import classes from "./Modal.module.css";
import ReactDom from "react-dom";

export default function Modal(props) {
  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onHideCart={props.onClick} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

const Backdrop = (props) => {
  return <div onClick={props.onHideCart} className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
