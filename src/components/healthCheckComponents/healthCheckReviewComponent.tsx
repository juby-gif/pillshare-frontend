import React from 'react';
import { Row,Card,Container,Col,Form,} from 'react-bootstrap';

import { SYMPTOMS_DROPDOWN_LIST } from '../../constants';


interface FeelProps {
  healthCheck ?: string;
}

interface SymptomsProps{
  date : string;
  time : string;
  intensity ?: number;
  values ?: number[];
}

interface AttitudeProps{
  anxietyCheck ?: boolean;
  depressionCheck ?: boolean;
  irritabilityCheck ?: boolean;
  peacefulCheck ?: boolean;
  happyCheck ?: boolean;
  othersCheck ?: boolean;
  othersValue ?: string;
}

interface IProps {
  symptomsData ?: SymptomsProps;
  attitudeData ?: AttitudeProps;
  feelData ?: FeelProps;
}

interface DataProps {
  id:number;
  value:string;
}
  
const HealthCheckReviewComponent = (props:IProps) : JSX.Element => {
    const { 
      symptomsData,
      attitudeData,
      feelData,
     } = props;
     let data: DataProps[] = SYMPTOMS_DROPDOWN_LIST;
     
     const getData = (id:number) => {
       for (let datum of data){
         if(datum?.id === id){
           return datum.value
         }
       }
     }
     console.log(symptomsData?.values)
     
     console.log(getData(1))

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
                                          Symptoms Check
                                      </h6>
                                  </Col>
                              </Row>
                          </span>
                          <div className="pl-lg-4">
                              <Row>
                                  <Form>
                                      <Form.Row className="ml-5 mt-5 mr-5">
                                          <Form.Group as={Col} xs="9" md="5" lg="5" controlId="pill-name">
                                              <Form.Label>How are you feeling today?</Form.Label>
                                              {symptomsData?.values?.map((datum)=><div><Form.Control type="text" placeholder="dose" value={(getData(datum))} disabled/><br /></div> )}
                                          </Form.Group>
                                          <Form.Group as={Col} xs="7" md="4" lg="4" controlId="pill-dose">
                                              <Form.Label>Date</Form.Label>
                                              <Form.Control type="text" placeholder="dose" value={symptomsData?.date} disabled/>
                                          </Form.Group>
                                          <Form.Group as={Col} xs="7" md="3" lg="3" controlId="pill-measure">
                                              <Form.Label>Time</Form.Label>
                                              <Form.Control type="text" placeholder="Measure" value={symptomsData?.time} disabled/>
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
                                          Attitude Check
                                      </h6>
                                  </Col>
                              </Row>
                          </span>
                          <div className="pl-lg-4">
                              <Row>
                                  <Form>
                                      <Form.Row className="ml-5 mt-5 mr-5">
                                          <Form.Group as={Col} xs="9" md="7" lg="5" controlId="pill-duration">
                                              <ol>
                                              {attitudeData?.anxietyCheck && (
                                                <li>
                                                  <Form.Label>Anxiety</Form.Label>
                                                </li>)}
                                              {attitudeData?.irritabilityCheck && (
                                                <li>
                                                  <Form.Label>Irritability</Form.Label>
                                                </li>
                                              )}
                                              {attitudeData?.depressionCheck && (
                                                <li>
                                                  <Form.Label>Depression</Form.Label>
                                                </li>)}
                                              {attitudeData?.peacefulCheck && (
                                                <li>
                                                  <Form.Label>Peace</Form.Label>
                                                </li>)}
                                              {attitudeData?.happyCheck && (
                                                <li>
                                                  <Form.Label>Happy</Form.Label>
                                                </li>)}
                                                {attitudeData?.othersCheck && (
                                                <li>
                                                  <Form.Group>
                                                    <Form.Label>Others</Form.Label>
                                                    <Form.Control type="text" placeholder="Dosage" value={attitudeData?.othersValue} disabled/>
                                                  </Form.Group>
                                                </li>)}
                                              </ol>
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
                                            Feel Check
                                        </h6>
                                    </Col>
                                </Row>
                            </span>
                            <div className="pl-lg-4">
                                <Row>
                                    <Form>
                                        <Form.Row className="m-3">
                                            <Form.Group as={Col} xs="12" md="12" lg="12" controlId="reason">
                                                <Form.Label>Feel</Form.Label>
                                                <Form.Control  as="textarea" rows={4} value={feelData?.healthCheck} disabled/>
                                            </Form.Group>
                                        </Form.Row>
                                    </Form>
                                </Row>
                            </div>
                      </Form>
                  </Card.Body>
              </Card>
            </Col>
          </Container>
        </React.Fragment>
        )
    }

export default HealthCheckReviewComponent;