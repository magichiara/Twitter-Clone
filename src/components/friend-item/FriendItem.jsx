import "./friend-item.scss";

export const FriendItem = ({ data, setModalContent, setModal }) => {
  // Destructuring assignment
  const { image, firstName, lastName, address, id } = data;

  const friendModalHandler = () => {
    setModalContent(id);
    setModal(true);
  };

  return (
    <div className="FriendItem" onClick={friendModalHandler}>
      <img src={image} alt="user-img" />
      <div>
        <h4>{`${firstName} ${lastName}`}</h4>
        <h5>{address.city}</h5>
      </div>
    </div>
  );
};
