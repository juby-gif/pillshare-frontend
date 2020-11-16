import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge,faUser,faBalanceScale,faHistory,faShareAlt,faSignOutAlt,faArrowUp,faHeart,faChartLine,faArrowDown,faThermometerThreeQuarters,faChartBar,faHandHoldingMedical,faFileMedical,faExclamationCircle,faCheckCircle,faQuestionCircle, faUserAlt } from '@fortawesome/free-solid-svg-icons';
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
    showSettings: (event: React.SyntheticEvent) => void;
}

interface TableProps {

}

const DashboardComponent = (props: IProps) : JSX.Element => {
    return(
        <React.Fragment>
            <div id="app" style={{height: "100%"}}>
                <div id="outer-container" style={{height: "100%"}}>
                    <Menu width={ '280px' } >
                        <Image className="menu rounded img-fluid mb-5" style={{display: "block",marginLeft: "auto",marginRight: "auto"}} src={logo} width="120rem" height="100rem"/>
                        <Link id="dashboard" className="menu ml-1 p-2" to="/dashboard"><FontAwesomeIcon icon={faThLarge} />&nbsp;&nbsp;&nbsp;Dashboard</Link>
                        <Link id="profile" className="menu ml-1 p-2" to="/user-profile"><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;Account</Link>
                        <Link id="health-check" className="menu p-2" to="/"><FontAwesomeIcon icon={faBalanceScale} />&nbsp;&nbsp;Health Check</Link>
                        <Link id="medication-history" className="menu ml-1 p-2" to="/"><FontAwesomeIcon icon={faHistory} />&nbsp;&nbsp;Medication logs</Link>
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
                                                <Card.Title className="mb-2">84 beats/min</Card.Title>
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
                                                    3.48%
                                                </span>
                                                <span className="text-nowrap">
                                                    Since last month
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
                                                <Card.Title className="mb-2">120/80 mmHg</Card.Title>
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
                                                    2.01%
                                                </span>
                                                <span className="text-nowrap">
                                                    Since 9am today
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
                                                <Card.Title className="mb-2">102.2°F (39°C)</Card.Title>
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
                                                    2.45%
                                                </span>
                                                <span className="text-nowrap">
                                                    Since yesterday
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
                                                    <Card.Title className="mb-2">140 mg/dL</Card.Title>
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
                                                        0.02%
                                                    </span>
                                                    <span className="text-nowrap">
                                                        Since friday
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
                                                    <Card.Title className="mb-2">89%</Card.Title>
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
                                                        1.50%
                                                    </span>
                                                    <span className="text-nowrap">
                                                        Since yesterday
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
                                                    <Card.Title className="text-success">Improving</Card.Title>
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
                                                    <span className="text-success mr-2">
                                                        <FontAwesomeIcon icon={faArrowUp} />
                                                        1.50%
                                                    </span>
                                                    <span className="text-nowrap">
                                                        Since monday
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
                        <Table className="mt-3" responsive="xl" striped bordered hover>
                            <thead>
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
                            <TableBodyComponent />
                        </Table>
                        </Container>
                        <Container style={{margin: "auto",width: "80%",border: "3px solid white",padding: "16px"}} fluid>
                            <Card id="alert-issued" className="mb-4 mr-4" style={{ minWidth: '16rem',maxWidth:'16rem',minHeight:"7rem",maxHeight:"7rem", borderRadius:"18px 18px 18px 18px" }} >
                                <Card.Body>
                                    <Row>
                                        <Col xs={7}>
                                            <Card.Subtitle className="mb-1 text-muted"><b>ALERTS SENT</b></Card.Subtitle>
                                            <Card.Title className="text-success">23</Card.Title>
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
                                            <Card.Title className="text-danger">22</Card.Title>
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


const TableBodyComponent = (props:TableProps):JSX.Element => {

    return (
        <tbody>
            <tr>
                <td>1</td>
                <td>Hydrocodone</td>
                <td>2 tablets</td>
                <td>EOD</td>
                <td>Before</td>
                <td>30</td>
                <td>21-03-2020</td>
                <td>21-04-2020</td>
                <td>Morning - 9:30am,Night - 8:45pm</td>
                <td>pain medication</td>
                <td>Morning-Taken,Night-Missed</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Simvastatin</td>
                <td>1 tablet</td>
                <td>SID</td>
                <td>After</td>
                <td>30</td>
                <td>21-03-2020</td>
                <td>21-04-2020</td>
                <td>Night - 8:45pm</td>
                <td>to lower the number of triglycerides and LDL</td>
                <td>Night-Taken</td>
            </tr>
        </tbody>
    );
}