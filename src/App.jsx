import "./App.css";
import { Fragment, useState, useEffect } from "react";
import { FriendList } from "./components/friend-list/FriendList";
import { NewTweet } from "./components/new-tweet/NewTweet";
import { TweetList } from "./components/tweet-list/TweetList";
import { TrendList } from "./components/trend-list/TrendList";
import { Navbar } from "./components/navbar/Navbar";
import { Modal } from "./components/modal/Modal";
import { Searchbar } from "./components/searchbar/Searchbar";
import { FriendDetails } from "./components/friend-details/FriendDetails";
import { Login } from "./components/login/Login";

const App = () => {
  const [auth, setAuth] = useState();
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState("");
  const [modalContent, setModalContent] = useState("NewTweet");

  const modalHandler = () => {
    setModal((prevstate) => !prevstate);
    setModalContent("NewTweet");
  };

  useEffect(() => {
    const authValues = localStorage.getItem("auth-values");
    setAuth(JSON.parse(authValues));
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem("auth-values");
    window.location.reload();
  };

  return auth ? (
    <div className="App">
      <Navbar
        modalHandler={modalHandler}
        auth={auth}
        logOutHandler={logOutHandler}
      />
      <div className="wrapper">
        <div className="left-section">
          <FriendList setModalContent={setModalContent} setModal={setModal} />
        </div>
        <div className="main-section">
          <NewTweet />
          <Searchbar setFilter={setFilter} />
          {modal && (
            <Modal
              children={
                modalContent === "NewTweet" ? (
                  <NewTweet modalHandler={modalHandler} />
                ) : (
                  <FriendDetails id={modalContent} />
                )
              }
              modalHandler={modalHandler}
            />
          )}
          <TweetList filter={filter} />
        </div>
        <div className="right-section">
          <TrendList />
        </div>
      </div>
    </div>
  ) : (
    <Fragment>
      <Login />
    </Fragment>
  );
};

export default App;
