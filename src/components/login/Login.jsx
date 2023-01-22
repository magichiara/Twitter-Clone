import "./login.scss";
import { useState, useEffect } from "react";
import { Navbar } from "../navbar/Navbar";
import { Fragment } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const authObj = { username: username, password: password };
    localStorage.setItem("auth-values", JSON.stringify(authObj));
    window.location.reload();
  };

  return (
    <Fragment>
      <Navbar />
      <div className="Login">
        <h3>Login</h3>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <input className="btn" type="submit" value="LOGIN" />
        </form>
      </div>
    </Fragment>
  );
};
