import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StepIconProps } from '@material-ui/core/StepIcon';
import { StepConnectorProps } from '@material-ui/core';
import { Container,Row,Col } from 'react-bootstrap';

import '../App.css';
import SidebarComponent from '../Menu/sideBarComponent';
import NavigationComponent from '../Menu/navigationComponent';
import PillEditModalContainer from '../containers/modalContainers/pillEditModalContainer';


  
interface IProps {
    classes : Record<"button" | "root" | "instructions", string>
    activeStep : number;
    steps : string[];
    handleNext : (event: React.SyntheticEvent) => void;
    handleBack : (event: React.SyntheticEvent) => void;
    getStepContent : (step: number) => JSX.Element | string;
    ColorlibStepIcon:(props: StepIconProps)=> JSX.Element;
    ColorlibConnector :React.ComponentType<StepConnectorProps>

    }

const PillEditComponentWizard = (props: IProps) : JSX.Element => {
    const { classes, activeStep, steps, handleNext, handleBack,getStepContent, ColorlibConnector,ColorlibStepIcon} = props;
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
                        
                        {/* --- Wizard ---*/}
                            <Container fluid>
                                <Row>
                                    <Col className="mr-5">
                                        <div className={classes.root}>
                                            <Stepper className="menu1_hor" alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                                                {steps.map((label) => (
                                                <Step key={label}>
                                                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                                </Step>
                                                ))}
                                            </Stepper>
                                            <div className="ml-1 mb-5">
                                                {activeStep === steps.length  ? (
                                                    <div>
                                                        <PillEditModalContainer modalShow={true}/>
                                                    </div>
                                                    ) : (
                                                    <div>
                                                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                                        <div style={{margin:"3rem",float:"right"}}>
                                                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                                                Back
                                                            </Button>
                                                            <Button
                                                                style={{ width:"10rem", backgroundColor:"#036599", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}}
                                                                variant="contained"
                                                                color="primary"
                                                                onClick={handleNext}
                                                                // className={classes.button}
                                                            >
                                                                {activeStep === steps.length - 1 ? 'Save and Submit' : 'Save and Next'}
                                                            </Button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            {/* --- Wizard ---*/}

                        {/* ----------------------The page content ends here---------------------- */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default PillEditComponentWizard;
