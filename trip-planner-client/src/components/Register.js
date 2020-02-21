import React from "react";
import axios from "axios";
import { useState } from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Register() {
  const [register, setRegister] = useState({
    registerUserName: "",
    registerPassword: ""
  });

  const onHandleChangeRegister = e => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    });
  };

  const onHandleRegisterUser = e => {
    let registerUser = {
      registerUserName: register.registerUserName,
      registerPassword: register.registerPassword
    };

    // console.log(registerUser);

    axios.post("http://localhost:5000/users/add", registerUser);
    window.location.href = "/";
  };

  return (
    <div>
      <h2>Register</h2>
      <div>
        {/* <label>Username: </label> */}
        <TextField
          onChange={onHandleChangeRegister}
          type="UserName"
          name="registerUserName"
          id="filled-basic"
          label="Username"
          variant="filled"
        />
      </div>
      <div>
        {/* <label>Password: </label>{" "} */}
        <TextField
          onChange={onHandleChangeRegister}
          type="password"
          name="registerPassword"
          id="filled-basic"
          label="Password"
          variant="filled"
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={onHandleRegisterUser}
      >
        Register
      </Button>
    </div>
  );
}
