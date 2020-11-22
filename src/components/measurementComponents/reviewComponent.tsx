import React from 'react';
import { Row,Card,Container,Col,Form } from 'react-bootstrap';


// import HeartRateComponent from '../../components/measurementComponents/heartRateComponent';
// import BloodPressureComponent from '../../components/measurementComponents/bloodPressureComponent';
// import BodyTemperatureComponent from '../../components/measurementComponents/bodyTemperatureComponent';
// import GlucoseComponent from '../../components/measurementComponents/glucoseComponent';
// import OxygenSaturationComponent from '../../components/measurementComponents/oxygenSaturationComponent';


interface IProps {
    
}
const ReviewComponent = (props:IProps) : JSX.Element => {
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
                                        {/* <HeartRateComponent readOnly={true}/> */}
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
                                        {/* <BloodPressureComponent readOnly={true} /> */}
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
                                        {/* <BodyTemperatureComponent readOnly={true}/> */}
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
                                        {/* <GlucoseComponent readOnly={true}/> */}
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
                                        {/* <OxygenSaturationComponent readOnly={true}/> */}
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