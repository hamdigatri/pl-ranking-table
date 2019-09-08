import React from "react";
import Header from "./header";

const Layout = props => {
  return (
    <div>
      <Header
        goBack={
          props.children.props.className === "details-container" ? true : false
        }
      />
      {props.children}
    </div>
  );
};

export default Layout;
