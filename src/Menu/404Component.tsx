import React, { Component } from 'react';
import { Button, Card, Container, Navbar } from 'react-bootstrap';

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
                <Navbar.Brand href="#home">
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
                <Card className="m-2" style={{ width: '100%', border:"none" }}>
                    <Card.Body>
                        <Card.Title className="display-6">404</Card.Title>
                        <h4 className="display-6 text-muted">The page you've requested doesn't exist.</h4>
                    </Card.Body>
                    <Card.Footer style={{ border:"none" }}>
                        <Button className="card-button p-3" size="lg">Back to Dashboard</Button>
                    </Card.Footer>
                </Card>
            </Container>
        </React.Fragment>
    )
}
}