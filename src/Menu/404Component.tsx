import React from 'react';
import { Button, Card, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../img/404-logo.png';
import { LOGGED_IN_USER_ID } from '../constants';


interface IProps{

}

const PageNotFoundComponent = (props:IProps):JSX.Element => {
    const userStatus:string|null = localStorage.getItem(LOGGED_IN_USER_ID);
    return(
    <React.Fragment>
        <Navbar style={{backgroundColor:"#036599"}}>
            <Navbar.Brand href="#">
                <img
                    alt="logo"
                    src={logo}
                    width="80"
                    height="60"
                    className="d-inline-block align-top ml-3"
                />
            </Navbar.Brand>
        </Navbar>
        <Container fluid>   
            <Card className="m-2" style={{ display:"flex", border:"none", position:"absolute"  }}>
                <Card.Body>
                    <Card.Title className="display-6">404</Card.Title>
                    <h4 className="display-6 text-muted">Sorry! The page you've requested seems to be doesn't exist.</h4>
                </Card.Body>
                {(userStatus !== "" && userStatus !== undefined && userStatus !==null)&&(<Card.Footer style={{ border:"none" }}>
                    <Link to="/dashboard"><Button className="card-button p-3" size="lg">Back to Dashboard</Button></Link>
                </Card.Footer>)}
                {(userStatus === "" || userStatus === undefined || userStatus ===null)&&(<Card.Footer style={{ border:"none" }}>
                    <Link to="/login"><Button className="card-button p-3" size="lg">Back to Login</Button></Link>
                </Card.Footer>)}
            </Card>
        </Container>
    </React.Fragment>
    )
}

export default PageNotFoundComponent;