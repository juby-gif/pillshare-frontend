import React from 'react';
import { Form, Col, Container, Button, InputGroup, Row, Image } from 'react-bootstrap';

import logo from '../img/logo.png';


interface IProps {
    
}
const RegisterComponent = (props:IProps): JSX.Element =>  {
    return (
    <React.Fragment>
        <Container className="d-flex justify-content-center mt-5 p-5" fluid>
            <Col style={{border:"2px solid #000", borderWidth: ".2rem .2rem .2rem",borderRadius: "18px 18px 18px 18px"}}>
                <Row>
                    <Col className="p-3">
                        <Row>
                            <Col>
                                <Image className="mt-3 ml-3" src={logo} fluid width="80rem"/>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center mt-5">
                            <h3 className="mb=0">Welcome back to Pillshare!</h3>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col className="d-flex justify-content-center mt-3"><Button type="button">Sign-in</Button></Col>
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col className="p-3" style={{borderLeft:"2px solid #000"}}>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} md="4" controlId="validationFirstName">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        defaultValue="First Name"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationMiddleName">
                                    <Form.Label>Middle name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Middle name"
                                        defaultValue="Middle Name"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationLastName">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Last name"
                                        defaultValue="Last Name"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                    <Form.Label>Username</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="Username"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} md="5" controlId="validationEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Email" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide your email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="5" controlId="validationPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="5" controlId="validationReTypePassword">
                                    <Form.Label>Re-type Password</Form.Label>
                                    <Form.Control type="password" placeholder="Re-type Password" required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Check
                                    required
                                    label="I Agree to Terms and conditions"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                            <Button type="submit">Register</Button>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Container>
    </React.Fragment>
    );
}
export default RegisterComponent;