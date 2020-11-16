import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge,faUser,faBalanceScale,faHistory,faShareAlt,faSignOutAlt,faArrowUp,faHeart,faChartLine,faArrowDown,faThermometerThreeQuarters,faChartBar,faHandHoldingMedical,faFileMedical,faExclamationCircle,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Row,Col,Card,Container,CardDeck,Table,Image } from 'react-bootstrap';

import '../App.css';
import logo from '../img/logo.png';


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
                    <Menu width={'280px'} >
                        <Image className="rounded img-fluid mb-5" style={{display: "block",marginLeft: "auto",marginRight: "auto"}} src={logo} width="120rem" height="100rem"/>
                        <a id="dashboard" className="ml-1 p-2" href="/dashboard"><FontAwesomeIcon icon={faThLarge} />&nbsp;&nbsp;&nbsp;Dashboard</a>
                        <a id="profile" className="ml-1 p-2" href="/user-profile"><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;Account</a>
                        <a id="health-check" className="p-2" href="/"><FontAwesomeIcon icon={faBalanceScale} />&nbsp;&nbsp;Health Check</a>
                        <a id="medication-history" className="ml-1 p-2" href="/"><FontAwesomeIcon icon={faHistory} />&nbsp;&nbsp;Medication logs</a>
                        <a id="share" className="ml-1 p-2" href="/"><FontAwesomeIcon icon={faShareAlt} />&nbsp;&nbsp;Share</a>
                        <a id="logout" className="ml-1 p-2" href="/"><FontAwesomeIcon icon={faSignOutAlt} />&nbsp;&nbsp;Logout</a>
                    </Menu>
                    <div className="p-5" id="page-wrap" style={{height: "100%",overflow:"auto"}}>
                        {/* ----------------------The page content starts here---------------------- */}
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
                                                <a href="/" className="more-details ml-5" style={{position:"sticky"}}>
                                                    view more
                                                </a>
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
                                                    <a href="/" className="more-details ml-5" style={{position:"sticky"}}>
                                                        view more
                                                    </a>
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
                                                    <a href="/" className="more-details ml-5" style={{position:"sticky"}}>
                                                        view more
                                                    </a>
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
                                                    <a href="/" className="more-details ml-5" style={{position:"sticky"}}>
                                                        view more
                                                    </a>
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
                                                    <a href="/" className="more-details ml-5" style={{position:"sticky"}}>
                                                        view more
                                                    </a>
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
                                                    <a href="/" className="more-details ml-5" style={{position:"sticky"}}>
                                                        view more
                                                    </a>
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