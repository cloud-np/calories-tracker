import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SingUpForm.css';
import logo from '../../img/logo.png';
import { Form, Container, Col, Row } from 'react-bootstrap';


class SingUpForm extends Component {
    constructor(props){
        super(props);

        this.state = { username: '', email: '', password: '', confirmPassword: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // TODO: Setup here the firebase 
    handleSubmit(event){
        console.log(event.currentTarget);
        event.preventDefault();
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <Container className="pt-3 text-center SignUpForm">
                <Row className="d-flex justify-content-center">
                    <img src={logo} width='220px' alt="logo.png"/>
                </Row>
                {/* <h2 className="mt-2 logo-text">Cloud Fitness</h2> */}
                <Row className="d-flex justify-content-center">
                    <Form className="mt-3 form-width" onSubmit={this.handleSubmit}>
                        <Form.Row className="mt-2">
                            <Form.Group as={Col}>
                                <Form.Control onChange={this.handleChange} type="text" placeholder="Username" name="username" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row className="mt-2">
                            <Form.Group as={Col}>
                                <Form.Control onChange={this.handleChange} type="password" placeholder="Password" name="password"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row className="mt-2">
                            <Form.Group as={Col}>
                                <Form.Control onChange={this.handleChange} type="password" placeholder="Confirm password" name="confirmPassword"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row className="mt-2">
                            <Form.Group as={Col} controlId="formBasicEmail">
                                <Form.Control onChange={this.handleChange} type="email" placeholder="E-mail address" name="email"/>
                                <Form.Text className="text-muted">
                                    We are not going to spam it.
                                </Form.Text>
                            </Form.Group>
                        </Form.Row>

                        <button type="submit" className="w-100 submit-btn">
                            Submit!
                        </button>
                    </Form>
                </Row>
                <div className="text-white">
                    <h1>{this.state.weight}</h1>
                    <h1>{this.state.height}</h1>
                </div>
            </Container>
        );
    }
}

export default SingUpForm;