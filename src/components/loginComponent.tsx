import React from 'react';
import { Form, Col, Container, Button, InputGroup, Row, FormControl,Image, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

 
interface FuncProps {
    username : string;
    password : string;
    response : string;
    message : string;
    validated : boolean;
    success ?: boolean;
    error ?: boolean;
    variant ?: string;
    onLoginClick: (event: React.SyntheticEvent) => void;
    onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onRegisterClick: (event: React.SyntheticEvent) => void;
}

const LoginComponent = (props: FuncProps) : JSX.Element => {
    const { username,
            password,
            // response,
            variant,
            success,
            message,
            error,
            validated,
            onLoginClick,
            onUsernameChange,
            onPasswordChange,
    } = props;
return (
<React.Fragment>
    <Container style={{backgroundColor:"#f5f5dc",width:"100%",height:"100vh"}} fluid className="p-5">
        <Row>
            <Col>
            </Col>
            <Col sm="8" md="9" xs="12" lg="4" className="login p-2" style={{backgroundColor:"#f0f5f2",border:"2px solid #fff", borderWidth: ".2rem .2rem .2rem",borderRadius: "18px 18px 18px 18px"}}>
                <Row>
                    <Col className="mt-5 mb-3 d-flex justify-content-center">
                        <Image src={logo} fluid width="140rem"/>
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
                                Username
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="inlineFormInputGroup" placeholder="Username" value={username} onChange={onUsernameChange} required />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
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
                        <Button type="submit" className="mb-2" onClick={onLoginClick}>
                            Login
                        </Button>
                    </Form.Row>
                    <Form.Row className="d-flex justify-content-center">
                        <Link to="/register" className="mb-2" >
                            New to Pillshare?
                        </Link>
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