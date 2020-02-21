import React from "react";
import { useState } from "react";
import "../App.css";
import { connect } from "react-redux";
import axios from "axios";
import { setAuthenticationHeader } from "../utils/authenticate";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function LogIn() {
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

  const onHandleLogInUser = () => {
    let logInUser = {
      username: logIn.logInUserName,
      password: logIn.logInPassword
    };

    axios.post("http://localhost:5000/users/login", logInUser).then(res => {
      const token = res.data.token;

      localStorage.setItem("jsonwebtoken", token);
      setAuthenticationHeader(token);
    });
  };

  return (
    <div>
      <h2>Log in</h2>
      <div>
        {/* <label>Username: </label> */}
        <TextField
          onChange={onHandleChangeLogIn}
          type="text"
          name="logInUserName"
          id="filled-basic"
          label="Username"
          variant="filled"
        />
      </div>
      <div>
        {/* <label>Password: </label> */}
        <TextField
          onChange={onHandleChangeLogIn}
          type="password"
          name="logInPassword"
          id="filled-basic"
          label="Password"
          variant="filled"
        />
      </div>
      <Button variant="contained" color="primary" onClick={onHandleLogInUser}>
        Log In
      </Button>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: () => dispatch({ type: "LOG_IN" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
