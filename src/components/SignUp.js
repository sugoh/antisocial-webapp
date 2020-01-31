import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css'
import { Form, Button, Col } from 'react-bootstrap/';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            validated: false,
            setValidated: false,
            status: ""
        };
      }

    render() {
        const { status } = this.state;
        return (
            <Form className="SignUp" name="waitlist" validated={this.validated} onSubmit={this.handleSubmit} action="https://formspree.io/xbjodrgl" method="POST">
                <Form.Group controlId="validationCustom01">
                    <Col>
                        <Form.Label className="showLabel">First Name</Form.Label>
                        <input
                            className="form-control"
                            name="first_name"
                            placeholder="First name"
                            required
                            type="text"
                            placeholder=""
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
                        />
                    </Col>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Col>
                        <Form.Label className="showLabel" >Email address</Form.Label>
                        <input
                            className="form-control"
                            name="email"
                            required
                            type="email"
                            placeholder=""
                        />
                    </Col>
                </Form.Group>
                <Col className="d-flex justify-content-between w-100">
                    <Button className="submitBtn" type="submit">Join waitlist</Button>
                </Col>
            </Form >
        )
    }

    handleSubmit(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            console.log("Failed");
        }
        this.setState({ validated: true })
        const form = event.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application.json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200){
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else{
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}
export default SignUp;