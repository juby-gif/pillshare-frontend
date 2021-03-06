import React, { useState } from 'react';
import {RouteComponentProps,withRouter} from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';
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
import { USER_IMAGE } from '../constants';
import  LocalStorageService from '../localStorageService';


interface IProps {

}

interface ImageType{
    dataURL?: string;
    file?: File;
    [key: string]: any;
    }

interface ServerResponse {
    data:UserProps;
}
interface UserProps{
    fName:string;
    lName:string;
}
const localStorageService:any = LocalStorageService.getService()
const NavigationComponent = (props: IProps & RouteComponentProps) : JSX.Element => { 
    const axios = require('axios').default;  
    const userImage:ImageType[] = localStorage.getItem(USER_IMAGE) === "undefined"?[]:JSON.parse(localStorage.getItem(USER_IMAGE)||'[]');
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

    React.useEffect(() => {
        axios.get(
            process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/api/v1/nav-header",
            {headers: {
                'Authorization': `JWT ${localStorageService.getAccessToken()}`,
                'Content-Type': 'application/json', 
                'Accept' : 'application/json',
            }}
            )
        .then(function(response:ServerResponse) {
            // console.log(response);
        setFirstName(response.data?.fName);
        setLastName((response.data?.lName));
        })
        .catch(function(error:UserProps) {
        //   console.log(error);
        })
        }, [axios]);

    // Logout functionality for phase
    const [logout,setLogout] = useState(false);
    const onLogoutClick = () => {
        setLogout(true)
        setTimeout(()=>{
            
            localStorage.clear();
            props.history.push("/login")
            setLogout(false)
        },5500);
        
      };
    const logoutMessage: string = "Please wait! We're Logging you out";
    return(
        <React.Fragment>
            <Navbar expand="md" id="navigation" >
                <Container fluid>
                    <Link
                    id="title"
                    className="ml-5 h4 mb-0 text-white text-uppercase d-lg-inline-block display-5"
                    to="#"
                    style={{textShadow: "0 0 10px rgba(0,0,0,1.5)",fontFamily: '"Raleway", "Helvetica Neue", Arial, sans-serif',fontWeight:"bold"}}
                    >
                        <span style={{fontSize:"80%"}}>Pillshare</span>
                    </Link>
                    <Nav style={{float:"right"}} className="align-items-center d-md-flex" navbar>
                        <UncontrolledDropdown nav>
                            <DropdownToggle nav>
                                <Media className="align-items-center">
                                    <span className="avatar avatar-sm rounded-circle">
                                        {(userImage.length !== 0)?(userImage.map((image,index) => (
                                        <div key={index}>
                                            <img
                                            style={{height:"44px",width:"44px"}}
                                            height="100%"
                                            width="100%"
                                            className="circle"
                                            alt="..."
                                            src={image.dataURL}
                                            />
                                        </div>
                                        ))):(<img
                                            // style={{height:"28px",width:"28px"}}
                                            height="100%"
                                            width="100%"
                                            className="circle"
                                            alt="pillshare-default_image"
                                            src={pro}
                                        />)}
                                    </span>
                                    <Media className="ml-2 d-lg-block">
                                        <span style={{color:"#fff",fontSize:"100%"}} className="mb-0 text-sm font-weight-bold">
                                        {(firstName !== "" && lastName !=="")?(firstName+ "  " + lastName):""}
                                        </span>
                                    </Media>
                                </Media>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                                <DropdownItem header >
                                    <h6 style={{fontSize: ".820rem"}} className="text-overflow m-0">Welcome!</h6>
                                </DropdownItem>
                                <DropdownItem className="dropdown-item" to="/user-profile" tag={Link}>
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
                                <DropdownItem className="dropdown-item">
                                    <a style={{textDecoration:"none"}} href="mailto:juby.varughese@llinstitute.com"><FontAwesomeIcon className="mr-2" icon={faQuestionCircle} />   
                                    <span>Help</span></a>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem className="dropdown-item" onClick={onLogoutClick}>
                                    <FontAwesomeIcon className="mr-2" icon={faSignOutAlt} />
                                    <span>Logout</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Container>
            </Navbar>
            {logout && (<Container id="logout" fluid>
                <Alert className="mt-3" variant="info"><span style={{font: "300 1.1rem/150% Raleway"}} className="loading">{logoutMessage}</span></Alert>
            </Container>)}
        </React.Fragment>
    )
}
export default withRouter(NavigationComponent);