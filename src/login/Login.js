import React, {Component, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export function Login() {
    const [count, setCount] = useState(0);
    return (
        <Form>
            <Container className="vertical-center">
                <br/>
                <br/>
                <Row className="justify-content-md-center">
                    <h2>Please provide your login details</h2>
                </Row>
                <br/>
                <br/>
                <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="4" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="text"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="4" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password"/>
                    </Form.Group>
                </Form.Row>
                <br/>
                <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="3">
                        <Button variant="primary" size="lg" block>Sign in</Button>
                    </Form.Group>
                </Form.Row>
                <Row className="justify-content-md-center">
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </Row>
            </Container>
        </Form>);
}