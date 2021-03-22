import React from 'react';
import { Col,Form } from 'react-bootstrap';


interface IProps {
    reading?:number;
    time?:string;
    onHeartRateReadingChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const HeartRateComponent = (props:IProps) : JSX.Element => {
    const { 
        reading,
        time,
        onHeartRateReadingChange,
        onTimeChange,
        // onSaveClick,
     } = props;
    return(
        <React.Fragment>
            <Form noValidate validated={true}>
                <Form.Row className="ml-5 mt-5 mr-5">
                    <Form.Group as={Col} xs="7" md="3" lg="3" controlId="formGridValue">
                    <Form.Label>Enter the reading</Form.Label>
                    <Form.Control type="number" placeholder="beats/min" value={reading} onChange={onHeartRateReadingChange} required min="0"/>
                    <Form.Control.Feedback type="invalid">
                        Please provide your heart rate reading.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} xs="9" md="3" lg="3" controlId="formGridTime">
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

export default HeartRateComponent;