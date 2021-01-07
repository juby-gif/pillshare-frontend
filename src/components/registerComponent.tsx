import React from 'react';
import { Form, Col, Container, Button, InputGroup, Row, Alert, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../img/404-logo.png';
import img from '../img/img1.png';


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
passwordErrorAlert : boolean;
passwordSuccessAlert : boolean;
registerSuccess : boolean;
registerFailure : boolean;
isLoading : boolean;
onFirstNameChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
onMiddleNameChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
onLastNameChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
onEmailChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
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
        message,
        registerSuccess,
        registerFailure,
        validated,
        isLoading,
        passwordErrorAlert,
        passwordSuccessAlert,
        onFirstNameChange,
        onMiddleNameChange,
        onLastNameChange,
        onUsernameChange,
        onEmailChange,
        onPasswordChange,
        onRetypePasswordChange,
        onRegisterClick,
        onChangeCheck,
     } = props;
    return (
    <React.Fragment>
        {registerSuccess && (
        <Container style={{position:"absolute"}} className="alert-registration p-1" fluid>
           <Alert variant="success">{message}</Alert>
        </Container>
        )}
        {registerFailure && (
        <Container style={{position:"absolute"}} className="alert-registration p-1" fluid>
            <Alert variant="danger">{message}</Alert>
        </Container>
        )}
        <Container className="p-5" fluid>
            <Col>
                <Row>
                    <CardGroup style={{margin:"auto"}}>
                        <Card className="login" style={{backgroundImage:`url(${img})`, backgroundSize:"cover"}} >
                            <Row className="mt-5 mb-5">
                                <Col style={{marginTop:"7rem",verticalAlign:"middle", textAlign:"center"}}>
                                    <img alt="logo" draggable="false" style={{objectFit:"contain"}} src={logo}  width="89rem"/>
                                    <h3 style={{color:" #036599",fontSize:"2.6rem", fontWeight:"bolder"}} className="display-1">PILLSHARE</h3>
                                    <span className="display-1" style={{color:" #fff",textTransform:"uppercase",fontSize:"0.8rem",textAlign:"center"}}>Daily Medication Tracker</span>
                                </Col>
                            </Row>
                        </Card>
                        <Card style={{backgroundColor:"rgba(0,0,0,0.03)"}} className="p-4 login">
                            <Col>
                                <Form noValidate validated={validated}>
                                    <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="validationFirstName">
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="First name"
                                                value={firstName}
                                                onChange={onFirstNameChange}
                                            />
                                            {/* <Form.Control.Feedback type="invalid">
                                                    Please provide your first name.
                                            </Form.Control.Feedback> */}
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationMiddleName">
                                            <Form.Label>Middle name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Middle name"
                                                value={middleName}
                                                onChange={onMiddleNameChange}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationLastName">
                                            <Form.Label>Last name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Last name"
                                                value={lastName}
                                                onChange={onLastNameChange}
                                            />
                                            {/* <Form.Control.Feedback type="invalid">
                                                    Please provide your last name.
                                                </Form.Control.Feedback> */}
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
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
                                                {/* <Form.Control.Feedback type="invalid">
                                                    Please choose a username.
                                                </Form.Control.Feedback> */}
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                placeholder="Email" 
                                                value={email}
                                                onChange={onEmailChange}
                                                required 
                                            />
                                            {/* <Form.Control.Feedback type="invalid">
                                                Please provide your email.
                                            </Form.Control.Feedback> */}
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="validationPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control 
                                                type="password" 
                                                placeholder="Password" 
                                                value={password}
                                                onChange={onPasswordChange}
                                                required 
                                            />
                                            {/* <Form.Control.Feedback type="invalid">
                                                Please provide a valid password.
                                            </Form.Control.Feedback> */}
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="validationReTypePassword">
                                            <Form.Label>Re-type Password</Form.Label>
                                            <Form.Control 
                                                type="password" 
                                                placeholder="Re-type Password" 
                                                value={retypePassword}
                                                onChange={onRetypePasswordChange}
                                                required 
                                            />
                                            {/* <Form.Control.Feedback type="invalid">
                                                Please retype your password.
                                            </Form.Control.Feedback> */}
                                        </Form.Group>
                                        {passwordSuccessAlert && (
                                        <Col sm="11" md="7" lg="4">
                                            <Alert style={{width:"20rem"}} variant="success">Password Matched</Alert>
                                        </Col>)}
                                        {passwordErrorAlert && (
                                        <Col sm="11" md="7" lg="4">
                                            <Alert variant="danger">Passwords do not match</Alert>
                                        </Col>)}
                                    </Form.Row>
                                    <Form.Group>
                                        <Form.Check
                                            label="I Agree to Terms and conditions"
                                            feedback="You must agree before submitting."
                                            checked={checkedStatus}
                                            onChange={onChangeCheck}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            This field is required.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button 
                                        size="lg" style={{ width:"14rem", backgroundColor:"#036599", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}}
                                        disabled={isLoading}
                                        onClick={!isLoading ? onRegisterClick : undefined}
                                        className="mb-2">
                                        {isLoading ? 'Getting started...' : 'Get Started!'}
                                    </Button><br /><br />
                                    Already have an account? <Link style={{textDecoration:"none"}} to="/login">Sign-in</Link>
                                </Form>
                            </Col>
                        </Card>
                    </CardGroup>
                </Row>
            </Col>
        </Container>
    </React.Fragment>
    );
}
export default RegisterComponent;