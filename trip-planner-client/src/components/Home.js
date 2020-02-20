import React from "react";
import App from "../App";
import { connect } from "react-redux";

function Home(props) {
  const isAuth = props.isAuthenticated;

  if (isAuth) {
    return <div>you are authenticated</div>;
  } else {
    return <App />;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

export default connect(mapStateToProps)(Home);
