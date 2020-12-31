import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row,Col,Card,Container,CardDeck} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {faArrowUp,
        faHeart,
        faChartLine,
        faArrowDown,
        faThermometerThreeQuarters,
        faChartBar,
        faHandHoldingMedical,
        // faPrint
     } from '@fortawesome/free-solid-svg-icons';
// import { PDFDownloadLink } from '@react-pdf/renderer';

import '../../App.css';
import SidebarComponent from './sideBarComponent';
// import RemoteHealthReportPDFComponent from './remoteHealthReportPDFComponent';
import TableContainer from '../containers/remoteTableContainer';


interface IProps {
    alertsResponded : number;
    alertsSent : number;
    bloodPressure ?: BloodPressureProps;
    bodyTemperature ?: BodyTemperatureProps;
    glucose ?: GlucoseProps;
    healthCheck ?: HealthCheckProps;
    heartRate ?: HeartRateProps;
    medicalInformation ?: MedicalProps[];
    oxygenSaturation ?: OxygenSaturationProps;
    firstName ?: string;

}
 
  interface BloodPressureProps {
    diastole_reading:number;
    systole_reading:number;
    percentage:number;
    instrument_id:number;
    time:string;
  }
  interface BodyTemperatureProps {
    reading :number;
    percentage :number;
    instrument_id :number;
    time :string;
  }
  
  interface GlucoseProps {
    reading:number;
    percentage:number;
    instrument_id:number;
    time:string;
  }
  
  interface HealthCheckProps {
    health_status:string;
    time:string;
  }
  
  interface HeartRateProps {
    reading:number;
    percentage:number;
    instrument_id:number;
    time:string;
  }
  
  interface OxygenSaturationProps {
    reading:number;
    percentage:number;
    instrument_id:number;
    time:string;
  }
  
  
  interface MedicalProps {
    before_or_after : string;
    dosage : string;
    dose : number;
    duration : number;
    end_date : string;
    start_date : string;
    intervals : IntervalProps;
    missed : string[];
    measure : string;
    name : string;
    reason : string;
    taken: string[];
    id:number;
  }
  
  interface IntervalProps {
    part: string[];
    time: string[];
  }
  


