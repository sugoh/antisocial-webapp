import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Modal.css";
import { Form, Button, Col } from "react-bootstrap/";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      validated: false,
      setValidated: false,
      status: "",
      formFields: {
        first_name: "",
        last_name: "",
        email: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(state => {
      return {
        ...state,
        formFields: {
          ...state.formFields,
          [name]: value
        }
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("Failed");
    }
    this.setState({ validated: true });

    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application.json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        this.setState({ status: "SUCCESS" });
        this.setState({
          formFields: {
            first_name: "",
            last_name: "",
            email: ""
          }
        });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    const data = JSON.stringify(this.state.formFields);
    xhr.send(data);
  }

  render() {
    return (
      <Form
        className="SignUp"
        name="waitlist"
        validated={this.validated}
        onSubmit={this.handleSubmit}
        action="https://formspree.io/xbjodrgl"
        method="POST"
      >
        <Form.Group controlId="validationCustom01">
          <Col>
            <Form.Label className="showLabel">First Name</Form.Label>
            <input
              className="form-control"
              name="first_name"
              placeholder="First name"
              required
              type="text"
              value={this.state.formFields.firstName}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group controlId="validationCustom02">
          <Col>
            <Form.Label className="showLabel">Last Name</Form.Label>
            <input
              className="form-control"
              name="last_name"
              required
              type="text"
              placeholder=""
              value={this.state.formFields.lastName}
              onChange={this.handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Col>
            <Form.Label className="showLabel">Email address</Form.Label>
            <input
              className="form-control"
              name="email"
              required
              type="email"
              placeholder=""
              value={this.state.formFields.email}
              onChange={this.handleChange}
            />
          </Col>
        </Form.Group>
        <Col className="d-flex justify-content-between w-100">
          <Button className="submitBtn" type="submit">Join waitlist</Button>
        </Col>
      </Form>
    );
  }
}
export default SignUp;
