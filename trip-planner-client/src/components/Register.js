import React from "react";
import axios from "axios";
import { useState } from "react";

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

    axios
      .post("http://localhost:5000/users/add", registerUser)
      .then(res => console.log(res.data));
  };

  return (
    <div>
      <div className="register">
        <h2>Register</h2>
        <div>
          <label>Username: </label>
          <input
            onChange={onHandleChangeRegister}
            type="UserName"
            name="registerUserName"
          />
        </div>
        <div>
          <label>Password: </label>{" "}
          <input
            onChange={onHandleChangeRegister}
            type="password"
            name="registerPassword"
          />
        </div>
        <button onClick={onHandleRegisterUser}>Register</button>
      </div>
    </div>
  );
}
