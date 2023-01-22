import "./trend-item.scss";

export const TrendItem = ({ data }) => {
  return (
    <div className="TrendItem">
      <h4>{data.title}</h4>
      <div>
        {data.tags.map((tag, index) => (
          <p key={index}>#{tag}</p>
        ))}
      </div>
    </div>
  );
};
