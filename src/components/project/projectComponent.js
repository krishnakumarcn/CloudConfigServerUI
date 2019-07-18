import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import HttpService from "./../../services/httpService";
import HeaderComponent from "./../header/headerComponent";
import "./projectComponent.css";
import { Card } from "react-bootstrap";

const ProjectComponent = props => {
  const [projectData, setProjectData] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [configData, setConfigData] = useState(null);

  const getConfigurationData = id => {
    HttpService.get(`configurations/${id}`)
      .then(res => {
        console.log(res.data);
        setConfigData(res.data.configurations);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    HttpService.get(`project/${props.match.params.id}`)
      .then(res => {
        setProjectData(res.data);
        res.data.documents && setSelectedId(res.data.documents[0]._id);
        res.data.documents && getConfigurationData(res.data.documents[0]._id);
      })
      .catch(err => {});
  }, [props]);

  return (
    <div className="project-screen">
      <HeaderComponent props={props} />
      {projectData === null ? (
        <div class="lds-ripple">
          <div />
          <div />
        </div>
      ) : (
        <div className="project-body">
          <h2>{projectData.name}</h2>
          <h6>PPM ID: {projectData.ppm_id}</h6>
          <h6>Your key: {projectData._id}</h6>
          <div>
            <h5>Configurations</h5>
            <div className="d-flex align-items-flex-start">
              <div className="config-wrap align-items-flex-start align-content-flex-start">
                {projectData.documents.map(doc => {
                  return (
                    <div>
                      <Card
                        className="card-doc"
                        style={
                          doc._id === selectedId
                            ? { width: "320px", backgroundColor: "grey" }
                            : { width: "320px" }
                        }
                        onClick={() => {
                          setSelectedId(doc._id);
                          getConfigurationData(doc._id);
                        }}
                      >
                        <Card.Body>
                          <Card.Title>
                            <span className="card-title">{doc.env}</span>
                          </Card.Title>
                          <Card.Text>{doc.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </div>
              <div>
                {configData ? (
                  Object.keys(configData).map(key => {
                    return (
                      <div>
                        <h6>
                          {key}: {configData[key]}
                        </h6>
                      </div>
                    );
                  })
                ) : (
                  <div> Add configuration items </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default withRouter(ProjectComponent);
