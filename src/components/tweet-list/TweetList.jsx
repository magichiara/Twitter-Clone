import "./tweet-list.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/endpoint";
import { TweetItem } from "../tweet-item/TweetItem";

export const TweetList = ({ filter }) => {
  const [tweetList, setTweetList] = useState([]);

  // GET from endpoint POSTS
  useEffect(() => {
    GET("posts").then(({ posts }) =>
      setTweetList(posts.filter((post) => post.title.includes(filter)))
    );
  }, [filter]);

  return (
    <div className="TweetList">
      {tweetList.map((tweet) => (
        <TweetItem data={tweet} key={tweet.id} />
      ))}
    </div>
  );
};
