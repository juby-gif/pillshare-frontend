import React from 'react';
import { Container } from 'react-bootstrap';
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Navbar,
    Nav,
    Media,
  } from "reactstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faSignOutAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';


import pro from '../img/pro-pic.jpg';


interface IProps {

}

const NavigationComponent = (props: IProps) : JSX.Element => {
    return(
        <Navbar className="navbar-top navbar-dark" expand="md" id="navigation" >
            <Container fluid>
                <Link
                id="title"
                className="ml-5 h4 mb-0 text-white text-uppercase d-lg-inline-block display-5"
                to="/"
                style={{textShadow: "0 0 10px rgba(0,0,0,1.5)",fontFamily: '"Raleway", "Helvetica Neue", Arial, sans-serif',fontWeight:"bold"}}
                >
                    Pillshare
                </Link>
                <Nav style={{float:"right"}} className="align-items-center d-md-flex" navbar>
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
                                    <span style={{fontFamily: '"Raleway", "Helvetica Neue", Arial, sans-serif',fontWeight:"bold"}} className="mb-0 text-sm font-weight-bold">
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
    )
}
export default NavigationComponent;