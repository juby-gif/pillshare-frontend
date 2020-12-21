import React from 'react';

import SidebarComponent from '../sideBarComponent';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';

interface IProps{
    sysMin:number;
    diaMin:number;
    sysMax:number;
    diaMax:number;
    sysAvg?:number|string;
    diaAvg?:number|string;
}

const BloodPressureViewMoreComponent = (props:IProps):JSX.Element =>{
    const { 
        sysMin,
        diaMin,
        sysMax,
        diaMax,
        sysAvg,
        diaAvg,
         } = props;
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
                    {/* <NavigationComponent /> */}
                    {/* --- Navigation ---*/}


                    <h3 style={{textAlign: "center"}} className="mt-3 display-3">BLOOD PRESSURE DEMOGRAPHICS</h3>
                    <div className="p-3 mb-5" style={{width: "90%",height: "30rem",objectFit: "cover", margin:"auto"}} id="chartdiv"></div>

                    <Container fluid className="mt-5">
                        <CardDeck style={{margin: "auto",width: "55%",}}>
                        <Card className="mb-4 text-center" style={{ color:"#fff",backgroundColor:"rgb(102,0,0)",minWidth: '15rem',maxWidth:'15rem',borderRadius:"18px 18px 18px 18px" }}>
                                <Card.Body>
                                    <Row className="mb-2">
                                        <Col>
                                            <Card.Subtitle style={{fontSize:"1.3rem"}}><b>Systole High (mmHg)</b></Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <h4>{sysMax}</h4>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="mb-4 text-center" style={{ color:"#fff",backgroundColor:"rgb(102,0,0)",minWidth: '15rem',maxWidth:'15rem',borderRadius:"18px 18px 18px 18px" }}>
                                <Card.Body>
                                    <Row className="mb-2">
                                        <Col>
                                            <Card.Subtitle style={{fontSize:"1.3rem"}}><b>Diastole High (mmHg)</b></Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <h4>{diaMax}</h4>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="mb-4 text-center" style={{ color:"#fff",backgroundColor:"#3f00d1",minWidth: '15rem',maxWidth:'15rem',borderRadius:"18px 18px 18px 18px" }}>
                                <Card.Body>
                                    <Row className="mb-2">
                                        <Col>
                                            <Card.Subtitle style={{fontSize:"1.3rem"}}><b>Systole Low (mmHg)</b></Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <h4>{sysMin}</h4>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="mb-4 text-center" style={{ color:"#fff",backgroundColor:"#3f00d1",minWidth: '15rem',maxWidth:'15rem',borderRadius:"18px 18px 18px 18px" }}>
                                <Card.Body>
                                    <Row className="mb-2">
                                        <Col>
                                            <Card.Subtitle style={{fontSize:"1.3rem"}}><b>Diastole Low (mmHg)</b></Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <h4>{diaMin}</h4>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="mb-4 text-center" style={{ color:"#fff",backgroundColor:"#6b6d0b",minWidth: '15rem',maxWidth:'15rem',borderRadius:"18px 18px 18px 18px" }} >
                                <Card.Body>
                                    <Row className="mb-2">
                                        <Col>
                                            <Card.Subtitle style={{fontSize:"1.3rem"}}><b>Systole Average (mmHg)</b></Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <h4>{sysAvg}</h4>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="mb-4 text-center" style={{ color:"#fff",backgroundColor:"#6b6d0b",minWidth: '15rem',maxWidth:'15rem',borderRadius:"18px 18px 18px 18px" }} >
                                <Card.Body>
                                    <Row className="mb-2">
                                        <Col>
                                            <Card.Subtitle style={{fontSize:"1.3rem"}}><b>Diastole Average (mmHg)</b></Card.Subtitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <h4>{diaAvg}</h4>
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
export default BloodPressureViewMoreComponent;