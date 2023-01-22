import { useState } from "react";
import "./new-tweet.scss";
import { SlPicture } from "react-icons/sl";
import { AiOutlineGif } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FiSmile } from "react-icons/fi";
import { HiOutlineCalendar } from "react-icons/hi";
import { RiMapPinLine } from "react-icons/ri";

export const NewTweet = ({ modalHandler }) => {
  const [tweet, setTweet] = useState("");

  const handleTweetChange = (event) => {
    setTweet(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (modalHandler) modalHandler(false);
  };

  return (
    <div className="NewTweet">
      <form onSubmit={handleSubmit}>
        <div>
          <img src="src/assets/profile_img.jpg" alt="profile-img" />
          <input
            className="input"
            type="text"
            placeholder="What's happening?"
            value={tweet}
            onChange={handleTweetChange}
          />
        </div>
        <div className="second-line">
          <div className="icons">
            <SlPicture />
            <div className="gif">
              <AiOutlineGif />
            </div>
            <AiOutlineUnorderedList />
            <FiSmile />
            <HiOutlineCalendar />
            <RiMapPinLine />
          </div>
          <input className="btn" type="submit" value="Tweet" />
        </div>
      </form>
    </div>
  );
};
