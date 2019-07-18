import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Logo from "./../../assets/logo-nissan-digital.svg";
import { withRouter } from "react-router-dom";
const HeaderComponent = props => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand
        onClick={() => {
          console.log(props);
          props.history.push(`/home`);
        }}
        className="img-logo"
      >
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        <span className="header-title">Cloud Config Server</span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default withRouter(HeaderComponent);
