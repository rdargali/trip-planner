import React from "react";
import "./App.css";
import Login from "./components/LogIn";
import Register from "./components/Register";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around"
      }}
    >
      <Login />

      <Register />
    </div>
  );
}
