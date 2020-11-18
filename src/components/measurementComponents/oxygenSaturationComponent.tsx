import React from 'react';
import { Col,Form } from 'react-bootstrap';


interface IProps {
    readOnly:boolean;
}
const OxygenSaturationComponent = (props:IProps) : JSX.Element => {
    const { readOnly } = props;
    return(
    <Form>
        {readOnly === false && 
        <Form.Row className="ml-5 mt-5 mr-5">
            <Form.Group as={Col} xs="6" md="3" lg="3" controlId="formGridValue">
            <Form.Label>Enter the reading</Form.Label>
            <Form.Control type="email" placeholder="%" />
            </Form.Group>
            <Form.Group as={Col} xs="6" md="3" lg="3" controlId="formGridTime">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date" />
            </Form.Group>
            <Form.Group as={Col} xs="6" md="3" lg="3" controlId="formGridTime">
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" placeholder="Time" />
            </Form.Group>
        </Form.Row>
        }   
        {readOnly === true && 
        <Form.Row className="ml-5 mt-5 mr-5">
            <Form.Group as={Col} xs="6" md="3" lg="3" controlId="formGridValue">
            <Form.Label>Enter the reading</Form.Label>
            <Form.Control type="email" placeholder="%" readOnly/>
            </Form.Group>
            <Form.Group as={Col} xs="6" md="3" lg="3" controlId="formGridTime">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date" readOnly/>
            </Form.Group>
            <Form.Group as={Col} xs="6" md="3" lg="3" controlId="formGridTime">
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" placeholder="Time" readOnly/>
            </Form.Group>
        </Form.Row>
        }       
    </Form>
    )
}

export default OxygenSaturationComponent;