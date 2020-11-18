import React from 'react';
import { Col,Form } from 'react-bootstrap';


interface IProps {
    
}
const HeartRateComponent = (props:IProps) : JSX.Element => {
    return(
        <Form>
            <Form.Row>
                <Form.Group as={Col} xs="4" md="3" lg="3" controlId="formGridValue">
                <Form.Label>Enter the reading</Form.Label>
                <Form.Control type="email" placeholder="beats/min" />
                </Form.Group>
                <Form.Group as={Col} xs="4" md="3" lg="3" controlId="formGridTime">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Date" />
                </Form.Group>
                <Form.Group as={Col} xs="4" md="3" lg="3" controlId="formGridTime">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" placeholder="Time" />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default HeartRateComponent;