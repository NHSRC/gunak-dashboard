import React, {Component, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import LoginService from "./LoginService";
import {useHistory} from 'react-router-dom';
import LoginState from "./LoginState";

export function Login() {
    const history = useHistory();
    const [loginState, update] = useState(LoginState.newInstance());

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const formDataObj = Object.fromEntries(formData.entries());
            LoginService.login(formDataObj.email, formDataObj.password, () => {
                history.push('/your/path')
            }, (error) => {
                loginState.loginFailed = true;
                loginState.errorMessage = error.message;
                update(LoginState.clone(loginState));
            });
        }}>
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
                        <Form.Label><b>Email</b></Form.Label>
                        <Form.Control required type="text" name="email"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="4" controlId="password">
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control required type="password" name="password"/>
                    </Form.Group>
                </Form.Row>
                <br/>
                <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="3">
                        <Button type="submit" variant="primary" size="lg" block>Sign in</Button>
                    </Form.Group>
                </Form.Row>
                {loginState.loginFailed && <Row className="justify-content-md-center">
                    <p className="text-right">{loginState.errorMessage}</p>
                </Row>}
                <Row className="justify-content-md-center">
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </Row>
            </Container>
        </Form>);
}