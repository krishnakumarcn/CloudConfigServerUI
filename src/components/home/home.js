import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./home.css";
import HttpService from "../../services/httpService";
import ProjectModel from "./ProjectModel";
import { withRouter } from "react-router-dom";
import HeaderComponent from "../header/headerComponent";

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

  const gotoProjectInfo = id => {
    props.history.push(`project/${id}`);
  };

  return (
    <>
      <HeaderComponent props={props} />
      <div className="body-content d-flex">
        <div className="add-project">
          Add your project
          <div>
            <ProjectModel  />
          </div>
        </div>
        <div className="project-view-section">
          <div>Projects</div>
          <div className="card-wrap align-items-flex-start align-content-flex-start">
            {projects &&
              projects.map((project, index) => {
                return (
                  <div
                    className="card-item"
                    onClick={() => gotoProjectInfo(project._id)}
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

export default withRouter(Home);
