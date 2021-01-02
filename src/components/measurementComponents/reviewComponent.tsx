import React from 'react';
import { Row,Card,Container,Col,Form,} from 'react-bootstrap';

interface ReadingProps {
    reading: number;
    systoleReading?: number;
    diastoleReading?: number
    date: string;
    time: string;
  }
  
  interface IProps {
    heartRateReading: ReadingProps;
    bloodPressureReading: ReadingProps;
    bodyTemperatureReading: ReadingProps;
    glucoseReading: ReadingProps;
    oxygenSaturationReading: ReadingProps;
  }
const ReviewComponent = (props:IProps) : JSX.Element => {
    const { 
        heartRateReading,
        bloodPressureReading,
        bodyTemperatureReading,
        glucoseReading,
        oxygenSaturationReading,
     } = props;
    return(
        <React.Fragment>
            <Container>
                <Col>
                    <Card className="bg-white shadow mb-4">
                        <Card.Header className="bg-light border-0">
                            <Row className="align-items-center">
                                <Col xs="8">
                                    <h3 className="mb-0">Review and Submit</h3>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Form aria-disabled>
                                <span className="bg-light border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h6 className="heading-small text-muted mb-4">
                                                Heart Rate Measurement
                                            </h6>
                                        </Col>
                                    </Row>
                                </span>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Form>
                                            <Form.Row className="ml-5 mt-5 mr-5">
                                                <Form.Group as={Col} xs="5" md="5" lg="4" controlId="formGridValue">
                                                <Form.Label>Heart Rate(beats/min)</Form.Label>
                                                <Form.Control type="number" placeholder="%" value={heartRateReading.reading} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="11" md="4" lg="4" controlId="formGridTime">
                                                <Form.Label>Date</Form.Label>
                                                <Form.Control type="date" placeholder="Date" value={heartRateReading.date} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="9" md="4" lg="4" controlId="formGridTime">
                                                <Form.Label>Time</Form.Label>
                                                <Form.Control type="time" placeholder="Time" value={heartRateReading.time} disabled/>
                                                </Form.Group>
                                            </Form.Row>
                                        </Form>
                                    </Row>
                                </div>
                                <hr className="my-4" />
                                <span className="bg-light border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h6 className="heading-small text-muted mb-4">
                                                Blood Pressure Measurement
                                            </h6>
                                        </Col>
                                    </Row>
                                </span>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Form>
                                            <Form.Row className="ml-5 mt-5 mr-5">
                                                <Form.Group as={Col} xs="8" md="4" lg="2" controlId="formGridSValue">
                                                    <Form.Label>Systole(mmHg)</Form.Label>
                                                    <Form.Control type="number" placeholder="%" value={bloodPressureReading.systoleReading} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="5" md="4" lg="2" controlId="formGridDValue">
                                                    <Form.Label>Diastole(mmHg)</Form.Label>
                                                    <Form.Control type="number" placeholder="%" value={bloodPressureReading.diastoleReading} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="11" md="4" lg="3" controlId="formGridTime">
                                                    <Form.Label>Date</Form.Label>
                                                    <Form.Control type="date" placeholder="Date" value={bloodPressureReading.date} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="9" md="4" lg="3" controlId="formGridTime">
                                                    <Form.Label>Time</Form.Label>
                                                    <Form.Control type="time" placeholder="Time" value={bloodPressureReading.time} disabled/>
                                                </Form.Group>
                                            </Form.Row>
                                        </Form>
                                    </Row>
                                </div>
                                <hr className="my-4" />
                                <span className="bg-light border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h6 className="heading-small text-muted mb-4">
                                                Body Temperature Measurement
                                            </h6>
                                        </Col>
                                    </Row>
                                </span>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Form>
                                            <Form.Row className="ml-5 mt-5 mr-5">
                                                <Form.Group as={Col} xs="5" md="4" lg="4" controlId="formGridSValue">
                                                    <Form.Label>Temperature(Celsius)</Form.Label>
                                                    <Form.Control type="number" placeholder="%" value={bodyTemperatureReading.reading} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="11" md="4" lg="4" controlId="formGridTime">
                                                    <Form.Label>Date</Form.Label>
                                                    <Form.Control type="date" placeholder="Date" value={bodyTemperatureReading.date} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="9" md="4" lg="4" controlId="formGridTime">
                                                    <Form.Label>Time</Form.Label>
                                                    <Form.Control type="time" placeholder="Time" value={bodyTemperatureReading.time} disabled/>
                                                </Form.Group>
                                            </Form.Row>
                                        </Form>
                                    </Row>
                                </div>
                                <hr className="my-4" />
                                <span className="bg-light border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h6 className="heading-small text-muted mb-4">
                                                Glucose Measurement
                                            </h6>
                                        </Col>
                                    </Row>
                                </span>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Form>
                                            <Form.Row className="ml-5 mt-5 mr-5">
                                                <Form.Group as={Col} xs="5" md="4" lg="4" controlId="formGridSValue">
                                                    <Form.Label>Glucose(mg/dL)</Form.Label>
                                                    <Form.Control type="number" placeholder="%" value={glucoseReading.reading} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="11" md="4" lg="4" controlId="formGridTime">
                                                    <Form.Label>Date</Form.Label>
                                                    <Form.Control type="date" placeholder="Date" value={glucoseReading.date} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="9" md="4" lg="4" controlId="formGridTime">
                                                    <Form.Label>Time</Form.Label>
                                                    <Form.Control type="time" placeholder="Time" value={glucoseReading.time} disabled/>
                                                </Form.Group>
                                            </Form.Row>
                                        </Form>
                                    </Row>
                                </div>
                                <hr className="my-4" />
                                <span className="bg-light border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h6 className="heading-small text-muted mb-4">
                                                Oxygen Saturation Measurement
                                            </h6>
                                        </Col>
                                    </Row>
                                </span>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Form>
                                            <Form.Row className="ml-5 mt-5 mr-5">
                                                <Form.Group as={Col} xs="5" md="5" lg="5" controlId="formGridSValue">
                                                    <Form.Label>Oxygen Saturation(mg/dL)</Form.Label>
                                                    <Form.Control type="number" placeholder="%" value={oxygenSaturationReading.reading} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="11" md="4" lg="4" controlId="formGridTime">
                                                    <Form.Label>Date</Form.Label>
                                                    <Form.Control type="date" placeholder="Date" value={oxygenSaturationReading.date} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="9" md="4" lg="3" controlId="formGridTime">
                                                    <Form.Label>Time</Form.Label>
                                                    <Form.Control type="time" placeholder="Time" value={oxygenSaturationReading.time} disabled/>
                                                </Form.Group>
                                            </Form.Row>
                                        </Form>
                                    </Row>
                                </div>
                                <hr className="my-4" />
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
    </React.Fragment>
    )
}

export default ReviewComponent;