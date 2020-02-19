import React from "react";
import "./App.css";

function App() {
  return (
    <div id="appWrapper">
      <div className="logIn">
        <h2>Log in</h2>
        <div>
          <span>Username:</span>
          <input type="text" name="logInUserName" />
        </div>
        <div>
          <span>Password:</span>
          <input type="password" name="logInPassword" />
        </div>
      </div>

      <div className="register">
        <h2>Register</h2>
        <div>
          <span>Username:</span>
          <input type="UserName" name="registerUserName" />
        </div>
        <div>
          <span>Password:</span>{" "}
          <input type="password" name="registerPassword" />
        </div>
      </div>
    </div>
  );
}

export default App;
