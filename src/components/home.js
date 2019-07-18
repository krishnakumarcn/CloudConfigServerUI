import React, { useState, useEffect } from "react";
import { Navbar, Card } from "react-bootstrap";
import Logo from "./../assets/logo-nissan-digital.svg";
import "./home.css";
import HttpService from "./../services/httpService";
import ProjectModel from "./ProjectModel";

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
  }, []);

  const gotoProjectInfo = () => {};
  return (
    <>
      {getHeaderComponent()}
      <div className="body-content d-flex">
        <div className="add-project">
          Add your project
          <div>
            <ProjectModel />
          </div>
        </div>
        <div>
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
                        <Card.Title>
                          <span className="card-title">{project.name}</span>
                        </Card.Title>
                        <Card.Text>Key: {project._id}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
