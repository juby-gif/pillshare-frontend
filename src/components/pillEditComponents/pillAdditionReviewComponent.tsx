import React from 'react';
import { Row,Card,Container,Col,Form,} from 'react-bootstrap';

interface DescriptionProps {
    name ?: string;
    dose ?: string;
    dosage ?: string;
    measure ?: string;
    beforeOrAfter ?: string;
  }
  
  interface DurationProps {
    numberOfDays ?: string;
    startDate ?: string;
    endDate ?: string;
    morning ?: string;
    afternoon ?: string;
    evening ?: string;
    night ?: string;
  }
  
  interface ReasonProps {
    reason ?: string;
  }
  
  interface IProps {
    durationData ?: DurationProps;
    descriptionData ?: DescriptionProps;
    reasonData ?: ReasonProps;
  }
  
const PillAdditionReviewComponent = (props:IProps) : JSX.Element => {
    const { 
        durationData,
        descriptionData,
        reasonData,
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
                                                Pill Description
                                            </h6>
                                        </Col>
                                    </Row>
                                </span>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Form>
                                            <Form.Row className="ml-5 mt-5 mr-5">
                                                <Form.Group as={Col} xs="9" md="5" lg="3" controlId="pill-name">
                                                    <Form.Label>Pill Name</Form.Label>
                                                    <Form.Control type="text" placeholder="name" value={descriptionData?.name} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="6" md="3" lg="3" controlId="pill-dose">
                                                    <Form.Label>Dose</Form.Label>
                                                    <Form.Control type="text" placeholder="dose" value={descriptionData?.dose} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="7" md="4" lg="3" controlId="pill-measure">
                                                    <Form.Label>Measure</Form.Label>
                                                    <Form.Control type="text" placeholder="Measure" value={descriptionData?.measure} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="10" md="5" lg="4" controlId="pill-dosage">
                                                    <Form.Label>Dosage</Form.Label>
                                                    <Form.Control type="text" placeholder="Dosage" value={descriptionData?.dosage} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="9" md="5" lg="3" controlId="pill-before-or-after">
                                                    <Form.Label>Before / After Food</Form.Label>
                                                    <Form.Control type="text" placeholder="Before / After Food" value={descriptionData?.beforeOrAfter} disabled/>
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
                                                Pill Duration
                                            </h6>
                                        </Col>
                                    </Row>
                                </span>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Form>
                                            <Form.Row className="ml-5 mt-5 mr-5">
                                                <Form.Group as={Col} xs="9" md="7" lg="5" controlId="pill-duration">
                                                    <Form.Label>How long you have to take this pill?</Form.Label>
                                                    <Form.Control type="text" placeholder="name" value={durationData?.numberOfDays} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="10" md="5" lg="3" controlId="pill-start-date">
                                                    <Form.Label>Start Date</Form.Label>
                                                    <Form.Control type="text" placeholder="dose" value={durationData?.startDate} disabled/>
                                                </Form.Group>
                                                <Form.Group as={Col} xs="10" md="5" lg="3" controlId="pill-end-date">
                                                    <Form.Label>End Date</Form.Label>
                                                    <Form.Control type="text" placeholder="Measure" value={durationData?.endDate} disabled/>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row className="ml-5 mt-5 mr-5">
                                                <Form.Group controlId="intervals">
                                                    <Form.Label className="ml-3 mt-4"><b>Intervals</b></Form.Label>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row className="ml-5 mr-5">
                                                {durationData?.morning && <Form.Group as={Col} xs="8" md="4" lg="3" controlId="morning">
                                                    <Form.Label>Morning</Form.Label>
                                                    <Form.Control type="text" placeholder="Dosage" value={durationData?.morning} disabled/>
                                                </Form.Group>}
                                                {durationData?.afternoon && <Form.Group as={Col} xs="8" md="4" lg="3" controlId="afternoon">
                                                    <Form.Label>Afternoon</Form.Label>
                                                    <Form.Control type="text" placeholder="Before / After Food" value={durationData?.afternoon} disabled/>
                                                </Form.Group>}
                                                {durationData?.evening && <Form.Group as={Col} xs="8" md="4" lg="3" controlId="evening">
                                                    <Form.Label>Evening</Form.Label>
                                                    <Form.Control type="text" placeholder="Before / After Food" value={durationData?.evening} disabled/>
                                                </Form.Group>}
                                                {durationData?.night && <Form.Group as={Col} xs="8" md="4" lg="3" controlId="night">
                                                    <Form.Label>Night</Form.Label>
                                                    <Form.Control type="text" placeholder="Before / After Food" value={durationData?.night} disabled/>
                                                </Form.Group>}
                                            </Form.Row>
                                        </Form>
                                    </Row>
                                </div>
                                <hr className="my-4" />
                                <span className="bg-light border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h6 className="heading-small text-muted mb-4">
                                                Reason
                                            </h6>
                                        </Col>
                                    </Row>
                                </span>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Form>
                                            <Form.Row className="ml-5 mt-5 mr-5">
                                                <Form.Group as={Col} xs="12" md="12" lg="12" controlId="reason">
                                                    <Form.Label>Reason for taking this medication</Form.Label>
                                                    <Form.Control  as="textarea" rows={4} value={reasonData?.reason} disabled/>
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

export default PillAdditionReviewComponent;