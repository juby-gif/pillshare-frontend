import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge,faUser,faBalanceScale,faHistory,faShareAlt,faSignOutAlt,faQuestionCircle, faUserAlt,faRuler } from '@fortawesome/free-solid-svg-icons';
import { Container,Image,Row,Col} from 'react-bootstrap';
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
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StepIconProps } from '@material-ui/core/StepIcon';
import { StepConnectorProps } from '@material-ui/core';

import '../App.css';
import logo from '../img/logo.png';
import pro from '../img/pro-pic.jpg';
import MeasurementModalContainer from '../containers/modalContainers/measurementModalContainer';

  

interface IProps {
    classes : Record<"button" | "root" | "instructions", string>
    activeStep : number;
    steps : string[];
    handleNext : (event: React.SyntheticEvent) => void;
    handleBack : (event: React.SyntheticEvent) => void;
    getStepContent : (step: number) => JSX.Element | "404";
    ColorlibStepIcon:(props: StepIconProps)=> JSX.Element;
    ColorlibConnector :React.ComponentType<StepConnectorProps>

    }

const MeasurementComponentWizard = (props: IProps) : JSX.Element => {
    const { classes, activeStep, steps, handleNext, handleBack,getStepContent, ColorlibConnector,ColorlibStepIcon} = props;
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
                                                <span style={{fontSize: ".820rem"}} className="text-overflow m-0">Welcome!</span>
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
                        
                        {/* --- Wizard ---*/}
                            <Container fluid>
                                <Row>
                                    <Col className="m-auto">
                                        <div className={classes.root}>
                                            <Stepper className="menu1_hor" alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                                                {steps.map((label) => (
                                                <Step key={label}>
                                                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                                </Step>
                                                ))}
                                            </Stepper>
                                            <div className="ml-1 mb-5">
                                                {activeStep === steps.length ? (
                                                    <div>
                                                        <MeasurementModalContainer modalShow={true}/>
                                                    </div>
                                                    ) : (
                                                    <div>
                                                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                                            <div style={{marginTop:"3rem",float:"right"}}>
                                                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                                                    Back
                                                                </Button>
                                                                <Button
                                                                    variant="contained"
                                                                    color="primary"
                                                                    onClick={handleNext}
                                                                    className={classes.button}
                                                                >
                                                                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                                                </Button>
                                                            </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            {/* --- Wizard ---*/}

                        {/* ----------------------The page content ends here---------------------- */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default MeasurementComponentWizard;
