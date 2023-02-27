import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.hideCartHandler}></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop hideCartHandler={props.hideCartHandler} />,
        document.body
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.body
      )}
    </>
  );
};
export default Modal;
