import React from 'react';
import { Form, Col, Container, Button, InputGroup, Row, FormControl,Image } from 'react-bootstrap';
import logo from '../img/logo.png';
 
interface IProps {

}

const LoginComponent = (props: IProps) : JSX.Element => {
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
                    <Form>
                        <Form.Row className="d-flex justify-content-center">
                            <Form.Group as={Col} md="10" controlId="validationUsername">
                                <Form.Label>
                                    Username
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl id="inlineFormInputGroup" placeholder="Username" />
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="d-flex justify-content-center">
                            <Form.Group as={Col} md="10" controlId="validationPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid password.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="d-flex justify-content-center">
                            <Form.Check
                                type="checkbox"
                                id="autoSizingCheck"
                                className="mt-2 mb-4"
                                label="Remember me"
                            />
                        </Form.Row>
                        <Form.Row className="d-flex justify-content-center">
                            <Button type="submit" className="mb-2">
                                Login
                            </Button>
                        </Form.Row>
                        <Form.Row className="d-flex justify-content-center">
                            <Button type="button" className="mb-2">
                                Register
                            </Button>
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