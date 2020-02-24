import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Baselayout(props) {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
