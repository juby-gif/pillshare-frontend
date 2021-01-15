import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faFacebookF } from '@fortawesome/free-brands-svg-icons';

import logo from '../img/logo-flat.jpeg'
import watch from '../img/watch.png';
import { Link } from 'react-router-dom';

interface IProps {

}

const HomePageComponent = (props:IProps):JSX.Element => {
    return(
        <React.Fragment>
            <div className="section banner-full">
	            <Container>
		            <Row>
                        <div className="col-lg-4 justify-content-xs-center">
                            <div className="image" data-aos="flip-right">
                                <img draggable={false} src={watch} alt="Iphone-Black"/>
                            </div>
                        </div>
                        <div className="col-lg-8 align-self-center">
                            <div className="block">
                                <div className="logo mb-4">
                                    <img draggable={false} src={logo} alt="logo" width="173rem" height="45rem"/>
                                </div>
                                <h1>Introducing Game Changing
                                    <br />Health tracking App</h1>
                                <p className="text-muted">
                                    The simple, intuitive app that makes it easy
                                    <br />to track your vitals, manage your pills,
                                    <br />and share your real-time data with family.
                                </p>
                                <ul className="list-inline app-badge">
                                    <li className="list-inline-item">
                                        <Link to="/login"><Button style={{width:"8rem", backgroundColor:"#036599", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}}>Get Started!</Button></Link>
                                    </li>
                                </ul>
                                {/* <div className="support">
                                    <Image src="images/icons/supported-services.png" alt="supported-services" fluid/>
                                </div> */}
                            </div>
                        </div>
		            </Row>
	            </Container>
            </div>

            <footer className="footer-classic">
                <ul className="social-icons list-inline">
                    <li className="list-inline-item">
                    <a href="https://www.facebook.com/pillshare"><FontAwesomeIcon style={{fontSize:"1.5rem",color:"#000"}} className="mr-2" icon={faFacebookF} /></a>
                    </li>
                    <li className="list-inline-item">
                    <a href="mailto:juby.varughese@llinstitute.com"><FontAwesomeIcon style={{fontSize:"1.5rem",color:"#000"}} className="mr-2" icon={faEnvelope} /></a>
                    </li>
                </ul>
                <ul className="footer-links list-inline">
                    <li className="list-inline-item">
                    <h6 style={{fontSize:"1rem", fontWeight:"bolder"}}>Copyright &copy; 2021 Pillshare. All rights reserved</h6>
                    </li>
                </ul>
            </footer>
        </React.Fragment>
    )
}

export default HomePageComponent;