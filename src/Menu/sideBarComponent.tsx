import React from 'react';
import {RouteComponentProps,withRouter} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge,faUser,faStethoscope,faHistory,faShareAlt,faRuler,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { Image } from 'react-bootstrap';

import logo from '../img/logo.png';


interface IProps{

}
const SidebarComponent = (props: IProps & RouteComponentProps) : JSX.Element => {
    return(
    <React.Fragment>
        <Menu width={ '280px' } >
            <Image className="menu rounded img-fluid mb-5" style={{display: "block",marginLeft: "auto",marginRight: "auto"}} src={logo} width="120rem" height="100rem"/>
            <Link id="dashboard" className="menu ml-1 p-2" to="/dashboard"><FontAwesomeIcon icon={faThLarge} />&nbsp;&nbsp;&nbsp;Dashboard</Link>
            <Link id="profile" className="menu ml-1 p-2" to="/user-profile"><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;Account</Link>
            <Link id="measure" className="menu p-2" to="/measurement"><FontAwesomeIcon icon={faRuler} />&nbsp;&nbsp;Measurement</Link>
            <Link id="health-check" className="menu p-2" to="/health-check"><FontAwesomeIcon icon={faStethoscope} />&nbsp;&nbsp;Health Check</Link>
            <Link id="medication-history" className="menu ml-1 p-2" to="/medication-logs"><FontAwesomeIcon icon={faHistory} />&nbsp;&nbsp;Medication Logs</Link>
            <Link id="share" className="menu ml-1 p-2" to="/share"><FontAwesomeIcon icon={faShareAlt} />&nbsp;&nbsp;Share</Link>
            <a id="help" className="menu ml-1 p-2" href="mailto:juby.varughese@llinstitute.com"><FontAwesomeIcon icon={faQuestion} />&nbsp;&nbsp;Need Help</a>
        </Menu>
    </React.Fragment>
    )
}
export default withRouter(SidebarComponent);