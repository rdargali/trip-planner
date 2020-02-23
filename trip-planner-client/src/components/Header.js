import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";



export default function Header(props) {
  return (
    <div>
      <div>
        {/* <ul className="menuBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/view">View Trips</Link>
        </li>
        <li>
          <Link to="/add">Add Trip</Link>
        </li>
      </ul> */}
      </div>
    </div>
  );
}
