import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "./projectModel.css";
const ProjectModel = () => {
  //const [projectName,setProjectName]= useState('');
  return (
    <div className="project-add-new">
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Project Name
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            PPM_ID
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Project Description
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
export default ProjectModel;
