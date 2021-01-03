import React from 'react';
import { Row,Col,Container,Form } from 'react-bootstrap';

import '../../App.css';

interface IProps {
    onReasonChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    reason ?: string;
}

const PillReasonComponent = (props: IProps) : JSX.Element => {
const { reason,
        onReasonChange,
    } = props;
    return(
        <React.Fragment>
            <div id="app" style={{height: "100%"}}>
                <div id="outer-container" style={{height: "100%"}}>
                    <Container style={{margin: "auto",width: "80%",border: "3px solid white",padding: "16px"}} fluid>
                        <Row>
                            <Col xs="12" md="12" lg="12">
                                <Form noValidate validated={true}>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Reason for taking this medication</Form.Label>
                                        <Form.Control as="textarea" rows={4} value={reason} onChange={onReasonChange} placeholder="Please enter your reason here..." required/>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Container>
                    {/* ----------------------The page content ends here---------------------- */}
                </div>
            </div>
        </React.Fragment>
    );
}
export default PillReasonComponent;