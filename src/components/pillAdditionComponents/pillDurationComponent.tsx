import React from 'react';
import { Row,Col,Container,Form } from 'react-bootstrap';

import '../../App.css';

interface IProps {
    onNumberOfDaysChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onStartDateChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEndDateChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onMorningTimeChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAfternoonTimeChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEveningTimeChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onNightTimeChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    numberOfDays ?: string;
    startDate ?: string;
    endDate ?: string;
    morning ?:string;
    afternoon ?: string;
    evening ?:string;
    night ?: string;
}

const PillDurationComponent = (props: IProps) : JSX.Element => {
    const { 
        onNumberOfDaysChange,
        onStartDateChange,
        onEndDateChange,
        onMorningTimeChange,
        onAfternoonTimeChange,
        onEveningTimeChange,
        onNightTimeChange,
        numberOfDays,
        startDate,
        endDate,
        morning,
        afternoon,
        evening,
        night
        } = props;

    return(
        <React.Fragment>
            <div id="app" style={{height: "100%"}}>
                <div id="outer-container" style={{height: "100%"}}>
                    <Container style={{margin: "auto",width: "80%",border: "3px solid white",padding: "16px"}} fluid>
                        <Row>
                            <Col xs="9" md="7" lg="5">
                                <Form.Group controlId="pill-duration">
                                    <Form.Label>How long you have to take this pill?</Form.Label>
                                    <Form.Control type="number" placeholder="Number of days" onChange={onNumberOfDaysChange} value={numberOfDays} min="0" />
                                </Form.Group>
                            </Col>
                            <Col xs="10" md="5" lg="3">
                                <Form.Group controlId="pill-start-date">
                                    <Form.Label>Start Date</Form.Label>
                                    <Form.Control type="date" placeholder="Start Date" onChange={onStartDateChange} value={startDate} />
                                </Form.Group>
                            </Col>
                            <Col xs="10" md="5" lg="3">
                                <Form.Group controlId="pill-end-date">
                                    <Form.Label>End Date</Form.Label>
                                    <Form.Control type="date" placeholder="End Date" onChange={onEndDateChange} value={endDate} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group controlId="pill-end-date">
                                <Form.Label className="ml-3 mt-4"><b>Intervals</b></Form.Label>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col xs="8" md="4" lg="3">
                                <Form.Group controlId="pill-dosage">
                                    <Form.Label>Morning</Form.Label>
                                    <Form.Control type="time" onChange={onMorningTimeChange} value={morning} />
                                </Form.Group>
                            </Col>
                            <Col xs="8" md="4" lg="3">
                                <Form.Group controlId="pill-dosage">
                                    <Form.Label>Afternoon</Form.Label>
                                    <Form.Control type="time" onChange={onAfternoonTimeChange} value={afternoon} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="8" md="4" lg="3">
                                <Form.Group controlId="pill-dosage">
                                    <Form.Label>Evening</Form.Label>
                                    <Form.Control type="time" onChange={onEveningTimeChange} value={evening} />
                                </Form.Group>
                            </Col>
                            <Col xs="8" md="4" lg="3">
                                <Form.Group controlId="pill-dosage">
                                    <Form.Label>Night</Form.Label>
                                    <Form.Control type="time" onChange={onNightTimeChange} value={night} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Container>
                    {/* ----------------------The page content ends here---------------------- */}
                </div>
            </div>
        </React.Fragment>
    );
}
export default PillDurationComponent;