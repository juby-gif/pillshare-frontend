import React from 'react';
import { Row,Col,Card,Container,Form, Button, Modal, Alert, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,faCamera,faCheck,faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ImageUploading  from "react-images-uploading";

import '../App.css';
import bg from '../img/bg-image.jpg';
import pro from '../img/pro_pic.jpeg';
import SidebarComponent from '../Menu/sideBarComponent';
import NavigationComponent from '../Menu/navigationComponent';
import TableContainer from '../containers/tableContainer';


interface IProps {
    
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
    onImageChange : (imageList?: ImageType[]) => void;
    onMaleChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFemaleChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    // Contact Information Update
    onAddressChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    onCityChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    onProvinceChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    onCountryChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    onZipChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPhoneChange : (event: React.ChangeEvent<HTMLInputElement>) => void; 
    onContactInfoClick : (event: React.SyntheticEvent) => void;
    onContactInfoSaveClick : (event: React.SyntheticEvent) => void;
    onContactInfoBackClick : (event: React.SyntheticEvent) => void;

    // Health Information Update
    onWeightChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onHeightChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBodyMassIndexCalculation : (event:React.SyntheticEvent) => void;
    onBloodGroupChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    onUnderlyingHealthIssueChange : (event:React.ChangeEvent<HTMLInputElement>) => void;
    onOtherHealthIssuesChange : (event:React.ChangeEvent<HTMLInputElement>) => void;
    onHealthInfoClick : (event: React.SyntheticEvent) => void;
    onHealthInfoSaveClick : (event: React.SyntheticEvent) => void;
    onHealthInfoBackClick : (event: React.SyntheticEvent) => void;

    // Medical Information Update
    onMedicalInfoClick : (event: React.SyntheticEvent) => void;
    onMedicalInfoSaveClick : (event: React.SyntheticEvent) => void;
    onMedicalInfoBackClick : (event: React.SyntheticEvent) => void;

    //Save
    onSaveClick : (event : React.SyntheticEvent) => void;
    onGetStartedClick : (event : React.SyntheticEvent) => void;

    userShow: boolean;
    saveMode: boolean;
    bmiStatus: boolean;
    modalfirstShow: boolean;
    contactShow: boolean;
    healthShow: boolean;
    medicalShow: boolean;
    firstName?: string,
    middleName?: string,
    lastName?: string,
    username?: string,
    email?: string,
    weight?: string;
    height?: string;
    age?:number,
    gender?:string,
    dob?:string,
    address?:string,
    city?:string,
    province?:string,
    country?:string,
    zip?:string,
    phone?:string,
    bmi?:string,
    bloodGroup?:string,
    underlyingHealthIssues?:string,
    otherHealthIssues?:string,
    bodyMassIndexValue?: string;
    images:ImageType[];
    debuggMode:boolean;
    userInfoValidated:boolean;
    contactValidated:boolean;
    healthValidated:boolean;
    firstUser?:boolean;
}

interface ImageType{
    dataURL?: string;
    file?: File;
    [key: string]: any;
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
            bmiStatus,
            contactShow,
            healthShow,
            medicalShow,
            modalfirstShow,
            firstUser,
            bodyMassIndexValue,
            images,
            debuggMode,
            saveMode,
            userInfoValidated,
            healthValidated,
            contactValidated,


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
            onImageChange,
            onMaleChange,
            onFemaleChange,

            // Contact Information Update
            onAddressChange,
            onCityChange,
            onProvinceChange,
            onCountryChange,
            onZipChange,
            onPhoneChange,
            onContactInfoClick,
            onContactInfoSaveClick,
            onContactInfoBackClick,

            // Health Information Update
            onWeightChange,
            onHeightChange,
            onBodyMassIndexCalculation,
            onBloodGroupChange,
            onOtherHealthIssuesChange,
            onUnderlyingHealthIssueChange,
            onHealthInfoClick,
            onHealthInfoSaveClick,
            onHealthInfoBackClick,

            // Medical Information Update
            onMedicalInfoClick,
            onMedicalInfoSaveClick,
            onMedicalInfoBackClick,

            //Save function
            onSaveClick,
            onGetStartedClick,
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
        

                {/* Alert for saving */}
                {saveMode && (<Container id="message" style={{paddingTop:"3rem"}} fluid>
                    <Alert variant="success">
                        <FontAwesomeIcon style={{fontSize:"1.3rem",color:"green"}} className="mr-2" icon={faCheck} /><span style={{fontSize:"1rem"}}>Your profile was saved successfully</span>
                    </Alert>
                </Container>)}
                {/* Alert for saving */}


                {/* Header container */}
                <Container className="d-flex align-items-center header pt-5 pt-lg-8" 
                    style={{
                        position:"absolute",
                        minHeight: "600px",
                        backgroundImage: `url(${bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top"
                    }} fluid
                    >
                        <Row> 
                            <Col lg="12" md="12">
                                <h1 className="display-2 text-white">Hello {firstName}!</h1>
                                {firstUser && (<p className="text-white mt-0 mb-5">
                                <h4>Welcome to the Pillshare Daily Medication Tracker app.</h4>
                                Please fill out this profile and then the app will unlock the other features for you.
                                </p>)}
                            </Col>
                        </Row>
                </Container>

                {/* Body container */}
                <Container style={{paddingTop:"25rem"}} className="mt-5" fluid>
                    {(firstUser && modalfirstShow)&&(<Row>
                        <Modal
                            backdrop="static" keyboard={false} 
                            show={modalfirstShow}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            style={{
                                position: "absolute",
                                bottom: "0",
                                background: "rgba(0, 0, 0,0.5)", /* Black see-through */
                                // color: "#000",
                                width: "100%",
                                transition: ".5s ease",
                                opacity:"1",
                                fontSize: "16px",
                                padding: "20px",
                              }}
                        >
                            <Modal.Header>
                                <Modal.Title id="contained-modal-title-vcenter">
                                <span style={{fontSize:"100%"}}>Welcome to PillShare!</span>
                                <img className="ml-5" alt="logo" style={{position:"absolute",float:"right",top:"0.6%",right:"0"}} src={pro} width="80rem" height="60rem" />
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                <b>Pillshare</b> is a medical web app where you can track your pills and vitals at the same time with higher accuracy. 
                                In addition to this, Pillshare has an in-built sharing feature where you can share your real-time data with anyone that you like around the world. 
                                You will have the ability to select which data you want to share. 
                                </p>
                                <div style={{position: "relative",overflow: "hidden", width: "100%", paddingTop: "56.25%"}}>
                                <iframe 
                                    title="Medisafe"
                                    className="responsive-iframe"
                                    width="900" 
                                    height="506" 
                                    src="https://www.youtube.com/embed/mWqkBjfU3sE" 
                                    frameBorder="0" 
                                    allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                >
                                </iframe>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={onGetStartedClick}>Let's get started!</Button>
                            </Modal.Footer>
                        </Modal> 
                    </Row>)}

                    <Row className="mt-5">
                        <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                            <Card className="card-profile shadow">
                                <Row className="justify-content-center">
                                    <Col className="order-lg-2" lg="3">
                                        <div className="card-profile-image">
                                            <ImageUploading
                                            resolutionType="absolute"
                                                multiple={false}
                                                value={images}
                                                onChange={onImageChange}
                                                maxNumber={22}
                                            >
                                                {({
                                                onImageUpload,
                                                isDragging,
                                                dragProps
                                                }) => (
                                                    <div>
                                                        {(images !== undefined && images.length !== 0 ) ? images.map((image,index) => (
                                                            <div key={index}>
                                                                <Link to="/" onClick={e => e.preventDefault()}>
                                                                    <img
                                                                    alt={image.file?image.file.name:""}
                                                                    className="rounded-circle"
                                                                    src={image.dataURL}
                                                                    width="100rem"
                                                                    height="100rem"
                                                                    />
                                                                </Link>
                                                            </div>)):(
                                                            <Link to="/" onClick={e => e.preventDefault()}>
                                                                <img
                                                                    alt="default_picture"
                                                                    className="rounded-circle"
                                                                    src={pro}
                                                                    width="100rem"
                                                                    height="100rem"
                                                                />
                                                            </Link>
                                                        )}
                                                        
                                                        <a
                                                        style={isDragging ? { color: "red" } : undefined}
                                                        onClick={onImageUpload}
                                                        {...dragProps}
                                                        >
                                                            <FontAwesomeIcon className="ni mr-2 faCamera" icon={faCamera} />
                                                        </a>
                                                    </div>
                                                )}
                                            </ImageUploading>
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
                                        {(city && province && country)&&(<div className="h5 font-weight-300">
                                            <FontAwesomeIcon className="ni mr-2" icon={faMapMarkerAlt} />
                                            {city}, {province}, {country}
                                        </div>)}
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
                                                        User information&nbsp;
                                                        {firstUser && (<span style={{ fontSize:"0.9rem", color:"rgba(255,0,0,0.7)",fontWeight:"bold"}}>( 
                                                            <span style={{fontSize:"0.6rem",width: "0.5em",height: "0.5em", fill: "red",verticalAlign: "top"}}>
                                                                <FontAwesomeIcon icon={faStarOfLife} />
                                                            </span> Required )
                                                        </span>)}
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
                                                                    <Form noValidate validated={userInfoValidated}>
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
                                                                                <Form.Control.Feedback type="invalid">
                                                                                    Please choose a username.
                                                                                </Form.Control.Feedback>
                                                                            </Form.Group>
                                                                            <Form.Group as={Col} xs="7" md="7" lg="4" controlId="formGridEmail">
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
                                                                                <Form.Control.Feedback type="invalid">
                                                                                    Please provide a valid email.
                                                                                </Form.Control.Feedback>
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
                                                                                <Form.Control.Feedback type="invalid">
                                                                                    Please choose first name.
                                                                                </Form.Control.Feedback>
                                                                            </Form.Group>
                                                                            <Form.Group as={Col} xs="6" md="4" lg="3" controlId="formGridMName">
                                                                                <Form.Label>Middle Name</Form.Label>
                                                                                <Form.Control
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
                                                                                <Form.Control.Feedback type="invalid">
                                                                                    Please choose last name.
                                                                                </Form.Control.Feedback>
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
                                                                                <Form.Control.Feedback type="invalid">
                                                                                    Age is required.
                                                                                </Form.Control.Feedback>
                                                                            </Form.Group>
                                                                            <Form.Group as={Col} xs="9" md="8" lg="7" controlId="formGridAge">
                                                                                <Form.Label>Gender</Form.Label>
                                                                                <InputGroup>
                                                                                    <InputGroup.Prepend>
                                                                                        <InputGroup.Radio name="gender" onChange={onMaleChange} value="male" checked={gender === "male"} />
                                                                                    </InputGroup.Prepend>
                                                                                    <Form.Control  className="mr-3" id="male" value="male" readOnly/>
                                                                                    <InputGroup.Prepend>
                                                                                    <InputGroup.Radio name="gender" onChange={onFemaleChange} value="female" checked={gender === "female"} />
                                                                                    </InputGroup.Prepend>
                                                                                    <Form.Control id="female" value="female" readOnly/>
                                                                                </InputGroup>
                                                                                <Form.Control.Feedback type="invalid">
                                                                                    Age is required.
                                                                                </Form.Control.Feedback>
                                                                            </Form.Group>
                                                                            <Form.Group controlId="formGridDOB">
                                                                                <Form.Label>Date of Birth</Form.Label>
                                                                                <Form.Control
                                                                                        required
                                                                                        type="date"
                                                                                        placeholder="Date of Birth"
                                                                                        value={dob}
                                                                                        onChange={onDOBChange}
                                                                                />
                                                                                <Form.Control.Feedback type="invalid">
                                                                                    Please add your date of birth.
                                                                                </Form.Control.Feedback>
                                                                            </Form.Group>
                                                                        </Form.Row>
                                                                    </Form>                                                                </div>
                                                            </Container>
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button onClick={onUserInfoSaveClick}>Update</Button>
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
                                                        Contact information&nbsp;
                                                        {firstUser && (<span style={{ fontSize:"0.9rem", color:"rgba(255,0,0,0.7)",fontWeight:"bold"}}>( 
                                                            <span style={{fontSize:"0.6rem",width: "0.5em",height: "0.5em", fill: "red",verticalAlign: "top"}}>
                                                                <FontAwesomeIcon icon={faStarOfLife} />
                                                            </span> Required )
                                                        </span>)}
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
                                                                   <Form noValidate validated={contactValidated}>
                                                                       <Form.Row>
                                                                            <Form.Group as={Col} xs="10" md="6" lg="7" controlId="formGridAddress">
                                                                                <Form.Label>Address</Form.Label>
                                                                                <Form.Control
                                                                                    required
                                                                                    type="text"
                                                                                    placeholder="Address"
                                                                                    value={address}
                                                                                    onChange={onAddressChange}
                                                                                />
                                                                            </Form.Group>
                                                                        </Form.Row>
                                                                        <Form.Row>
                                                                            <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridCity">
                                                                                <Form.Label>City</Form.Label>
                                                                                <Form.Control
                                                                                    required
                                                                                    type="text"
                                                                                    placeholder="City"
                                                                                    value={city}
                                                                                    onChange={onCityChange}
                                                                                />
                                                                            </Form.Group>
                                                                            <Form.Group as={Col} xs="6" md="4" lg="3" controlId="formGridState">
                                                                                <Form.Label>Province/State</Form.Label>
                                                                                <Form.Control
                                                                                    required
                                                                                    type="text"
                                                                                    placeholder="Province/State"
                                                                                    value={province}
                                                                                    onChange={onProvinceChange}
                                                                                />
                                                                            </Form.Group>
                                                                            <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridCountry">
                                                                                <Form.Label>Country</Form.Label>
                                                                                <Form.Control
                                                                                    required
                                                                                    type="text"
                                                                                    placeholder="Country"
                                                                                    value={country}
                                                                                    onChange={onCountryChange}
                                                                                />
                                                                            </Form.Group>
                                                                        </Form.Row>
                                                                        <Form.Row>
                                                                            <Form.Group as={Col} xs="5" md="4" lg="3" controlId="formGridZip">
                                                                                <Form.Label>Zip</Form.Label>
                                                                                <Form.Control
                                                                                    required
                                                                                    type="text"
                                                                                    placeholder="Zip"
                                                                                    value={zip}
                                                                                    onChange={onZipChange}
                                                                                />
                                                                            </Form.Group>
                                                                            <Form.Group as={Col} xs="7" md="4" lg="3" controlId="formGridPhoneNumber">
                                                                                <Form.Label>Phone Number</Form.Label>
                                                                                <Form.Control
                                                                                    required
                                                                                    type="tel"
                                                                                    placeholder="Province/State"
                                                                                    pattern="[+]{} [0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                                                    value={phone}
                                                                                    onChange={onPhoneChange}
                                                                                />
                                                                            </Form.Group>
                                                                        </Form.Row>
                                                                    </Form>                                                                </div>
                                                            </Container>
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button onClick={onContactInfoSaveClick}>Update</Button>
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
                                                        placeholder="Phone number"
                                                        pattern="[789][0-9]{9}"
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
                                                        Health information&nbsp;
                                                        {firstUser && (<span style={{ fontSize:"0.9rem", color:"rgba(255,0,0,0.7)",fontWeight:"bold"}}>( 
                                                            <span style={{fontSize:"0.6rem",width: "0.5em",height: "0.5em", fill: "red",verticalAlign: "top"}}>
                                                                <FontAwesomeIcon icon={faStarOfLife} />
                                                            </span> Required )
                                                        </span>)}
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
                                                                    <Form noValidate validated={healthValidated}>
                                                                        <Form.Row>
                                                                            <Form.Group as={Col} xs="5" md="4" lg="3" controlId="formGridWeight">
                                                                                <Form.Label>Weight(Kg)</Form.Label>
                                                                                <Form.Control
                                                                                    required
                                                                                    type="text"
                                                                                    placeholder="Weight"
                                                                                    value={weight}
                                                                                    onChange={onWeightChange}
                                                                                />
                                                                            </Form.Group>
                                                                            <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridHeight">
                                                                                <Form.Label>Height(cm)</Form.Label>
                                                                                <Form.Control
                                                                                    required
                                                                                    type="text"
                                                                                    placeholder="Height"
                                                                                    value={height}
                                                                                    onChange={onHeightChange}
                                                                                />
                                                                            </Form.Group>
                                                                            <Form.Group as={Col} xs="7" md="4" lg="3" controlId="formGridBMI">
                                                                                <Form.Label>BMI Value</Form.Label>
                                                                                <Form.Control
                                                                                    disabled
                                                                                    required
                                                                                    type="text"
                                                                                    placeholder="BMI Value"
                                                                                    value={bodyMassIndexValue}
                                                                                />
                                                                                {parseInt(bodyMassIndexValue?bodyMassIndexValue:"0")<18.5 ? bmiStatus && <Alert className="mt-2" variant="warning">Underweight</Alert>:""}
                                                                                {parseInt(bodyMassIndexValue?bodyMassIndexValue:"0")>=18.5 && parseInt(bodyMassIndexValue?bodyMassIndexValue:"0")<=24.9 ? bmiStatus && <Alert className="mt-2" variant="success">Normal</Alert>:""}
                                                                                {parseInt(bodyMassIndexValue?bodyMassIndexValue:"0")>=25.0 && parseInt(bodyMassIndexValue?bodyMassIndexValue:"0")<=29.9 ? bmiStatus && <Alert className="mt-2" variant="warning">Overweight</Alert>:""}
                                                                                {parseInt(bodyMassIndexValue?bodyMassIndexValue:"0")>=30.0 ? bmiStatus && <Alert className="mt-2" variant="danger">Obesity</Alert>:""}
                                                                            </Form.Group>
                                                                            <Form.Group>
                                                                                <Form.Label>Check BMI?</Form.Label>
                                                                                <br />
                                                                                <Button size="sm" onClick ={onBodyMassIndexCalculation}>Calculate</Button>
                                                                            </Form.Group>
                                                                        </Form.Row>
                                                                        <Form.Row>
                                                                            <Form.Group as={Col} xs="4" md="4" lg="3" controlId="formGridBG">
                                                                                <Form.Label>Blood Group</Form.Label>
                                                                                <Form.Control
                                                                                    required
                                                                                    type="text"
                                                                                    placeholder="Blood Group"
                                                                                    value={bloodGroup}
                                                                                    onChange={onBloodGroupChange}
                                                                                />
                                                                            </Form.Group>
                                                                            <Form.Group as={Col} xs="10" md="6" lg="7" controlId="formGridHealthIssues">
                                                                                <Form.Label>Underlying Health Issues</Form.Label>
                                                                                <Form.Control
                                                                                    required
                                                                                    type="text-area"
                                                                                    placeholder="Heart disease, Cancer, Diabetes,Blood Pressure,etc."
                                                                                    value={underlyingHealthIssues}
                                                                                    onChange={onUnderlyingHealthIssueChange}
                                                                                />
                                                                            </Form.Group>
                                                                            <Form.Group as={Col} xs="10" md="6" lg="7" controlId="formGridOtherHealthIssues">
                                                                                <Form.Label>Other Health Issues</Form.Label>
                                                                                <Form.Control
                                                                                    required
                                                                                    type="select"
                                                                                    placeholder="Fever, Headches, Migraine, Hair fall,etc."
                                                                                    value={otherHealthIssues}
                                                                                    onChange={onOtherHealthIssuesChange}
                                                                                />
                                                                            </Form.Group>
                                                                        </Form.Row>
                                                                    </Form>
                                                                </div>
                                                            </Container>
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button onClick={onHealthInfoSaveClick}>Update</Button>
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
                                                    <Form.Label>Height(cm)</Form.Label>
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
                                                        value={bloodGroup}
                                                    />
                                                </Form.Group>

                                                {/* Will Add a dropdown list for phase 2 */}
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
                                                 {/* Will Add a dropdown list for phase 2 */}

                                                 
                                            </Form.Row>
                                        </div>
                                        <hr className="my-4" />

                                        {/* Medication Information */}
                                        <span className="bg-light border-0">
                                            <Row className="align-items-center">
                                                <Col xs="7" lg="8">
                                                    <h6 className="heading-small text-muted mb-4">
                                                        Medical information (<span style={{fontWeight:"unset",fontStyle:"italic",fontSize:"0.9rem",color:"#17a2b8"}}>Please make sure you've saved all datas before doing this section</span>)
                                                    </h6>
                                                </Col>
                                                <Col  xs="5" lg="4" className="text-right">
                                                    <Button
                                                        color="primary"
                                                        onClick={onMedicalInfoClick}
                                                        size="sm"
                                                    >
                                                        Update
                                                    </Button>

                                                    {/* Medical Information Update modal */}
                                                    <Modal backdrop="static" keyboard={false} size="xl" show={medicalShow} aria-labelledby="contained-modal-title-vcenter">
                                                        <Modal.Header>
                                                            <Modal.Title className="d-flex justify-content-center" id="contained-modal-title-vcenter">
                                                            <span>Medical Information</span>
                                                            </Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body className="show-grid">
                                                                    <TableContainer debuggMode={debuggMode} />
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <a href="/user-profile" ><Button onClick={onMedicalInfoSaveClick}>Save</Button></a>
                                                            <Button onClick={onMedicalInfoBackClick}>Back</Button>
                                                        </Modal.Footer>
                                                    </Modal>

                                                    {/* Medical Information Update Modal */}
                                                </Col>
                                            </Row>
                                            <Row>
                                            <Col style={{width:"100%"}}><TableContainer debuggMode={false}/></Col>
                                            </Row>
                                        </span>

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
                                    <Button onClick={onSaveClick} className="mt-5">Save</Button>
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