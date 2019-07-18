import React, { useState, useEffect } from "react";
import { Navbar, Card } from "react-bootstrap";
import Logo from "./../assets/logo-nissan-digital.svg";
import "./home.css";
import HttpService from "./../services/httpService";

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
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    HttpService.get("projects")
      .then(resp => {
        let projects = resp.data;
        setProjects(projects);
      })
      .catch(err => {
        console.log(err);
      });
    // setTimeout(() => {
    //   setProjects([
    //     {
    //       projectId: 1001,
    //       projectName: "Nissan Digital Warehouse",
    //       ppmId: "PPM12334"
    //     },
    //     {
    //       projectId: 10021,
    //       projectName: "Nissan Digital Warehouse",
    //       ppmId: "POLINNC2"
    //     },
    //     {
    //       projectId: 10041,
    //       projectName: "Re# First Prio",
    //       ppmId: "PPMRXYE"
    //     },
    //     {
    //       projectId: 100221,
    //       projectName: "Nissan Digital",
    //       ppmId: "SL78UI"
    //     },
    //     {
    //       projectId: 1001,
    //       projectName: "Nissan Digital Warehouse",
    //       ppmId: "PPM12334"
    //     },
    //     {
    //       projectId: 10021,
    //       projectName: "Nissan Digital Warehouse",
    //       ppmId: "POLINNC2"
    //     },
    //     {
    //       projectId: 10041,
    //       projectName: "Re# First Prio",
    //       ppmId: "PPMRXYE"
    //     },
    //     {
    //       projectId: 100221,
    //       projectName: "Nissan Digital",
    //       ppmId: "SL78UI"
    //     }
    //   ]);
    // }, 1000);
  }, []);

  const gotoProjectInfo = () => {};
  return (
    <>
      {getHeaderComponent()}
      <div className="body-content d-flex">
        <div className="add-project">Add your project</div>
        <div>
          <div> Projects </div>
          <div className="card-wrap align-items-flex-start align-content-flex-start">
            {projects &&
              projects.map((project, index) => {
                return (
                  <div
                    className="card-item"
                    onClick={gotoProjectInfo}
                    key={index}
                  >
                    <Card style={{ width: "320px" }}>
                      {/* style={{ width: "18rem" }} */}
                      <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        {/* <Card.Text>PPMID: {project.projectId}</Card.Text> */}
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}

            {/* {this.state.viewAssetList.length === 0 && (
          <div className="d-flex justify-content-center flex-1 no-results-label">
            <h2>No results found</h2>
          </div>
        )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
