import "./modal-btn.scss";
import { FiPlus } from "react-icons/fi";

export const ModalBtn = ({ modalHandler }) => {
  return (
    <button className="ModalBtn" onClick={modalHandler}>
      <FiPlus />
    </button>
  );
};
