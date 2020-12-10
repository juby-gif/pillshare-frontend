import React from 'react';
import { Col,Form } from 'react-bootstrap';


interface IProps {
    reading?:number;
    date?:string;
    time?:string;
    onHeartRateReadingChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const HeartRateComponent = (props:IProps) : JSX.Element => {
    const { 
        reading,
        date,
        time,
        onHeartRateReadingChange,
        onDateChange,
        onTimeChange,
        // onSaveClick,
     } = props;
    return(
        <React.Fragment>
            <Form>
                <Form.Row className="ml-5 mt-5 mr-5">
                    <Form.Group as={Col} xs="6" md="3" lg="3" controlId="formGridValue">
                    <Form.Label>Enter the reading</Form.Label>
                    <Form.Control type="number" placeholder="beats/min" value={reading} onChange={onHeartRateReadingChange}/>
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

export default HeartRateComponent;