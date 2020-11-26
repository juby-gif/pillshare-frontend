import React from 'react';
import { Button, Col,Form } from 'react-bootstrap';


interface IProps {
    reading:number;
    date:string;
    time:string;
    onGlucoseReadingChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSaveClick: (event:React.SyntheticEvent) => void;
}
const GlucoseComponent = (props:IProps) : JSX.Element => {
    const { 
        reading,
        date,
        time,
        onGlucoseReadingChange,
        onDateChange,
        onTimeChange,
        onSaveClick,
     } = props;
    return(
        <React.Fragment>
            <Form>
                <Form.Row className="ml-5 mt-5 mr-5">
                    <Form.Group as={Col} xs="6" md="3" lg="3" controlId="formGridValue">
                    <Form.Label>Enter the reading</Form.Label>
                    <Form.Control type="number" placeholder="mg/dL" value={reading} onChange={onGlucoseReadingChange}/>
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
                <Button style={{width:"5rem",height:"2.2rem"}} className="p-2 mt-3 ml-5 d-flex justify-content-center" as={Col} onClick={onSaveClick}>Save</Button>
            </Form>
        </React.Fragment>
    )
}

export default GlucoseComponent;