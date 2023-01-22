import { useState, useEffect } from "react";
import { GET } from "../../utils/endpoint";
import { TrendItem } from "../trend-item/TrendItem";
import "./trend-list.scss";

export const TrendList = () => {
  const [trendList, setTrendList] = useState([]);

  // GET from endpoint POSTS
  useEffect(() => {
    GET("posts").then(({ posts }) => setTrendList(posts));
  }, []);

  return (
    <div className="TrendList">
      <div className="trend-title">
        <h2>Trends for you</h2>
      </div>
      <div className="trend-text">
        {trendList.map((trend) => (
          <TrendItem key={trend.id} data={trend} />
        ))}
      </div>
    </div>
  );
};
