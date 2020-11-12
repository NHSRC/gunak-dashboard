import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default class Login extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <form>
                        <h3>Log in</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email"/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"/>
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>
                </Row>
            </Container>
        );
    }
}