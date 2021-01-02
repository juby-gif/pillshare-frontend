import React from 'react';
import { Form, Col, Container, Button, InputGroup, Row, Image } from 'react-bootstrap';

import logo from '../img/logo.png';


interface IProps {
firstName : string;
middleName : string;
lastName : string;
username : string;
email : string;
password : string;
retypePassword : string;
checkedStatus : boolean;
response : string;
message : string;
validated : boolean;
onFirstNameChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
onMiddleNameChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
onLastNameChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
onEmailChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
onSignInClick: (event: React.SyntheticEvent) => void;
onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
onRetypePasswordChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
onRegisterClick: (event: React.SyntheticEvent) => void;
onChangeCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RegisterComponent = (props:IProps): JSX.Element =>  {
    const { 
        firstName,
        middleName,
        lastName,
        username,
        email,
        password,
        retypePassword,
        checkedStatus,
        // response,
        // message,
        // validated,
        onFirstNameChange,
        onMiddleNameChange,
        onLastNameChange,
        onUsernameChange,
        onEmailChange,
        onSignInClick,
        onPasswordChange,
        onRetypePasswordChange,
        onRegisterClick,
        onChangeCheck,
     } = props;
    return (
    <React.Fragment>
        <Container className="d-flex justify-content-center mt-5 p-5" fluid>
            <Col style={{border:"2px solid #000", borderWidth: ".2rem .2rem .2rem",borderRadius: "18px 18px 18px 18px"}}>
                <Row>
                    <Col style={{display:"block",marginBottom: "-4px",position: "relative"}} className="p-3">
                        <Row>
                            <Col>
                                <Image className="mt-3 ml-3" src={logo} fluid width="80rem"/>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center mt-5">
                            <h3>Welcome back to Pillshare!</h3>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col className="d-flex justify-content-center mt-3"><Button type="button" onClick={onSignInClick}>Sign-in</Button></Col>
                            <Col></Col>
                        </Row>
                    </Col>
                    <Col className="p-3" style={{borderLeft:"2px solid #000",display:"block"}}>
                        <Form noValidate validated={true}>
                            <Form.Row>
                                <Form.Group as={Col} md="4" controlId="validationFirstName">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        value={firstName}
                                        onChange={onFirstNameChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationMiddleName">
                                    <Form.Label>Middle name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Middle name"
                                        value={middleName}
                                        onChange={onMiddleNameChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationLastName">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Last name"
                                        value={lastName}
                                        onChange={onLastNameChange}
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
                                            value={username}
                                            onChange={onUsernameChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} md="5" controlId="validationEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Email" 
                                        value={email}
                                        onChange={onEmailChange}
                                        required 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide your email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="5" controlId="validationPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Password" 
                                        value={password}
                                        onChange={onPasswordChange}
                                        required 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="5" controlId="validationReTypePassword">
                                    <Form.Label>Re-type Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Re-type Password" 
                                        value={retypePassword}
                                        onChange={onRetypePasswordChange}
                                        required 
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Check
                                    label="I Agree to Terms and conditions"
                                    feedback="You must agree before submitting."
                                    checked={checkedStatus}
                                    onChange={onChangeCheck}
                                    required
                                />
                            </Form.Group>
                            <Button type="submit" onClick={onRegisterClick}>Register</Button>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Container>
    </React.Fragment>
    );
}
export default RegisterComponent;