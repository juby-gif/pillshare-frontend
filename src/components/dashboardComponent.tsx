import React from 'react';
import { Image } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge,faUser,faBalanceScale,faHistory,faShareAlt,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import '../App.css';
import logo from '../img/logo.png';


interface IProps {
    showSettings: (event: React.SyntheticEvent) => void;
}
const DashboardComponent = (props: IProps) : JSX.Element => {
    return(
        <React.Fragment>
            <div id="app" style={{height: "100%"}}>
                <div id="outer-container" style={{height: "100%"}}>
                    <Menu width={'280px'} >
                        <Image className="rounded img-fluid mb-5" style={{display: "block",marginLeft: "auto",marginRight: "auto"}} src={logo} width="120rem" height="100rem"/>
                        <a id="dashboard" className="ml-1 p-2" href="/dashboard"><FontAwesomeIcon icon={faThLarge} />&nbsp;&nbsp;&nbsp;Dashboard</a>
                        <a id="profile" className="ml-1 p-2" href="/"><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;Account</a>
                        <a id="health-check" className="p-2" href="/"><FontAwesomeIcon icon={faBalanceScale} />&nbsp;&nbsp;Health Check</a>
                        <a id="medication-history" className="ml-1 p-2" href="/"><FontAwesomeIcon icon={faHistory} />&nbsp;&nbsp;Medication logs</a>
                        <a id="share" className="ml-1 p-2" href="/"><FontAwesomeIcon icon={faShareAlt} />&nbsp;&nbsp;Share</a>
                        <a id="logout" className="ml-1 p-2" href="/"><FontAwesomeIcon icon={faSignOutAlt} />&nbsp;&nbsp;Logout</a>
                    </Menu>
                    <div id="page-wrap" style={{height: "100%",overflow:"auto"}}>
                        {/* ----------------------The page content starts here---------------------- */}
                        
                        {/* ----------------------The page content ends here---------------------- */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default DashboardComponent;