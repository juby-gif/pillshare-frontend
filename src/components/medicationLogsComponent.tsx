import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge,faUser,faBalanceScale,faHistory,faShareAlt,faSignOutAlt,faQuestionCircle, faUserAlt,faRuler } from '@fortawesome/free-solid-svg-icons';
import { Container,Image,Table } from 'react-bootstrap';
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
    medical_information : MedicalProps[];
  }
  
  interface MedicalProps {
    before_or_after ?: string;
    dosage ?: string;
    dose ?: number;
    duration ?: number;
    end_date ?: string;
    start_date ?: string;
    time_taken ?: TakenProps;
    missed ?: string;
    measure ?: string;
    name ?: string;
    reason ?: string;
    taken ?: string;
    id : number;
  }
  interface TakenProps{
    part ?: string;
    time ?: string;
  }

const MedicationLogsComponent = (props: IProps) : JSX.Element => {
    const { medical_information } = props;
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
                            <h3 className="display-3 d-flex justify-content-center">Medication Logs</h3>
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
                                        <th>Time Taken</th>
                                        <th>Reason for taking this medication</th>
                                        <th>Taken / Missed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {medical_information.length!==0?medical_information.map((datum) =>(
                                        <tr key={datum.id}>
                                            <td>{datum.id}</td>
                                            <td>{datum.name}</td>
                                            <td>{datum.dose}{' '}{datum.measure}</td>
                                            <td>{datum.dosage}</td>
                                            <td>{datum.before_or_after}</td>
                                            <td>{datum.duration}</td>
                                            <td>{datum.start_date}</td>
                                            <td>{datum.end_date}</td>
                                            <td>{datum.time_taken?datum.time_taken.part + " ":""}{datum.time_taken?datum.time_taken.time:""}</td>
                                            <td>{datum.reason}</td>
                                            <td>{datum.taken}{''}{datum.missed}</td>
                                        </tr>
                                    )):<tr><span className="d-flex justify-content-center">No Data Available</span></tr>}
                                </tbody>
                        </Table>
                        </Container>
                        {/* ----------------------The page content ends here---------------------- */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default MedicationLogsComponent;
