import React from 'react';
import { Form, Col, Container, Button, InputGroup, Row, FormControl,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
 
interface FuncProps {
    username : string;
    password : string;
    response : string;
    message : string;
    validated : boolean;
    onLoginClick: (event: React.SyntheticEvent) => void;
    onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onRegisterClick: (event: React.SyntheticEvent) => void;
}

const LoginComponent = (props: FuncProps) : JSX.Element => {
    const { username,
            password,
            // response,
            // message,
            // validated,
            onLoginClick,
            onUsernameChange,
            onPasswordChange,
    } = props;
return (
<React.Fragment>
    <Container  fluid className="p-5">
        <Row>
            <Col>
            </Col>
            <Col lg xs="12" className="p-2" style={{border:"2px solid #000", borderWidth: ".2rem .2rem .2rem",borderRadius: "18px 18px 18px 18px"}}>
                <Row>
                    <Col className="mt-3 ml-3">
                        <Image src={logo} fluid width="80rem"/>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <h3 className="d-flex justify-content-center mb-4 mt-3">Log-in</h3>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Form noValidate>
                        <Form.Row className="d-flex justify-content-center">
                            <Form.Group as={Col} sm="5" md="12" lg="10">
                                <Form.Label>
                                    Username
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="inlineFormInputGroup" placeholder="Username" value={username} onChange={onUsernameChange} required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid username.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="d-flex justify-content-center">
                            <Form.Group as={Col} sm="5" md="12" lg="10">
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
                                Register Now
                            </Link>
                        </Form.Row>
                    </Form>
                </Row>
            </Col>
            <Col></Col>
        </Row>
    </Container>
</React.Fragment>
)
}
export default LoginComponent;