const RemoteDashboardComponent = (props: IProps) : JSX.Element => {
    const { 
        // alertsResponded,
        // alertsSent,
        bloodPressure,
        bodyTemperature,
        glucose,
        // healthCheck,
        heartRate,
        oxygenSaturation,
        firstName,
    } = props;
    return(
        <React.Fragment>
            <div id="app" style={{height: "100%"}}>
                <div id="outer-container" style={{height: "100%"}}>

                    {/* --- Sidebar ---*/}
                    <SidebarComponent />
                    {/* --- Sidebar ---*/}

                    <div id="page-wrap" style={{height: "100%",overflow:"auto"}}>
                        {/* ----------------------The page content starts here---------------------- */}

                        <h6 className="mt-3 display-2 d-flex justify-content-center">You're viewing {firstName}'s Health Stats</h6>

                        <Container  className="p-4" style={{margin: "auto",width: "70%",border: "3px solid white"}} fluid>
                            <CardDeck>
                                <Card className="mb-4" style={{ minWidth: '18rem',maxWidth:'19.6rem',borderRadius:"18px 18px 18px 18px" }} >
                                    <Card.Body>
                                        <Row>
                                            <Col xs={7}>
                                                <Card.Subtitle style={{fontSize:"0.8rem"}} className="mb-1 text-muted"><b>HEART RATE</b></Card.Subtitle>
                                                <Card.Title className="mb-2">{heartRate?heartRate.reading:0} beats/min</Card.Title>
                                            </Col>
                                            <Col>
                                                <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                                    <FontAwesomeIcon style={{fontSize:"1.5rem"}} icon={faHeart} />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="ml-1">
                                            <p className="mt-3 mb-0 text-sm"></p>
                                            <p className="mt-3 mb-0 text-sm">
                                                <span className="text-danger mr-2">
                                                    <FontAwesomeIcon icon={faArrowUp} />
                                                    {heartRate?heartRate.percentage:0}%
                                                </span>
                                                <span className="text-nowrap">
                                                {heartRate?heartRate.time:""}
                                                </span>
                                            </p>
                                        </Row>
                                    </Card.Body>
                                    <span className="ml-5">
                                        <span className="ml-5">
                                            <span className="ml-5">
                                                <Link to="/remote-heart-rate" className="more-details ml-5" style={{position:"sticky"}}>
                                                    view more
                                                </Link>
                                            </span>
                                        </span>
                                    </span>
                                </Card>
                                <Card className="mb-4" style={{ minWidth: '18rem',maxWidth:'19.6rem',borderRadius:"18px 18px 18px 18px" }} >
                                    <Card.Body>
                                        <Row>
                                            <Col xs={7}>
                                                <Card.Subtitle style={{fontSize:"0.8rem"}} className="mb-1 text-muted"><b>BLOOD PRESSURE</b></Card.Subtitle>
                                                <Card.Title className="mb-2">{bloodPressure?bloodPressure.systole_reading:0} / {bloodPressure?bloodPressure.diastole_reading:0} mmHg</Card.Title>
                                            </Col>
                                            <Col>
                                                <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                                    <FontAwesomeIcon style={{fontSize:"1.5rem"}} icon={faChartLine} />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="ml-1">
                                            <p className="mt-3 mb-0 text-sm"></p>
                                            <p className="mt-3 mb-0 text-sm">
                                                <span className="text-success mr-2">
                                                    <FontAwesomeIcon icon={faArrowDown} />
                                                    {bloodPressure?bloodPressure.percentage:0}%
                                                </span>
                                                <span className="text-nowrap">
                                                {bloodPressure?bloodPressure.time:""}
                                                </span>
                                            </p>
                                        </Row>
                                    </Card.Body>
                                    <span className="ml-5">
                                            <span className="ml-5">
                                                <span className="ml-5">
                                                    <Link to="/remote-blood-pressure" className="more-details ml-5" style={{position:"sticky"}}>
                                                        view more
                                                    </Link>
                                                </span>
                                            </span>
                                        </span>
                                </Card>
                                <Card className="mb-4" style={{ minWidth: '18rem',maxWidth:'19.6rem',borderRadius:"18px 18px 18px 18px" }} >
                                    <Card.Body>
                                        <Row>
                                            <Col xs={7}>
                                                <Card.Subtitle style={{fontSize:"0.8rem"}} className="mb-1 text-muted"><b>BODY TEMPERATURE</b></Card.Subtitle>
                                                <Card.Title className="mb-2">{bodyTemperature?bodyTemperature.reading:0}°C</Card.Title>
                                            </Col>
                                            <Col>
                                                <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                                    <FontAwesomeIcon style={{fontSize:"1.5rem"}} icon={faThermometerThreeQuarters} />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="ml-1">
                                            <p className="mt-3 mb-0 text-sm"></p>
                                            <p className="mt-3 mb-0 text-sm">
                                                <span className="text-warning mr-2">
                                                    <FontAwesomeIcon icon={faArrowUp} />
                                                    {bodyTemperature?bodyTemperature.percentage:0}%
                                                </span>
                                                <span className="text-nowrap">
                                                    {bodyTemperature?bodyTemperature.time:""}
                                                </span>
                                            </p>
                                        </Row>
                                    </Card.Body>
                                    <span className="ml-5">
                                            <span className="ml-5">
                                                <span className="ml-5">
                                                    <Link to="/remote-body-temperature" className="more-details ml-5" style={{position:"sticky"}}>
                                                        view more
                                                    </Link>
                                                </span>
                                            </span>
                                        </span>
                                </Card>
                                <Card className="mb-4" style={{ minWidth: '18rem',maxWidth:'19.6rem',borderRadius:"18px 18px 18px 18px" }} >
                                        <Card.Body>
                                            <Row>
                                                <Col xs={7}>
                                                    <Card.Subtitle style={{fontSize:"0.8rem"}} className="mb-1 text-muted"><b>GLUCOSE</b></Card.Subtitle>
                                                    <Card.Title className="mb-2">{glucose?glucose.reading:0} mg/dL</Card.Title>
                                                </Col>
                                                <Col>
                                                    <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                                        <FontAwesomeIcon style={{fontSize:"1.5rem"}} icon={faChartBar} />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="ml-1">
                                                <p className="mt-3 mb-0 text-sm"></p>
                                                <p className="mt-3 mb-0 text-sm">
                                                    <span className="text-warning mr-2">
                                                        <FontAwesomeIcon icon={faArrowUp} />
                                                        {glucose?glucose.percentage:0}%
                                                    </span>
                                                    <span className="text-nowrap">
                                                    {glucose?glucose.time:""}
                                                    </span>
                                                </p>
                                            </Row>
                                        </Card.Body>
                                        <span className="ml-5">
                                            <span className="ml-5">
                                                <span className="ml-5">
                                                    <Link to="/remote-glucose" className="more-details ml-5" style={{position:"sticky"}}>
                                                        view more
                                                    </Link>
                                                </span>
                                            </span>
                                        </span>
                                    </Card>
                                    <Card className="mb-4" style={{ minWidth: '18rem',maxWidth:'19.6rem',borderRadius:"18px 18px 18px 18px" }} >
                                        <Card.Body>
                                            <Row>
                                                <Col xs={7}>
                                                    <Card.Subtitle style={{fontSize:"0.8rem"}} className="mb-1 text-muted"><b>OXYGEN SATURATION</b></Card.Subtitle>
                                                    <Card.Title className="mb-2">{oxygenSaturation?oxygenSaturation.reading:0}%</Card.Title>
                                                </Col>
                                                <Col>
                                                    <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                                        <FontAwesomeIcon style={{fontSize:"1.5rem"}} icon={faHandHoldingMedical} />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="ml-1">
                                                <p className="mt-3 mb-0 text-sm"></p>
                                                <p className="mt-3 mb-0 text-sm">
                                                    <span className="text-danger mr-2">
                                                        <FontAwesomeIcon icon={faArrowUp} />
                                                        {oxygenSaturation?oxygenSaturation.percentage:0}%
                                                    </span>
                                                    <span className="text-nowrap">
                                                    {oxygenSaturation?oxygenSaturation.time:""}
                                                    </span>
                                                </p>
                                            </Row>
                                        </Card.Body>
                                        <span className="ml-5">
                                            <span className="ml-5">
                                                <span className="ml-5">
                                                    <Link to="/remote-oxygen-saturation" className="more-details ml-5" style={{position:"sticky"}}>
                                                        view more
                                                    </Link>
                                                </span>
                                            </span>
                                        </span>
                                    </Card>
                                    {/* <Card className="mb-4" style={{ minWidth: '18rem',maxWidth:'19.6rem', borderRadius:"18px 18px 18px 18px" }} >
                                        <Card.Body>
                                            <Row>
                                                <Col xs={7}>
                                                    <Card.Subtitle className="mb-1 text-muted"><b>HEALTH CHECK</b></Card.Subtitle>
                                                    <Card.Title className="text-success">{healthCheck?healthCheck.health_status:<span style={{color:"#000",fontSize:"1rem"}}>No data Available</span>}</Card.Title>
                                                </Col>
                                                <Col>
                                                    <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                                        <FontAwesomeIcon style={{fontSize:"1.5rem"}} icon={faFileMedical} />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="ml-1">
                                                <p className="mt-3 mb-0 text-sm"></p>
                                                <p className="mt-3 mb-0 text-sm">
                                                    <span className="text-nowrap">
                                                    {healthCheck?healthCheck.time:""}
                                                    </span>
                                                </p>
                                            </Row>
                                        </Card.Body>
                                        <span className="ml-5">
                                            <span className="ml-5">
                                                <span className="ml-5">
                                                    <Link to="/" className="more-details ml-5" style={{position:"sticky"}}>
                                                        view more
                                                    </Link>
                                                </span>
                                            </span>
                                        </span>
                                    </Card> */}
                            </CardDeck>    
                        </Container>
                        <Container style={{margin: "auto",width: "80%",border: "3px solid white",padding: "16px"}} fluid>
                        <h2 className="mt-4">Pills Tracking Information:</h2>

        {/* --------------------Table-------------------- */}

                        <TableContainer debuggMode={false} />

        {/* --------------------Table-------------------- */}


                        </Container>
                        <Container style={{margin: "auto",width: "80%",border: "3px solid white",padding: "16px"}} fluid>
                            
                            {/* Thanks to the following:
                                https://github.com/London-Language-Institute/markingcloud-front/blob/8b5255414fbdd5e63e3062142f0494596d031794/src/components/testSubmission/completeComponent.js#L162
                            */}
                            {/* <PDFDownloadLink
                                  document={
                                      <RemoteHealthReportPDFComponent />
                                  }
                                  fileName="pillshare-health-report.pdf">
                              {({ blob, url, loading, error }) =>
                                loading ? "-" : <FontAwesomeIcon className="m-1 text-danger mt-5 mb-5" style={{fontSize:"1.9rem",float:"right"}} icon={faPrint} />
                              }
                            </PDFDownloadLink> */}
                        </Container>
                        
                        {/* ----------------------The page content ends here---------------------- */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default RemoteDashboardComponent;
