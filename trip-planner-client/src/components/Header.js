import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="menuBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/view">View Trips</Link>
        </li>
        <li>
          <Link to="/add">Add Trip</Link>
        </li>
      </ul>
    </div>
  );
}
