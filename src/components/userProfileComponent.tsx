import React from 'react';
import { Row,Col,Card,Container,Table,Image,Form, Button } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge,faUser,faBalanceScale,faHistory,faShareAlt,faSignOutAlt,faMapMarkerAlt,faBriefcase,faUserAlt,faQuestionCircle, faRuler } from '@fortawesome/free-solid-svg-icons';
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Navbar,
    Nav,
    Media
  } from "reactstrap";
import { Link } from 'react-router-dom';

import '../App.css';
import logo from '../img/logo.png';
import bg from '../img/bg-image.jpg';
import pro from '../img/pro-pic.jpg';


interface TableProps {

}

interface IProps {
    showSettings: (event: React.SyntheticEvent) => void;
}
const UserProfileComponent = (props: IProps) : JSX.Element => {
    return(
        <React.Fragment>
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
            <div id="page-wrap" style={{height: "100%",overflow:"auto"}}>
                {/* ----------------------The page content starts here---------------------- */}

                {/* --- Navigation ---*/}
                <Navbar className="navbar-top navbar-dark" expand="md" id="navigation" >
                    <Container fluid>
                        <Link
                        className="ml-5 h4 mb-0 text-white text-uppercase d-lg-inline-block"
                        to="/"
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
                
                {/* Header container */}
                <Container className="d-flex align-items-center header pt-5 pt-lg-8" style={{position:"absolute",
                    minHeight: "600px",
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top"
                    }} fluid
                    >
                        <Row>
                            <Col lg="12" md="12">
                                <h1 className="display-2 text-white">Hello Frank!</h1>
                                <p className="text-white mt-0 mb-5">
                                <h4>Welcome to the Pillshare Daily Medication Tracker app.</h4>
                                Please fill out this profile and then the app will unlock the other features for you.
                                </p>
                            </Col>
                        </Row>
                </Container>

                {/* Body container */}
                <Container style={{paddingTop:"25rem"}} className="mt-5" fluid>
                    <Row className="mt-5">
                        <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                            <Card className="card-profile shadow">
                                <Row className="justify-content-center">
                                    <Col className="order-lg-2" lg="3">
                                        <div className="card-profile-image">
                                            <Link to="/" onClick={e => e.preventDefault()}>
                                                <img
                                                alt="..."
                                                className="rounded-circle"
                                                src={pro}
                                                width="100rem"
                                                height="100rem"
                                                />
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                                <Card.Header className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                <div className="d-flex justify-content-between mt-4"></div>
                                </Card.Header>
                                <Card.Body className="pt-0 pt-md-4">
                                    <div className="text-center mt-4">
                                        <h3>
                                            Frank Herbert
                                            <span className="font-weight-light">, 25</span>
                                        </h3>
                                        <div className="h5 font-weight-300">
                                            <FontAwesomeIcon className="ni mr-2" icon={faMapMarkerAlt} />
                                            London, Ontario, Canada
                                        </div>
                                        <div className="h5 mt-4">
                                            <FontAwesomeIcon className="ni mr-2" icon={faBriefcase} />
                                            Customer Service Manager - Walmart
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="order-xl-1" xl="8">
                            <Card className="bg-white shadow mb-4">
                                <Card.Header className="bg-light border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h3 className="mb-0">My Account</h3>
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body>
                                    <Form>
                                        <span className="bg-light border-0">
                                            <Row className="align-items-center">
                                                <Col xs="8">
                                                    <h6 className="heading-small text-muted mb-4">
                                                        User information
                                                    </h6>
                                                </Col>
                                                <Col className="text-right" xs="4">
                                                    <Button
                                                        color="primary"
                                                        onClick={e => e.preventDefault()}
                                                        size="sm"
                                                    >
                                                        Update
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </span>
                                        <div className="pl-lg-4">
                                            <Form.Row>
                                                <Form.Group as={Col} xs="5" md="4" lg="3" controlId="formGridUsername">
                                                    <label
                                                    className="form-control-label"
                                                    htmlFor="input-username"
                                                    >
                                                    Username
                                                    </label>
                                                    <Form.Control
                                                        readOnly 
                                                        required
                                                        type="text"
                                                        placeholder="Username"
                                                        defaultValue="frank123"
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="7" md="4" lg="3" controlId="formGridEmail">
                                                    <label
                                                    className="form-control-label"
                                                    htmlFor="input-email"
                                                    >
                                                    Email address
                                                    </label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="email"
                                                        placeholder="Email Address"
                                                        defaultValue="frank@gmail.com"
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridFName">
                                                    <Form.Label>First Name</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="First Name"
                                                        defaultValue="Frank"
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="6" md="4" lg="3" controlId="formGridMName">
                                                    <Form.Label>Middle Name</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="Middle Name"
                                                        defaultValue=""
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridLName">
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control
                                                            readOnly
                                                            required
                                                            type="text"
                                                            placeholder="Middle Name"
                                                            defaultValue="Herbert"
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} xs="3" md="3" lg="3" controlId="formGridAge">
                                                    <Form.Label>Age</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="number"
                                                        placeholder="Age"
                                                        defaultValue="25"
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridGender">
                                                    <Form.Label>Gender</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="Gender"
                                                        defaultValue="Male"
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="7" md="3" lg="4" controlId="formGridDOB">
                                                    <Form.Label>Date of Birth</Form.Label>
                                                    <Form.Control
                                                            readOnly
                                                            required
                                                            type="date"
                                                            placeholder="Date of Birth"
                                                            defaultValue="1995-04-01"
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                        </div>
                                        <hr className="my-4" />

                                        {/* Contact Information */}
                                        <span className="bg-light border-0">
                                            <Row className="align-items-center">
                                                <Col xs="8">
                                                    <h6 className="heading-small text-muted mb-4">
                                                        Contact information
                                                    </h6>
                                                </Col>
                                                <Col className="text-right" xs="4">
                                                    <Button
                                                        color="primary"
                                                        onClick={e => e.preventDefault()}
                                                        size="sm"
                                                    >
                                                        Update
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </span>
                                        <div className="pl-lg-4">
                                            <Form.Row>
                                                <Form.Group as={Col} xs="10" md="6" lg="7" controlId="formGridAddress">
                                                    <Form.Label>Address</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="Address"
                                                        defaultValue="720 Wellington Road South"
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridCity">
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="City"
                                                        defaultValue="London"
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="6" md="4" lg="3" controlId="formGridState">
                                                    <Form.Label>Province/State</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="Province/State"
                                                        defaultValue="Ontario"
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridCountry">
                                                    <Form.Label>Country</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="Country"
                                                        defaultValue="Canada"
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} xs="5" md="4" lg="3" controlId="formGridZip">
                                                    <Form.Label>Zip</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="Zip"
                                                        defaultValue="N6G 3P8"
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="7" md="4" lg="3" controlId="formGridPhoneNumber">
                                                    <Form.Label>Phone Number</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="tel"
                                                        placeholder="Province/State"
                                                        pattern="[+]{} [0-9]{3}-[0-9]{3}-[0-9]{3}"
                                                        defaultValue="+1123-456-345"
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                        </div>
                                        <hr className="my-4" />

                                        {/* Health Information */}
                                        <span className="bg-light border-0">
                                            <Row className="align-items-center">
                                                <Col xs="8">
                                                    <h6 className="heading-small text-muted mb-4">
                                                        Health information
                                                    </h6>
                                                </Col>
                                                <Col className="text-right" xs="4">
                                                    <Button
                                                        color="primary"
                                                        onClick={e => e.preventDefault()}
                                                        size="sm"
                                                    >
                                                        Update
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </span>
                                        <div className="pl-lg-4">
                                            <Form.Row>
                                                <Form.Group as={Col} xs="5" md="4" lg="3" controlId="formGridWeight">
                                                    <Form.Label>Weight</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="Weight"
                                                        defaultValue="160 pounds"
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridHeight">
                                                    <Form.Label>Height</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="Height"
                                                        defaultValue="173 cm"
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="7" md="4" lg="3" controlId="formGridBMI">
                                                    <Form.Label>Body Mass Index</Form.Label>
                                                    <Form.Control
                                                        disabled
                                                        required
                                                        type="text"
                                                        placeholder="BMI"
                                                        defaultValue="24.5"
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridBG">
                                                    <Form.Label>Blood Group</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="Blood Group"
                                                        defaultValue="O+"
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="10" md="6" lg="7" controlId="formGridHealthIssues">
                                                    <Form.Label>Underlying Health Issues</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="select"
                                                        placeholder="Underlying Health Issues"
                                                        defaultValue="Obesity,Diabetics,Cardiovascular disease"
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="10" md="6" lg="7" controlId="formGridOtherHealthIssues">
                                                    <Form.Label>Other Health Issues</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="select"
                                                        placeholder="Other Health Issues"
                                                        defaultValue="Fever,Allergy,Fractures"
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                        </div>
                                        <hr className="my-4" />

                                        {/* Medication Information */}
                                        <span className="bg-light border-0">
                                            <Row className="align-items-center">
                                                <Col xs="8">
                                                    <h6 className="heading-small text-muted mb-4">
                                                        Medical information
                                                    </h6>
                                                </Col>
                                                <Col className="text-right" xs="4">
                                                    <Button
                                                        color="primary"
                                                        onClick={e => e.preventDefault()}
                                                        size="sm"
                                                    >
                                                        Update
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </span>
                                        <div className="pl-lg-4" style={{margin: "auto"}}>
                                            <Table className="mt-3" responsive striped bordered hover>
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
                                        </div>
                                        <hr className="my-4" />

                                        {/* Profile Information */}
                                        <span className="bg-light border-0">
                                            <Row className="align-items-center">
                                                <Col xs="8">
                                                    <h6 className="heading-small text-muted mb-4">
                                                        Unique Id information
                                                    </h6>
                                                </Col>
                                            </Row>
                                        </span>
                                        <div className="pl-lg-4" style={{margin: "auto"}}>
                                            <Form.Row>
                                                <Form.Group as={Col} xs="4" md="3" lg="3" controlId="formGridWeight">
                                                    <Form.Label>Username</Form.Label>
                                                    <Form.Control
                                                        disabled
                                                        type="text"
                                                        placeholder="Username"
                                                        defaultValue="Frank"
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} xs="10" md="5" lg="5" controlId="formGridWeight">
                                                    <Form.Label>UUID</Form.Label>
                                                    <Form.Control
                                                        disabled
                                                        type="text"
                                                        placeholder="UUID"
                                                        defaultValue="308ef15c-6c35-4bef-b5b1-ac8196dab813"
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                {/* ----------------------The page content ends here---------------------- */}
            </div>
        </React.Fragment>
    );
}
export default UserProfileComponent;



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