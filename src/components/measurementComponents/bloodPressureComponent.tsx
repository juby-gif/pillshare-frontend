import React from 'react';
import { Col,Form } from 'react-bootstrap';


interface IProps {
    diastoleReading?: number;
    systoleReading?: number;
    date?:string;
    time?:string;
    onBloodPressureSystoleReadingChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBloodPressureDiastoleReadingChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}  
 

const BloodPressureComponent = (props:IProps) : JSX.Element => {
    const { 
        diastoleReading,
        systoleReading,
        date,
        time,
        onBloodPressureSystoleReadingChange,
        onBloodPressureDiastoleReadingChange,
        onDateChange,
        onTimeChange,
     } = props;
    return(
        <React.Fragment>
            <Form>
                <Form.Row className="ml-5 mt-5 mr-5">
                    <Form.Group as={Col} xs="6" md="3" lg="3" controlId="formGridSValue">
                        <Form.Label>Enter the systole reading</Form.Label>
                        <Form.Control type="number" placeholder="mmHg" value={systoleReading} onChange={onBloodPressureSystoleReadingChange}/>
                    </Form.Group>
                    <Form.Group as={Col} xs="6" md="3" lg="3" controlId="formGridDValue">
                        <Form.Label>Enter the diastole reading</Form.Label>
                        <Form.Control type="number" placeholder="mmHg" value={diastoleReading} onChange={onBloodPressureDiastoleReadingChange}/>
                    </Form.Group>
                    <Form.Group as={Col} xs="6" md="3" lg="3" controlId="formGridTime">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Date" value={date} onChange={onDateChange}/>
                    </Form.Group>
                    <Form.Group as={Col} xs="6" md="3" lg="3" controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time" placeholder="Time" value={time} onChange={onTimeChange}/>
                    </Form.Group>
                </Form.Row>
            </Form>
        </React.Fragment>
    )
}

export default BloodPressureComponent;