import "./friends-list.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/endpoint";
import { FriendItem } from "../friend-item/FriendItem";

export const FriendList = ({ setModalContent, setModal }) => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    GET("users").then((data) => setFriendsList(data.users));
  }, []);

  return (
    <div className="FriendList">
      {friendsList.map((friend) => (
        <FriendItem
          data={friend}
          key={friend.id}
          setModalContent={setModalContent}
          setModal={setModal}
        />
      ))}
    </div>
  );
};
