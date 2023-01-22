import "./modal.scss";
import { MdOutlineClose } from "react-icons/md";

export const Modal = ({ children, modalHandler, open }) => {
  return (
    <div className="Modal">
      <div className="content">
        <button onClick={modalHandler}>
          <MdOutlineClose />
        </button>
        {children}
      </div>
      <div className="overlay" onClick={modalHandler}></div>
    </div>
  );
};
