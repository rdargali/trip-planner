import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import FlightIcon from "@material-ui/icons/Flight";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Tabs indicatorColor="primary" textColor="primary" centered>
          <Link onClick={handleChange} to="/">
            <Tab icon={<HomeIcon />} />
          </Link>

          <Link onClick={handleChange} to="/view">
            <Tab icon={<FlightIcon />} />
          </Link>
          <Link onClick={handleChange} to="/add">
            <Tab icon={<AddIcon />} />
          </Link>
        </Tabs>
      </Paper>
    </div>
  );
}
