import React, { Component } from 'react';
import logo from '../../img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Col, Row } from 'react-bootstrap';


class SignInForm extends Component {
    constructor(props){
        super(props);


        this.state = { username: '', password: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    //TODO Check with the database!
    handleSubmit(evt){
        evt.preventDefault();

        
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <Container className="pt-3 text-center SignUpForm">
                <Row className="d-flex justify-content-center">
                    <img src={logo} width='220px' alt="logo.png"/>
                </Row>

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
                        <button type="submit" className="w-100 submit-btn">
                            Submit!
                        </button>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default SignInForm;