import React from 'react';
import { Row,Col,Card,Container,Table,Form, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import '../App.css';
import bg from '../img/bg-image.jpg';
import pro from '../img/pro-pic.jpg';
import SidebarComponent from '../Menu/sideBarComponent';
import NavigationComponent from '../Menu/navigationComponent';


interface TableProps {

}

interface IProps {
    onWeightChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onHeightChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBodyMassIndexCalculation : (event:React.SyntheticEvent) => void;
    
    // User Information Update 
    onUserInfoClick : (event: React.SyntheticEvent) => void;
    onFirstNameChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    onMiddleNameChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    onLastNameChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    onUsernameChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEmailChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAgeChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDOBChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    onUserInfoSaveClick : (event: React.SyntheticEvent) => void;
    onUserInfoBackClick : (event: React.SyntheticEvent) => void;

    // Contact Information Update
    onContactInfoClick : (event: React.SyntheticEvent) => void;
    onContactInfoSaveClick : (event: React.SyntheticEvent) => void;
    onContactInfoBackClick : (event: React.SyntheticEvent) => void;

    // Health Information Update
    onHealthInfoClick : (event: React.SyntheticEvent) => void;
    onHealthInfoSaveClick : (event: React.SyntheticEvent) => void;
    onHealthInfoBackClick : (event: React.SyntheticEvent) => void;

    // Medical Information Update
    onMedicalInfoClick : (event: React.SyntheticEvent) => void;
    onMedicalInfoSaveClick : (event: React.SyntheticEvent) => void;
    onMedicalInfoBackClick : (event: React.SyntheticEvent) => void;

    userShow: boolean;
    contactShow: boolean;
    healthShow: boolean;
    medicalShow: boolean;
    firstName: string,
    middleName: string,
    lastName: string,
    username: string,
    email: string,
    weight: string;
    height: string;
    age:number,
    gender:string,
    dob:string,
    address:string,
    city:string,
    province:string,
    country:string,
    zip:string,
    phone:string,
    bmi:string,
    bloodGroup:string,
    underlyingHealthIssues:string[],
    otherHealthIssues:string[],
    userUpdate:boolean;
}
const UserProfileComponent = (props: IProps) : JSX.Element => {
    const { firstName,
            middleName,
            lastName,
            username,
            email,
            weight,
            height,
            age,
            gender,
            dob,
            address,
            city,
            province,
            country,
            zip,
            phone,
            bmi,
            bloodGroup,
            underlyingHealthIssues,
            otherHealthIssues,
            userShow,
            contactShow,
            healthShow,
            medicalShow,

            // User Information Update
            onUserInfoClick,
            onUsernameChange,
            onFirstNameChange,
            onMiddleNameChange,
            onLastNameChange,
            onEmailChange,
            onDOBChange,
            onAgeChange,
            onUserInfoSaveClick,
            onUserInfoBackClick,

            // Contact Information Update
            onContactInfoClick,
            onContactInfoSaveClick,
            onContactInfoBackClick,

            // Health Information Update
            onHealthInfoClick,
            onHealthInfoSaveClick,
            onHealthInfoBackClick,

            // Medical Information Update
            onMedicalInfoClick,
            onMedicalInfoSaveClick,
            onMedicalInfoBackClick
        } =  props;
    return(
        <React.Fragment>
            {/* --- Sidebar ---*/}
            <SidebarComponent />
            {/* --- Sidebar ---*/}
                    
            <div className="" id="page-wrap" style={{height: "100%",overflow:"auto"}}>
                {/* ----------------------The page content starts here---------------------- */}

                {/* --- Navigation ---*/}
                <NavigationComponent />
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
                                <h1 className="display-2 text-white">Hello {firstName}!</h1>
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
                                            {firstName} {lastName}
                                            <span className="font-weight-light">, {age}</span>
                                        </h3>
                                        <div className="h5 font-weight-300">
                                            <FontAwesomeIcon className="ni mr-2" icon={faMapMarkerAlt} />
                                            {city}, {province}, {country}
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
                                                        onClick={onUserInfoClick}
                                                        size="sm"
                                                    >
                                                        Update
                                                    </Button>


                                                    {/* User Information Update Modal */}

                                                    <Modal backdrop="static" keyboard={false} size="lg" show={userShow} aria-labelledby="contained-modal-title-vcenter">
                                                        <Modal.Header>
                                                            <Modal.Title className="d-flex justify-content-center" id="contained-modal-title-vcenter">
                                                            <span>User Information</span>
                                                            </Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body className="show-grid">
                                                            <Container>
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
                                                                                required
                                                                                type="text"
                                                                                placeholder="Username"
                                                                                value={username}
                                                                                onChange={onUsernameChange}
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
                                                                                required
                                                                                type="email"
                                                                                placeholder="Email Address"
                                                                                value={email}
                                                                                onChange={onEmailChange}
                                                                            />
                                                                        </Form.Group>
                                                                    </Form.Row>
                                                                    <Form.Row>
                                                                        <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridFName">
                                                                            <Form.Label>First Name</Form.Label>
                                                                            <Form.Control
                                                                                required
                                                                                type="text"
                                                                                placeholder="First Name"
                                                                                value={firstName}
                                                                                onChange={onFirstNameChange}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} xs="6" md="4" lg="3" controlId="formGridMName">
                                                                            <Form.Label>Middle Name</Form.Label>
                                                                            <Form.Control
                                                                                required
                                                                                type="text"
                                                                                placeholder="Middle Name"
                                                                                value={middleName}
                                                                                onChange={onMiddleNameChange}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridLName">
                                                                            <Form.Label>Last Name</Form.Label>
                                                                            <Form.Control
                                                                                    required
                                                                                    type="text"
                                                                                    placeholder="Last Name"
                                                                                    value={lastName}
                                                                                    onChange={onLastNameChange}
                                                                            />
                                                                        </Form.Group>
                                                                    </Form.Row>
                                                                    <Form.Row>
                                                                        <Form.Group as={Col} xs="3" md="3" lg="3" controlId="formGridAge">
                                                                            <Form.Label>Age</Form.Label>
                                                                            <Form.Control
                                                                                required
                                                                                type="number"
                                                                                placeholder="Age"
                                                                                value={age}
                                                                                onChange={onAgeChange}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridGender">
                                                                            <Form.Label>Gender</Form.Label>
                                                                            <Form.Control
                                                                                required
                                                                                type="radio"
                                                                                name="gender"
                                                                                placeholder="Gender"
                                                                                value={gender}
                                                                            />
                                                                            <Form.Control
                                                                                required
                                                                                type="text"
                                                                                name="gender"
                                                                                placeholder="Gender"
                                                                                value={gender}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} xs="7" md="3" lg="4" controlId="formGridDOB">
                                                                            <Form.Label>Date of Birth</Form.Label>
                                                                            <Form.Control
                                                                                    required
                                                                                    type="date"
                                                                                    placeholder="Date of Birth"
                                                                                    value={dob}
                                                                                    onChange={onDOBChange}
                                                                            />
                                                                        </Form.Group>
                                                                    </Form.Row>
                                                                </div>
                                                            </Container>
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button onClick={onUserInfoSaveClick}>Save</Button>
                                                            <Button onClick={onUserInfoBackClick}>Back</Button>
                                                        </Modal.Footer>
                                                    </Modal>

                                                    {/* User Information Update Modal */}


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
                                                        value={username}
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
                                                        value={email}
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
                                                        value={firstName}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="6" md="4" lg="3" controlId="formGridMName">
                                                    <Form.Label>Middle Name</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="Middle Name"
                                                        value={middleName}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridLName">
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control
                                                            readOnly
                                                            required
                                                            type="text"
                                                            placeholder="Last Name"
                                                            value={lastName}
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
                                                        value={age}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridGender">
                                                    <Form.Label>Gender</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="Gender"
                                                        value={gender}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="7" md="3" lg="4" controlId="formGridDOB">
                                                    <Form.Label>Date of Birth</Form.Label>
                                                    <Form.Control
                                                            readOnly
                                                            required
                                                            type="date"
                                                            placeholder="Date of Birth"
                                                            value={dob}
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
                                                        onClick={onContactInfoClick}
                                                        size="sm"
                                                    >
                                                        Update
                                                    </Button>


                                                    {/* Contact Information Update Modal */}

                                                    <Modal backdrop="static" keyboard={false} size="lg" show={contactShow} aria-labelledby="contained-modal-title-vcenter">
                                                        <Modal.Header>
                                                            <Modal.Title className="d-flex justify-content-center" id="contained-modal-title-vcenter">
                                                            <span>Contact Information</span>
                                                            </Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body className="show-grid">
                                                            <Container>
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
                                                                                required
                                                                                type="text"
                                                                                placeholder="Username"
                                                                                value={username}
                                                                                onChange={onUsernameChange}
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
                                                                                required
                                                                                type="email"
                                                                                placeholder="Email Address"
                                                                                value={email}
                                                                                onChange={onEmailChange}
                                                                            />
                                                                        </Form.Group>
                                                                    </Form.Row>
                                                                    <Form.Row>
                                                                        <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridFName">
                                                                            <Form.Label>First Name</Form.Label>
                                                                            <Form.Control
                                                                                required
                                                                                type="text"
                                                                                placeholder="First Name"
                                                                                value={firstName}
                                                                                onChange={onFirstNameChange}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} xs="6" md="4" lg="3" controlId="formGridMName">
                                                                            <Form.Label>Middle Name</Form.Label>
                                                                            <Form.Control
                                                                                required
                                                                                type="text"
                                                                                placeholder="Middle Name"
                                                                                value={middleName}
                                                                                onChange={onMiddleNameChange}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridLName">
                                                                            <Form.Label>Last Name</Form.Label>
                                                                            <Form.Control
                                                                                    required
                                                                                    type="text"
                                                                                    placeholder="Last Name"
                                                                                    value={lastName}
                                                                                    onChange={onLastNameChange}
                                                                            />
                                                                        </Form.Group>
                                                                    </Form.Row>
                                                                    <Form.Row>
                                                                        <Form.Group as={Col} xs="3" md="3" lg="3" controlId="formGridAge">
                                                                            <Form.Label>Age</Form.Label>
                                                                            <Form.Control
                                                                                required
                                                                                type="number"
                                                                                placeholder="Age"
                                                                                value={age}
                                                                                onChange={onAgeChange}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridGender">
                                                                            <Form.Label>Gender</Form.Label>
                                                                            <Form.Control
                                                                                required
                                                                                type="radio"
                                                                                name="gender"
                                                                                placeholder="Gender"
                                                                                value={gender}
                                                                            />
                                                                            <Form.Control
                                                                                required
                                                                                type="text"
                                                                                name="gender"
                                                                                placeholder="Gender"
                                                                                value={gender}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} xs="7" md="3" lg="4" controlId="formGridDOB">
                                                                            <Form.Label>Date of Birth</Form.Label>
                                                                            <Form.Control
                                                                                    required
                                                                                    type="date"
                                                                                    placeholder="Date of Birth"
                                                                                    value={dob}
                                                                                    onChange={onDOBChange}
                                                                            />
                                                                        </Form.Group>
                                                                    </Form.Row>
                                                                </div>
                                                            </Container>
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button onClick={onContactInfoSaveClick}>Save</Button>
                                                            <Button onClick={onContactInfoBackClick}>Back</Button>
                                                        </Modal.Footer>
                                                    </Modal>

                                                    {/* Contact Information Update Modal */}


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
                                                        value={address}
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
                                                        value={city}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="6" md="4" lg="3" controlId="formGridState">
                                                    <Form.Label>Province/State</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="Province/State"
                                                        value={province}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridCountry">
                                                    <Form.Label>Country</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="Country"
                                                        value={country}
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
                                                        value={zip}
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
                                                        value={phone}
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
                                                        onClick={onHealthInfoClick}
                                                        size="sm"
                                                    >
                                                        Update
                                                    </Button>


                                                    {/* Health Information Update Modal */}
                                                    <Modal backdrop="static" keyboard={false} size="lg" show={healthShow} aria-labelledby="contained-modal-title-vcenter">
                                                        <Modal.Header>
                                                            <Modal.Title className="d-flex justify-content-center" id="contained-modal-title-vcenter">
                                                            <span>Health Information</span>
                                                            </Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body className="show-grid">
                                                            <Container>
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
                                                                                required
                                                                                type="text"
                                                                                placeholder="Username"
                                                                                value={username}
                                                                                onChange={onUsernameChange}
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
                                                                                required
                                                                                type="email"
                                                                                placeholder="Email Address"
                                                                                value={email}
                                                                                onChange={onEmailChange}
                                                                            />
                                                                        </Form.Group>
                                                                    </Form.Row>
                                                                    <Form.Row>
                                                                        <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridFName">
                                                                            <Form.Label>First Name</Form.Label>
                                                                            <Form.Control
                                                                                required
                                                                                type="text"
                                                                                placeholder="First Name"
                                                                                value={firstName}
                                                                                onChange={onFirstNameChange}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} xs="6" md="4" lg="3" controlId="formGridMName">
                                                                            <Form.Label>Middle Name</Form.Label>
                                                                            <Form.Control
                                                                                required
                                                                                type="text"
                                                                                placeholder="Middle Name"
                                                                                value={middleName}
                                                                                onChange={onMiddleNameChange}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridLName">
                                                                            <Form.Label>Last Name</Form.Label>
                                                                            <Form.Control
                                                                                    required
                                                                                    type="text"
                                                                                    placeholder="Last Name"
                                                                                    value={lastName}
                                                                                    onChange={onLastNameChange}
                                                                            />
                                                                        </Form.Group>
                                                                    </Form.Row>
                                                                    <Form.Row>
                                                                        <Form.Group as={Col} xs="3" md="3" lg="3" controlId="formGridAge">
                                                                            <Form.Label>Age</Form.Label>
                                                                            <Form.Control
                                                                                required
                                                                                type="number"
                                                                                placeholder="Age"
                                                                                value={age}
                                                                                onChange={onAgeChange}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridGender">
                                                                            <Form.Label>Gender</Form.Label>
                                                                            <Form.Control
                                                                                required
                                                                                type="radio"
                                                                                name="gender"
                                                                                placeholder="Gender"
                                                                                value={gender}
                                                                            />
                                                                            <Form.Control
                                                                                required
                                                                                type="text"
                                                                                name="gender"
                                                                                placeholder="Gender"
                                                                                value={gender}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} xs="7" md="3" lg="4" controlId="formGridDOB">
                                                                            <Form.Label>Date of Birth</Form.Label>
                                                                            <Form.Control
                                                                                    required
                                                                                    type="date"
                                                                                    placeholder="Date of Birth"
                                                                                    value={dob}
                                                                                    onChange={onDOBChange}
                                                                            />
                                                                        </Form.Group>
                                                                    </Form.Row>
                                                                </div>
                                                            </Container>
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button onClick={onHealthInfoSaveClick}>Save</Button>
                                                            <Button onClick={onHealthInfoBackClick}>Back</Button>
                                                        </Modal.Footer>
                                                    </Modal>

                                                    {/* Health Information Update Modal */}


                                                </Col>
                                            </Row>
                                        </span>
                                        <div className="pl-lg-4">
                                            <Form.Row>
                                                <Form.Group as={Col} xs="5" md="4" lg="3" controlId="formGridWeight">
                                                    <Form.Label>Weight(Kg)</Form.Label>
                                                    <Form.Control
                                                        readOnly    
                                                        required
                                                        type="text"
                                                        placeholder="Weight"
                                                        value={weight}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridHeight">
                                                    <Form.Label>Height(m)</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="Height"
                                                        value={height}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="7" md="4" lg="3" controlId="formGridBMI">
                                                    <Form.Label>BMI Status</Form.Label>
                                                    <Form.Control
                                                        disabled
                                                        required
                                                        type="text"
                                                        placeholder="BMI Value"
                                                        value={bmi}
                                                    />
                                                    {/* {parseInt(bodyMassIndexValue)<18.5 ? <Alert className="mt-2" variant="warning">Underweight</Alert>:""}
                                                    {parseInt(bodyMassIndexValue)>=18.5 && parseInt(bodyMassIndexValue)<=24.9 ? <Alert className="mt-2" variant="success">Normal</Alert>:""}
                                                    {parseInt(bodyMassIndexValue)>=25.0 && parseInt(bodyMassIndexValue)<=29.9 ? <Alert className="mt-2" variant="warning">Overweight</Alert>:""}
                                                    {parseInt(bodyMassIndexValue)>=30.0 ? <Alert className="mt-2" variant="danger">Obesity</Alert>:""} */}
                                                </Form.Group>
                                                {/* <Form.Group className="mt-4"><Button size="lg" onClick ={onBodyMassIndexCalculation}>Calculate BMI?</Button></Form.Group> */}
                                            </Form.Row>
                                            
                                            
                                            <Form.Row>
                                                <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridBG">
                                                    <Form.Label>Blood Group</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text"
                                                        placeholder="Blood Group"
                                                        value={bloodGroup}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="10" md="6" lg="7" controlId="formGridHealthIssues">
                                                    <Form.Label>Underlying Health Issues</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="text-area"
                                                        placeholder="Underlying Health Issues"
                                                        value={underlyingHealthIssues}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} xs="10" md="6" lg="7" controlId="formGridOtherHealthIssues">
                                                    <Form.Label>Other Health Issues</Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        required
                                                        type="select"
                                                        placeholder="Other Health Issues"
                                                        value={otherHealthIssues}
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
                                                        onClick={onMedicalInfoClick}
                                                        size="sm"
                                                    >
                                                        Update
                                                    </Button>

                                                    {/* Medical Information Update modal */}
                                                    <Modal backdrop="static" keyboard={false} size="lg" show={medicalShow} aria-labelledby="contained-modal-title-vcenter">
                                                        <Modal.Header>
                                                            <Modal.Title className="d-flex justify-content-center" id="contained-modal-title-vcenter">
                                                            <span>Medical Information</span>
                                                            </Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body className="show-grid">
                                                            <Container>
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
                                                                                required
                                                                                type="text"
                                                                                placeholder="Username"
                                                                                value={username}
                                                                                onChange={onUsernameChange}
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
                                                                                required
                                                                                type="email"
                                                                                placeholder="Email Address"
                                                                                value={email}
                                                                                onChange={onEmailChange}
                                                                            />
                                                                        </Form.Group>
                                                                    </Form.Row>
                                                                    <Form.Row>
                                                                        <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridFName">
                                                                            <Form.Label>First Name</Form.Label>
                                                                            <Form.Control
                                                                                required
                                                                                type="text"
                                                                                placeholder="First Name"
                                                                                value={firstName}
                                                                                onChange={onFirstNameChange}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} xs="6" md="4" lg="3" controlId="formGridMName">
                                                                            <Form.Label>Middle Name</Form.Label>
                                                                            <Form.Control
                                                                                required
                                                                                type="text"
                                                                                placeholder="Middle Name"
                                                                                value={middleName}
                                                                                onChange={onMiddleNameChange}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridLName">
                                                                            <Form.Label>Last Name</Form.Label>
                                                                            <Form.Control
                                                                                    required
                                                                                    type="text"
                                                                                    placeholder="Last Name"
                                                                                    value={lastName}
                                                                                    onChange={onLastNameChange}
                                                                            />
                                                                        </Form.Group>
                                                                    </Form.Row>
                                                                    <Form.Row>
                                                                        <Form.Group as={Col} xs="3" md="3" lg="3" controlId="formGridAge">
                                                                            <Form.Label>Age</Form.Label>
                                                                            <Form.Control
                                                                                required
                                                                                type="number"
                                                                                placeholder="Age"
                                                                                value={age}
                                                                                onChange={onAgeChange}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridGender">
                                                                            <Form.Label>Gender</Form.Label>
                                                                            <Form.Control
                                                                                required
                                                                                type="radio"
                                                                                name="gender"
                                                                                placeholder="Gender"
                                                                                value={gender}
                                                                            />
                                                                            <Form.Control
                                                                                required
                                                                                type="text"
                                                                                name="gender"
                                                                                placeholder="Gender"
                                                                                value={gender}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} xs="7" md="3" lg="4" controlId="formGridDOB">
                                                                            <Form.Label>Date of Birth</Form.Label>
                                                                            <Form.Control
                                                                                    required
                                                                                    type="date"
                                                                                    placeholder="Date of Birth"
                                                                                    value={dob}
                                                                                    onChange={onDOBChange}
                                                                            />
                                                                        </Form.Group>
                                                                    </Form.Row>
                                                                </div>
                                                            </Container>
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button onClick={onMedicalInfoSaveClick}>Save</Button>
                                                            <Button onClick={onMedicalInfoBackClick}>Back</Button>
                                                        </Modal.Footer>
                                                    </Modal>

                                                    {/* Medical Information Update Modal */}


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

                                        {/* UUID Information */}

                                        {/*<span className="bg-light border-0">
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
                                                <Form.Group as={Col} xs="10" md="5" lg="5" controlId="formGridWeight">
                                                    <Form.Label>UUID</Form.Label>
                                                    <Form.Control
                                                        disabled
                                                        type="text"
                                                        placeholder="UUID"
                                                        value="308ef15c-6c35-4bef-b5b1-ac8196dab813"
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                        </div> */}

                                        {/* UUID Information */}
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