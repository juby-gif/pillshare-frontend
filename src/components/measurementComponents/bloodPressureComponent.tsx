import React from 'react';
import { Col,Form } from 'react-bootstrap';


interface IProps {
    diastoleReading?: number;
    systoleReading?: number;
    time?:string;
    onBloodPressureSystoleReadingChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBloodPressureDiastoleReadingChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}  
 

const BloodPressureComponent = (props:IProps) : JSX.Element => {
    const { 
        diastoleReading,
        systoleReading,
        time,
        onBloodPressureSystoleReadingChange,
        onBloodPressureDiastoleReadingChange,
        onTimeChange,
     } = props;
    return(
        <React.Fragment>
            <Form noValidate validated={true}>
                <Form.Row className="ml-5 mt-5 mr-5">
                    <Form.Group as={Col} xs="6" md="4" lg="3" controlId="formGridSValue">
                        <Form.Label>Enter the systole reading</Form.Label>
                        <Form.Control type="number" placeholder="mmHg" value={systoleReading} onChange={onBloodPressureSystoleReadingChange} required min="0"/>
                        <Form.Control.Feedback type="invalid">
                            Please provide your systole reading.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} xs="7" md="4" lg="3" controlId="formGridDValue">
                        <Form.Label>Enter the diastole reading</Form.Label>
                        <Form.Control type="number" placeholder="mmHg" value={diastoleReading} onChange={onBloodPressureDiastoleReadingChange} required min="0"/>
                        <Form.Control.Feedback type="invalid">
                            Please provide your diastole reading.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} xs="9" md="4" lg="3" controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="datetime-local" placeholder="Time" value={time} onChange={onTimeChange} required/>
                    <Form.Control.Feedback type="invalid">
                        Please provide the time taken.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
            </Form>
        </React.Fragment>
    )
}

export default BloodPressureComponent;