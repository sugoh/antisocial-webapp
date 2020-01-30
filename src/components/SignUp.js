import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col } from 'react-bootstrap/';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            setValidated: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            console.log("Failed");
        }
        this.setState({ validated: true })

    }
    render() {
        return (
            <Form className="SignUp" validated={this.validated} onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group controlId="validationCustom01">
                        <Col>
                            <Form.Label>First Name</Form.Label>

                            <Form.Control
                                placeholder="First name"
                                required
                                type="text"
                                placeholder="First name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="validationCustom02">
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Col>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" />
                        </Col>
                    </Form.Group>


                </Form.Row>
                <Col className="d-flex justify-content-between w-100">
                    <Button className="submitBtn" type="submit" >Sign Up</Button>
                </Col>
            </Form >
        )
    }
}
export default SignUp;