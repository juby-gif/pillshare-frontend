import React from 'react';
import { Form, Col, Container, Button, InputGroup, Row, FormControl, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

 
interface FuncProps {
    email : string;
    password : string;
    response : string;
    message : string;
    validated : boolean;
    success ?: boolean;
    error ?: boolean;
    isLoading : boolean;
    variant ?: string;
    onLoginClick: (event: React.SyntheticEvent) => void;
    onEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onRegisterClick: (event: React.SyntheticEvent) => void;
}

const LoginComponent = (props: FuncProps) : JSX.Element => {
    const { email,
            password,
            // response,
            variant,
            success,
            message,
            error,
            validated,
            isLoading,
            onLoginClick,
            onEmailChange,
            onPasswordChange,
    } = props;
return (
<React.Fragment>
    <Container style={{backgroundColor:"#fff",width:"100%",height:"100vh"}} fluid className="p-5">
        <Row>
            <Col>
            </Col>
            <Col sm="8" md="9" xs="12" lg="4" className="login p-2" style={{backgroundColor:"#f0f5f2",border:"2px solid #fff", borderWidth: ".2rem .2rem .2rem",borderRadius: "18px 18px 18px 18px"}}>
                <Row>
                    <Col className="mt-5 mb-3 d-flex justify-content-center">
                        <img alt="logo" src={logo} draggable="false" width="140rem"/>
                    </Col>
                </Row>


                {/* Alert for showing error and success messages */}

                <Row className="mb-2 m-1 d-flex justify-content-center">
                    {error && (<Alert variant={variant}>
                    <FontAwesomeIcon style={{fontSize:"1.4rem",color:"red"}} className="mr-2" icon={faExclamationTriangle} />{message}
                    </Alert>)}

                    {success && (<Alert variant={variant}>
                    <FontAwesomeIcon style={{fontSize:"1.8rem"}} className="mr-2" icon={faThumbsUp} /><span style={{font: "300 1.2rem/150% Raleway"}} className="loading">{message}</span>
                    </Alert>)}
                </Row>

                 {/* Alert for showing error and success messages */}


                <Form className="mb-3" noValidate validated={validated} >
                    <Form.Row className="d-flex justify-content-center">
                        <Form.Group as={Col} xs="7" md="5" lg="7">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <FormControl id="inlineFormInputGroup" type="email" placeholder="email" value={email} onChange={onEmailChange} required />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a email.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="d-flex justify-content-center">
                        <Form.Group as={Col} xs="7" md="5" lg="7">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChange} required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid password.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    {/* <Form.Row className="d-flex justify-content-center">
                        <Form.Check
                            type="checkbox"
                            id="autoSizingCheck"
                            className="mt-2 mb-4"
                            label="Remember me"
                        />
                    </Form.Row> */}
                    <Form.Row className="d-flex justify-content-center mt-3">
                        <Button
                            style={{ width:"7rem", backgroundColor:"#036599", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}} 
                            disabled={isLoading}
                            onClick={!isLoading ? onLoginClick : undefined}
                            className="mb-2">
                            {isLoading ? 'Logging in...' : 'Login'}
                        </Button>
                    </Form.Row>
                    <Form.Row className="d-flex justify-content-center">
                        {!isLoading && (<Link to="/register" style={{color:"#036599"}} className="mb-2" >
                            New to Pillshare?
                        </Link>)}
                        {isLoading && (<Link to="/register" style={{color:"rgba(3, 101, 153, 0.274)"}} className="mb-2" >
                            New to Pillshare?
                        </Link>)}
                    </Form.Row>
                </Form>
            </Col>
            <Col></Col>
        </Row>
    </Container>
</React.Fragment>
)
}
export default LoginComponent;