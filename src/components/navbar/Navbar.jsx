import "./navbar.scss";
import { TiSocialTwitter } from "react-icons/ti";
import { RiHome7Line } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
import { BiEnvelope } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { ModalBtn } from "../../atoms/modal-btn/ModalBtn";

export const Navbar = ({ modalHandler, auth, logOutHandler }) => {
  return (
    <div className="Navbar">
      <div className="logo">
        <TiSocialTwitter />
      </div>
      <div className="icons">
        <RiHome7Line />
        <BiHash />
        <BiSearch />
        <HiOutlineBell />
        <BiEnvelope />
        <BiBookmark />
        <RiFileList2Line />
        <HiOutlineUser />
        <TbDotsCircleHorizontal />
      </div>
      <div className="latest">
        <div className="tweet">
          <ModalBtn modalHandler={modalHandler} />
        </div>
        <div className="pic" onClick={logOutHandler}>
          {auth && <img src="src/assets/profile_img.jpg" alt="profile-img" />}
        </div>
      </div>
    </div>
  );
};
