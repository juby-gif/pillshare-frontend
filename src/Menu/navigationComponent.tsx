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


import pro from '../img/pro_pic.jpeg';
import { LOGGED_IN_USER_NAME, USER_IMAGE } from '../constants';


interface IProps {

}

interface ImageType{
    dataURL?: string;
    file?: File;
    [key: string]: any;
    }

interface UserNameProps{
    firstName:string;
    lastName:string;
}

const NavigationComponent = (props: IProps) : JSX.Element => {   
    const userImage:ImageType[] = localStorage.getItem(USER_IMAGE) === "undefined"?[]:JSON.parse(localStorage.getItem(USER_IMAGE)||'[]');
    const username:UserNameProps = JSON.parse(localStorage.getItem(LOGGED_IN_USER_NAME)|| '{}');
    // console.log(userImage)
    
    return(
        <Navbar expand="md" id="navigation" >
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
                                    {(userImage.length !== 0)?(userImage.map((image,index) => (
                                    <div key={index}>
                                        <img
                                        alt="..."
                                        src={image.dataURL}
                                        />
                                    </div>
                                    ))):(<img
                                        alt="default_image"
                                        src={pro}
                                    />)}
                                </span>
                                <Media className="ml-2 d-lg-block">
                                    <span style={{fontFamily: '"Raleway", "Helvetica Neue", Arial, sans-serif',fontWeight:"bold",color:"#fff"}} className="mb-0 text-sm font-weight-bold">
                                    {username?(username.firstName+ "  " + username.lastName):""}
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
                            <DropdownItem>
                                <a style={{textDecoration:"none",color:"#212529"}} href="mailto:juby.varughese@llinstitute.com"><FontAwesomeIcon className="mr-2" icon={faQuestionCircle} />   
                                <span>Help</span></a>
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