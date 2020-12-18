import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge,faHistory,faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { Image } from 'react-bootstrap';

import logo from '../../img/logo.png';
import { REMOTE_PAYLOAD } from '../../constants';


interface IProps{

}
interface ParamProps{
    id?:string
}
const SidebarComponent = (props: IProps) : JSX.Element => {
    const payload:ParamProps = JSON.parse(localStorage.getItem(REMOTE_PAYLOAD) || "");
    const url:string = "/remote/" + payload.id;
    return(
        <Menu width={ '280px' } >
            <Image className="menu rounded img-fluid mb-5" style={{display: "block",marginLeft: "auto",marginRight: "auto"}} src={logo} width="120rem" height="100rem"/>
            <Link id="dashboard" className="menu ml-1 p-2" to={url}  ><FontAwesomeIcon icon={faThLarge} />&nbsp;&nbsp;&nbsp;Dashboard</Link>
            <Link id="medication-history" className="menu ml-1 p-2" to="/remote-medication-logs"><FontAwesomeIcon icon={faHistory} />&nbsp;&nbsp;Medication Logs</Link>
            <a id="help" className="menu ml-1 p-2" href="mailto:juby.varughese@llinstitute.com"><FontAwesomeIcon icon={faQuestion} />&nbsp;&nbsp;Need Help</a>
        </Menu>
    )
}
export default SidebarComponent;