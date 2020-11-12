import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

export default class Login extends Component {
    render() {
        return (
            <form>
                <Container className="vertical-center">
                    <Row>
                        <br/>
                        <br/>
                    </Row>
                    <Row className="justify-content-md-center">
                        <h2>Please provide your login details</h2>
                        <br/>
                        <br/>
                        <br/>
                    </Row>
                    <Row className="justify-content-md-center">
                        <div className="form-group">
                            <label><b>Email</b></label>
                            <Form.Control type="email" size="lg"/>
                        </div>
                    </Row>
                    <Row className="justify-content-md-center">
                        <div className="form-group">
                            <label><b>Password</b></label>
                            <Form.Control type="password" size="lg"/>
                        </div>
                    </Row>
                    <Row className="justify-content-md-center">
                        <button type="submit" className="btn btn-dark btn-lg">Sign in</button>
                    </Row>
                    <Row className="justify-content-md-center">
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </Row>
                </Container>

            </form>
        );
    }
}