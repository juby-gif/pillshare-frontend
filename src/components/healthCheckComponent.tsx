import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge,faUser,faBalanceScale,faHistory,faShareAlt,faSignOutAlt,faQuestionCircle, faUserAlt,faStar, faRuler } from '@fortawesome/free-solid-svg-icons';
import { Row,Col,Container,Image,InputGroup, FormControl,Button, } from 'react-bootstrap';
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
import Rating from 'react-rating';
import { MultiSelectComponent,MultiSelectChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';

import '../App.css';
import logo from '../img/logo.png';
import pro from '../img/pro-pic.jpg';

interface IProps {
    showSettings: (event: React.SyntheticEvent) => void;
    onIntensityClick: (rating:number) => void;
    onAnxietyCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onIrritabilityCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDepressionCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPeacefulCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onHappyCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onOthersCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onOthersValueChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onImprovingCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSameCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBadCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onWorseCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onValuesChange ?: (value: MultiSelectChangeEventArgs | undefined) => void;
    intensity ?:number;
    anxietyCheck ?: string;
    depressionCheck ?: string;
    irritabilityCheck ?: string;
    peacefulCheck ?: string;
    happyCheck ?: string;
    othersCheck ?: boolean;
    othersValue ?: string;
    healthCheck ?: string;
    fieldsObj ?: object;
    dropdownArray ?: {[key: string]: Object }[];
    values ?: string[];
}

const HealthCheckComponent = (props: IProps) : JSX.Element => {

    const { onIntensityClick,
            onAnxietyCheck,
            onImprovingCheck,
            onSameCheck,
            onBadCheck,
            onWorseCheck,
            onIrritabilityCheck,
            onDepressionCheck,
            onPeacefulCheck,
            onHappyCheck,
            onOthersCheck,
            onOthersValueChange,
            onValuesChange,
            intensity,
            anxietyCheck,
            depressionCheck,
            irritabilityCheck,
            peacefulCheck,
            healthCheck,
            happyCheck,
            othersCheck,
            othersValue,
            dropdownArray,
            fieldsObj,
            values
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
                            <h3 className="display-3 d-flex justify-content-center">Health check profile tracking</h3>
                            <Row>
                                <ol className="ml-5 mt-5">
                                    <li>How are you feeling today?</li>
                                    <Row className="p-3">
                                        <MultiSelectComponent change={onValuesChange} value={values} dataSource={dropdownArray} fields={fieldsObj}  popupHeight="250px" popupWidth="290px"  placeholder="Select your symptoms from the list" />
                                    </Row>
                                    <Row>
                                        <Col className="ml-2 mr-4 mb-3">
                                        <label>Date:</label>
                                            <InputGroup>
                                                <FormControl
                                                    placeholder=""
                                                    aria-label="Date"
                                                    type="date"
                                                />
                                            </InputGroup>
                                        </Col>
                                        <Col className="ml-2 mr-4 mb-3">
                                        <label>Time:</label>
                                            <InputGroup>
                                                <FormControl
                                                    placeholder=""
                                                    aria-label="Time"
                                                    type="time"
                                                />
                                            </InputGroup>
                                        </Col>
                                        <Col xs="8" md="5" lg="4"  className="ml-2 mr-4 mb-3">
                                        <label>Intensity:</label><br/>
                                            <Rating 
                                                start = {0}
                                                stop = {5}
                                                step = {1}
                                                initialRating={intensity}
                                                onClick={e=>onIntensityClick(e)}
                                                fullSymbol= {<FontAwesomeIcon icon={faStar} /> }
                                            />
                                        </Col>
                                    </Row>
                                    <li className="mt-3">Do you feel any transition in your disposition? If yes, select the ones that suits</li>
                                    <Row className="mt-3 p-2">
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="mood" value="Anxiety" onChange={onAnxietyCheck} checked={anxietyCheck === "Anxiety"} />
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                value="Anxiety"
                                            />
                                        </InputGroup>
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="mood" value="Irritability" onChange={onIrritabilityCheck} checked={irritabilityCheck === "Irritability"} />
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Text input with checkbox"
                                                value="Irritability"
                                            />
                                        </InputGroup>
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="mood" value="Depression" onChange={onDepressionCheck} checked={depressionCheck === "Depression"} />
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Text input with checkbox"
                                                value="Depression"
                                            />
                                        </InputGroup>
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="mood" value="Peaceful" onChange={onPeacefulCheck} checked={peacefulCheck === "Peaceful"} />
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Text input with checkbox"
                                                value="Peaceful"
                                            />
                                        </InputGroup>
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="mood" value="Happy" onChange={onHappyCheck} checked={happyCheck === "Happy"} />
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Text input with checkbox"
                                                value="Happy"
                                            />
                                        </InputGroup>
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="mood" onChange={onOthersCheck} checked={othersCheck} />
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Text input with checkbox"
                                                value="Others"
                                            />
                                        </InputGroup>
                                        {othersCheck && (
                                            <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                                <FormControl aria-label="Text input with checkbox"
                                                    placeholder="What do you feel?"
                                                    value={othersValue}
                                                    onChange={onOthersValueChange}
                                                />
                                        </InputGroup>)}
                                    </Row>
                                    <li>How do you feel overall?</li>
                                    <Row className="mt-3 p-2">
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Radio name="feel" onChange={onImprovingCheck} value="Improving" checked={healthCheck === "Improving"} />
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                id="feel4" 
                                                value="Improving"
                                                
                                            />
                                        </InputGroup>
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Radio name="feel" onChange={onSameCheck} value="Remains the same" checked={healthCheck === "Remains the same"} />
                                            </InputGroup.Prepend>
                                            <FormControl
                                                id="feel1" 
                                                value="Remains the same"
                                            />
                                        </InputGroup>
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Radio name="feel" onChange={onBadCheck} value="Bad" checked={healthCheck === "Bad"} />
                                            </InputGroup.Prepend>
                                            <FormControl
                                                id="feel2" 
                                                value="Bad"
                                            />
                                        </InputGroup>
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Radio name="feel" onChange={onWorseCheck} value="Getting Worse" checked={healthCheck === "Getting Worse"} />
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                id="feel3" 
                                                value="Getting Worse"
                                            />
                                        </InputGroup>
                                    </Row>
                                </ol>
                            </Row>
                            <Button className="ml-5">
                                Submit
                            </Button>
                        </Container>
                        {/* ----------------------The page content ends here---------------------- */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default HealthCheckComponent;