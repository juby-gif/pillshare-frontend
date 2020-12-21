import React from 'react';

import SidebarComponent from '../../Menu/sideBarComponent';
import NavigationComponent from '../../Menu/navigationComponent';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';

interface IProps{
min:number;
max:number;
avg?:number
}

const HeartRateViewMoreComponent = (props:IProps):JSX.Element =>{
    const { min,max,avg } = props;
return(
    <React.Fragment>
        <div id="app" style={{height: "100%"}}>
            <div id="outer-container" style={{height: "100%"}}>

                {/* --- Sidebar ---*/}
                <SidebarComponent />
                {/* --- Sidebar ---*/}
                
                <div className="" id="page-wrap" style={{height: "100%",overflow:"auto"}}>

                    {/* ----------------------The page content starts here---------------------- */}


                    {/* --- Navigation ---*/}
                    <NavigationComponent />
                    {/* --- Navigation ---*/}


                    <h3 style={{textAlign: "center"}} className="mt-3 display-3">HEART RATE DEMOGRAPHICS</h3>
                    <div className="p-3 mb-5" style={{width: "90%",height: "30rem",objectFit: "cover", margin:"auto"}} id="chartdiv"></div>

                    <Container fluid className="mt-5">
                        <CardDeck style={{margin: "auto",width: "55%",}}>
                            <Card className="mb-4 text-center" style={{ color:"#fff",backgroundColor:"rgb(102,0,0)",minWidth: '15rem',maxWidth:'15rem',borderRadius:"18px 18px 18px 18px" }}>
                                <Card.Body>
                                    <Row className="mb-2">
                                        <Col>
                                            <Card.Subtitle style={{fontSize:"1.3rem"}}><b>High (bpm)</b></Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <h4>{max}</h4>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="mb-4 text-center" style={{ color:"#fff",backgroundColor:"#6b6d0b",minWidth: '15rem',maxWidth:'15rem',borderRadius:"18px 18px 18px 18px" }} >
                                <Card.Body>
                                    <Row className="mb-2">
                                        <Col>
                                            <Card.Subtitle style={{fontSize:"1.3rem"}}><b>Average (bpm)</b></Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <h4>{avg}</h4>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="mb-4 text-center" style={{ color:"#fff",backgroundColor:"#3f00d1",minWidth: '15rem',maxWidth:'15rem',borderRadius:"18px 18px 18px 18px" }} >
                                <Card.Body>
                                    <Row className="mb-2">
                                        <Col>
                                            <Card.Subtitle style={{fontSize:"1.3rem"}}><b>Low (bpm)</b></Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <h4>{min}</h4>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Container>

                    {/* ----------------------The page content starts here---------------------- */}        
                </div>
            </div>
        </div>
    </React.Fragment>
);
}
export default HeartRateViewMoreComponent;