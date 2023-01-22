import "./friend-details.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/endpoint";

export const FriendDetails = ({ id }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    GET(`users/${id}`).then((data) => setDetails(data));
  }, []);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="FriendDetails">
      <h5 className="username">@ {details?.username}</h5>
      <img src="https://picsum.photos/300/450" alt="user-image" />
    </div>
  );
};
