import "./searchbar.scss";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export const Searchbar = ({ setFilter }) => {
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setFilter(input);
    setInput("");
  };

  return (
    <div className="Searchbar">
      <form id="form" onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          placeholder="Search Twitter"
          onChange={inputHandler}
        />
        <button form="form" type="submit">
          <BiSearch />
        </button>
      </form>
    </div>
  );
};
