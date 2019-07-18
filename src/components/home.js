import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Logo from "./../assets/logo-nissan-digital.svg";
import "./home.css";

const getHeaderComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
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
const Home = props => {
  return <>{getHeaderComponent()}</>;
};

export default Home;
