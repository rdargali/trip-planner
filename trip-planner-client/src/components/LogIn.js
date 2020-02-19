import React from "react";
import { useState } from "react";

export default function LogIn() {
  const [logIn, setLogIn] = useState({
    logInUserName: "",
    logInPassword: ""
  });

  const onHandleChangeLogIn = e => {
    setLogIn({
      ...logIn,
      [e.target.name]: e.target.value
    });
  };

  const onHandleLogInUser = e => {
    let logInUser = {
      username: logIn.logInUserName,
      password: logIn.logInPassword
    };

    console.log(logInUser);
  };

  return (
    <div>
      <div className="logIn">
        <h2>Log in</h2>
        <div>
          <label>Username: </label>
          <input
            onChange={onHandleChangeLogIn}
            type="text"
            name="logInUserName"
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            onChange={onHandleChangeLogIn}
            type="password"
            name="logInPassword"
          />
        </div>
        <button onClick={onHandleLogInUser}>Log In</button>
      </div>
    </div>
  );
}
