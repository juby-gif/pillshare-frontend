import React, { Component } from 'react';
import { Button, Card, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../img/404-logo.png';


interface IProps{

}

interface StateProps{

}


export default class PageNotFoundComponent extends Component<IProps,StateProps> {
constructor(props:IProps){
    super(props);
    this.state = {

    }
}
render(){
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
                    <Card.Footer style={{ border:"none" }}>
                        <Link to="/dashboard"><Button className="card-button p-3" size="lg">Back to Dashboard</Button></Link>
                    </Card.Footer>
                </Card>
            </Container>
        </React.Fragment>
    )
}
}