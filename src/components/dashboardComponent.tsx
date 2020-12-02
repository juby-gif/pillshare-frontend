import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge,faUser,faBalanceScale,faHistory,faShareAlt,faSignOutAlt,faArrowUp,faHeart,faChartLine,faArrowDown,faThermometerThreeQuarters,faChartBar,faHandHoldingMedical,faFileMedical,faExclamationCircle,faCheckCircle,faQuestionCircle, faUserAlt, faRuler } from '@fortawesome/free-solid-svg-icons';
import { Row,Col,Card,Container,CardDeck,Table,Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Media,
} from "reactstrap";

import '../App.css';
import logo from '../img/logo.png';
import pro from '../img/pro-pic.jpg';


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
  


const DashboardComponent = (props: IProps) : JSX.Element => {
    const { 
        alertsResponded,
        alertsSent,
        bloodPressure,
        bodyTemperature,
        glucose,
        healthCheck,
        heartRate,
        medicalInformation,
        oxygenSaturation,
    } = props;
    return(
        <React.Fragment>
            <div id="app" style={{height: "100%"}}>
                <div id="outer-container" style={{height: "100%"}}>
                    <Menu width={ '280px' } >
                        <Image className="menu rounded img-fluid mb-5" style={{display: "block",marginLeft: "auto",marginRight: "auto"}} src={logo} width="120rem" height="100rem"/>
                        <Link id="dashboard" className="menu ml-1 p-2" to="/dashboard"><FontAwesomeIcon icon={faThLarge} />&nbsp;&nbsp;&nbsp;Dashboard</Link>
                        <Link id="profile" className="menu ml-1 p-2" to="/user-profile"><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;Account</Link>
                        <Link id="measure" className="menu p-2" to="/measurement"><FontAwesomeIcon icon={faRuler} />&nbsp;&nbsp;Measurement</Link>
                        <Link id="health-check" className="menu p-2" to="/health-check"><FontAwesomeIcon icon={faBalanceScale} />&nbsp;&nbsp;Health Check</Link>
                        <Link id="medication-history" className="menu ml-1 p-2" to="/medication-logs"><FontAwesomeIcon icon={faHistory} />&nbsp;&nbsp;Medication logs</Link>
                        <Link id="share" className="menu ml-1 p-2" to="/"><FontAwesomeIcon icon={faShareAlt} />&nbsp;&nbsp;Share</Link>
                        <Link id="logout" className="menu ml-1 p-2" to="/"><FontAwesomeIcon icon={faSignOutAlt} />&nbsp;&nbsp;Logout</Link>
                    </Menu>
                    <div className="" id="page-wrap" style={{height: "100%",overflow:"auto"}}>
                        {/* ----------------------The page content starts here---------------------- */}

                        {/* --- Navigation ---*/}
                        <Navbar className="navbar-top navbar-dark" expand="md" id="navigation" >
                            <Container fluid>
                                <Link
                                className="ml-5 h4 mb-0 text-white text-uppercase d-lg-inline-block"
                                to="none"
                                style={{textShadow: "0 0 10px rgba(0,0,0,1.5)"}}
                                >
                                    Pillshare
                                </Link>
                                <Nav className="align-items-center d-md-flex" navbar>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <Media className="align-items-center">
                                                <span className="avatar avatar-sm rounded-circle">
                                                    <img
                                                        alt="..."
                                                        src={pro}
                                                    />
                                                </span>
                                                <Media className="ml-2 d-lg-block">
                                                    <span className="mb-0 text-sm font-weight-bold">
                                                        Frank Herbert
                                                    </span>
                                                </Media>
                                            </Media>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                            <DropdownItem header >
                                                <h6 style={{fontSize: ".820rem"}} className="text-overflow m-0">Welcome!</h6>
                                            </DropdownItem>
                                            <DropdownItem to="/user-profile" tag={Link}>
                                                <FontAwesomeIcon className="mr-2" icon={faUserAlt} />
                                                <span>My profile</span>
                                            </DropdownItem>
                                            {/*------------------- For Phase 2 ------------------- */}

                                            {/* <DropdownItem to="/admin/user-profile" tag={Link}>
                                                <i className="ni ni-settings-gear-65" />
                                                <span>Settings</span>
                                            </DropdownItem> */}
                                            {/* <DropdownItem to="/admin/user-profile" tag={Link}>
                                                <i className="ni ni-calendar-grid-58" />
                                                <span>Activity</span>
                                            </DropdownItem> */}
                                            <DropdownItem to="#help" tag={Link}>
                                                <FontAwesomeIcon className="mr-2" icon={faQuestionCircle} />   
                                                <span>Help</span>
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem to="/login" tag={Link} onClick={e => e.preventDefault()}>
                                                <FontAwesomeIcon className="mr-2" icon={faSignOutAlt} />
                                                <span>Logout</span>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            </Container>
                        </Navbar>
                        {/* --- Navigation ---*/}

                        <Container style={{margin: "auto",width: "80%",border: "3px solid white",padding: "16px"}} fluid>
                            <CardDeck>
                                <Card className="mb-4" style={{ minWidth: '18rem',maxWidth:'19.6rem',borderRadius:"18px 18px 18px 18px" }} >
                                    <Card.Body>
                                        <Row>
                                            <Col xs={7}>
                                                <Card.Subtitle className="mb-1 text-muted"><b>HEART RATE</b></Card.Subtitle>
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
                                                <Link to="/" className="more-details ml-5" style={{position:"sticky"}}>
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
                                                <Card.Subtitle className="mb-1 text-muted"><b>BLOOD PRESSURE</b></Card.Subtitle>
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
                                                    <Link to="/" className="more-details ml-5" style={{position:"sticky"}}>
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
                                                <Card.Subtitle className="mb-1 text-muted"><b>BODY TEMPERATURE</b></Card.Subtitle>
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
                                                    <Link to="/" className="more-details ml-5" style={{position:"sticky"}}>
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
                                                    <Card.Subtitle className="mb-1 text-muted"><b>GLUCOSE</b></Card.Subtitle>
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
                                                    <Link to="/" className="more-details ml-5" style={{position:"sticky"}}>
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
                                                    <Card.Subtitle className="mb-1 text-muted"><b>OXYGEN SATURATION</b></Card.Subtitle>
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
                                                    <Link to="/" className="more-details ml-5" style={{position:"sticky"}}>
                                                        view more
                                                    </Link>
                                                </span>
                                            </span>
                                        </span>
                                    </Card>
                                    <Card className="mb-4" style={{ minWidth: '18rem',maxWidth:'19.6rem', borderRadius:"18px 18px 18px 18px" }} >
                                        <Card.Body>
                                            <Row>
                                                <Col xs={7}>
                                                    <Card.Subtitle className="mb-1 text-muted"><b>HEALTH CHECK</b></Card.Subtitle>
                                                    <Card.Title className="text-success">{healthCheck?healthCheck.health_status:""}</Card.Title>
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
                                    </Card>
                            </CardDeck>    
                        </Container>
                        <Container style={{margin: "auto",width: "80%",border: "3px solid white",padding: "16px"}} fluid>
                        <h2 className="mt-4">Pills Tracking Information:</h2>
                        <Table style={{backgroundColor:"#fff"}} size="sm" className="mt-3" responsive="xl" bordered hover={false}>
                            <thead style={{backgroundColor:"#fff"}}>
                                <tr>
                                    <th>SL.No</th>
                                    <th>Pill Name</th>
                                    <th>Dose</th>
                                    <th>Dosage</th>
                                    <th>Before / After Food</th>
                                    <th>Duration</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Prescribed Intervals</th>
                                    <th>Reason for taking this medication</th>
                                    <th>Taken / Missed</th>
                                </tr>
                            </thead>
                            <tbody style={{backgroundColor:"#fff"}}>
                            {medicalInformation!.map((info) => (
                                    <tr>
                                        <td>
                                            {info.id}
                                        </td>
                                        <td>
                                            {info.name}
                                        </td>
                                        <td>
                                            {info.dose}
                                        </td>
                                        <td>
                                            {info.dosage}
                                        </td>
                                        <td>
                                            {info.before_or_after}
                                        </td>
                                        <td>
                                            {info.duration}
                                        </td>
                                        <td>
                                            {info.start_date}
                                        </td>
                                        <td>
                                            {info.end_date}
                                        </td>
                                        <td>
                                            <Table borderless={true} hover={false} variant="light" responsive="xl">
                                                <thead>
                                                    <tr>
                                                        <td>
                                                            <th>
                                                                Part
                                                            </th>
                                                        </td>
                                                        <td>
                                                            <th>
                                                                Time
                                                            </th>
                                                        </td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            {info.intervals.part.map((part)=>
                                                                <tr>
                                                                    {part}
                                                                </tr>)}
                                                        </td>
                                                        <td>
                                                            {info.intervals.time.map((time)=>
                                                                <tr>
                                                                    {time}
                                                                </tr>)}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </td>
                                        <td>
                                            {info.reason} 
                                        </td>
                                        <td>
                                            {info.reason} 
                                        </td>
                                    </tr>
                            ))}
                            
                            </tbody>
                        </Table>
                        </Container>
                        <Container style={{margin: "auto",width: "80%",border: "3px solid white",padding: "16px"}} fluid>
                            <Card id="alert-issued" className="mb-4 mr-4" style={{ minWidth: '16rem',maxWidth:'16rem',minHeight:"7rem",maxHeight:"7rem", borderRadius:"18px 18px 18px 18px" }} >
                                <Card.Body>
                                    <Row>
                                        <Col xs={7}>
                                            <Card.Subtitle className="mb-1 text-muted"><b>ALERTS SENT</b></Card.Subtitle>
                                            <Card.Title className="text-success">{alertsSent}</Card.Title>
                                        </Col>
                                        <Col>
                                            <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                                <FontAwesomeIcon style={{fontSize:"1.9rem"}} icon={faExclamationCircle} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card id="alert-responded" className="mb-4 mr-4" style={{display: "block", minWidth: '16rem',maxWidth:'16rem',minHeight:"7rem",maxHeight:"7rem", borderRadius:"18px 18px 18px 18px" }} >
                                <Card.Body>
                                    <Row>
                                        <Col xs={7}>
                                            <Card.Subtitle className="mb-1 text-muted"><b>ALERTS RESPONDED</b></Card.Subtitle>
                                        <Card.Title className="text-danger">{alertsResponded}</Card.Title>
                                        </Col>
                                        <Col>
                                            <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                                <FontAwesomeIcon style={{fontSize:"1.9rem"}} icon={faCheckCircle} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card> 
                        </Container>
                        
                        {/* ----------------------The page content ends here---------------------- */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default DashboardComponent;
