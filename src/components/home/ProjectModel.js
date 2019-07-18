import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "./projectModel.css";
import HttpService from "../../services/httpService";

const ProjectModel = () => {
  const [projectName, setProjectName] = useState("");
  const [ppm_id, setPpmId] = useState("");
  const [projectDescription, setProjectDecription] = useState("");
  const handleProjectNameOnChange = event => {
    setProjectName(event.target.value);
  };
  const handlePpmIdOnChange = event => {
    setPpmId(event.target.value);
  };
  const handleDescriptionOnChange = event => {
    setProjectDecription(event.target.value);
  };
  const handleSubmit = () => {
    console.log("submitting");
    // HttpService.post("project", {
    //   name: { projectName },
    //   ppm_id: { ppm_id },
    //   description: { projectDescription }
    // })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };
  return (
    <div className="project-add-new">
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Project Name
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              value={projectName}
              onChange={event => {
                handleProjectNameOnChange(event);
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            PPM_ID
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              value={ppm_id}
              onChange={event => {
                handlePpmIdOnChange(event);
              }}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Project Description
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              value={projectDescription}
              onChange={event => {
                handleDescriptionOnChange(event);
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button
              type="submit"
              onClick={() => {
                handleSubmit();
              }}
            >
              Submit
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
export default ProjectModel;
