import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Row,Col,Container,InputGroup, FormControl,Button, } from 'react-bootstrap';
import Rating from 'react-rating';
import { MultiSelectComponent,MultiSelectChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';

import '../App.css';
import SidebarComponent from '../Menu/sideBarComponent';
import NavigationComponent from '../Menu/navigationComponent';

interface IProps {
    onIntensityClick: (rating:number) => void;
    onAnxietyCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onIrritabilityCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDepressionCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPeacefulCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onHappyCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onOthersCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onOthersValueChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onImprovingCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSameCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBadCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onWorseCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onValuesChange ?: (value: MultiSelectChangeEventArgs | undefined) => void;
    intensity ?:number;
    anxietyCheck ?: string;
    depressionCheck ?: string;
    irritabilityCheck ?: string;
    peacefulCheck ?: string;
    happyCheck ?: string;
    othersCheck ?: boolean;
    othersValue ?: string;
    healthCheck ?: string;
    fieldsObj ?: object;
    dropdownArray ?: {[key: string]: Object }[];
    values ?: string[];
}

const HealthCheckComponent = (props: IProps) : JSX.Element => {

    const { onIntensityClick,
            onAnxietyCheck,
            onImprovingCheck,
            onSameCheck,
            onBadCheck,
            onWorseCheck,
            onIrritabilityCheck,
            onDepressionCheck,
            onPeacefulCheck,
            onHappyCheck,
            onOthersCheck,
            onOthersValueChange,
            onValuesChange,
            intensity,
            anxietyCheck,
            depressionCheck,
            irritabilityCheck,
            peacefulCheck,
            healthCheck,
            happyCheck,
            othersCheck,
            othersValue,
            dropdownArray,
            fieldsObj,
            values
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
                        <NavigationComponent />
                        {/* --- Navigation ---*/}

                        <Container style={{margin: "auto",width: "80%",border: "3px solid white",padding: "16px"}} fluid>
                            <h3 className="display-3 d-flex justify-content-center">Health check profile tracking</h3>
                            <Row>
                                <ol className="ml-5 mt-5">
                                    <li>How are you feeling today?</li>
                                    <Row className="p-3">
                                        <MultiSelectComponent change={onValuesChange} value={values} dataSource={dropdownArray} fields={fieldsObj}  popupHeight="250px" popupWidth="290px"  placeholder="Select your symptoms from the list" />
                                    </Row>
                                    <Row>
                                        <Col className="ml-2 mr-4 mb-3">
                                        <label>Date:</label>
                                            <InputGroup>
                                                <FormControl
                                                    placeholder=""
                                                    aria-label="Date"
                                                    type="date"
                                                />
                                            </InputGroup>
                                        </Col>
                                        <Col className="ml-2 mr-4 mb-3">
                                        <label>Time:</label>
                                            <InputGroup>
                                                <FormControl
                                                    placeholder=""
                                                    aria-label="Time"
                                                    type="time"
                                                />
                                            </InputGroup>
                                        </Col>
                                        <Col xs="8" md="5" lg="4"  className="ml-2 mr-4 mb-3">
                                        <label>Intensity:</label><br/>
                                            <Rating 
                                                start = {0}
                                                stop = {5}
                                                step = {1}
                                                initialRating={intensity}
                                                onClick={e=>onIntensityClick(e)}
                                                fullSymbol= {<FontAwesomeIcon icon={faStar} /> }
                                            />
                                        </Col>
                                    </Row>
                                    <li className="mt-3">Do you feel any transition in your disposition? If yes, select the ones that suits</li>
                                    <Row className="mt-3 p-2">
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="mood" value="Anxiety" onChange={onAnxietyCheck} checked={anxietyCheck === "Anxiety"} />
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                value="Anxiety"
                                            />
                                        </InputGroup>
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="mood" value="Irritability" onChange={onIrritabilityCheck} checked={irritabilityCheck === "Irritability"} />
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Text input with checkbox"
                                                value="Irritability"
                                            />
                                        </InputGroup>
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="mood" value="Depression" onChange={onDepressionCheck} checked={depressionCheck === "Depression"} />
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Text input with checkbox"
                                                value="Depression"
                                            />
                                        </InputGroup>
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="mood" value="Peaceful" onChange={onPeacefulCheck} checked={peacefulCheck === "Peaceful"} />
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Text input with checkbox"
                                                value="Peaceful"
                                            />
                                        </InputGroup>
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="mood" value="Happy" onChange={onHappyCheck} checked={happyCheck === "Happy"} />
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Text input with checkbox"
                                                value="Happy"
                                            />
                                        </InputGroup>
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Checkbox aria-label="mood" onChange={onOthersCheck} checked={othersCheck} />
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Text input with checkbox"
                                                value="Others"
                                            />
                                        </InputGroup>
                                        {othersCheck && (
                                            <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                                <FormControl aria-label="Text input with checkbox"
                                                    placeholder="What do you feel?"
                                                    value={othersValue}
                                                    onChange={onOthersValueChange}
                                                />
                                        </InputGroup>)}
                                    </Row>
                                    <li>How do you feel overall?</li>
                                    <Row className="mt-3 p-2">
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Radio name="feel" onChange={onImprovingCheck} value="Improving" checked={healthCheck === "Improving"} />
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                id="feel4" 
                                                value="Improving"
                                                
                                            />
                                        </InputGroup>
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Radio name="feel" onChange={onSameCheck} value="Remains the same" checked={healthCheck === "Remains the same"} />
                                            </InputGroup.Prepend>
                                            <FormControl
                                                id="feel1" 
                                                value="Remains the same"
                                            />
                                        </InputGroup>
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Radio name="feel" onChange={onBadCheck} value="Bad" checked={healthCheck === "Bad"} />
                                            </InputGroup.Prepend>
                                            <FormControl
                                                id="feel2" 
                                                value="Bad"
                                            />
                                        </InputGroup>
                                        <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                            <InputGroup.Prepend>
                                            <InputGroup.Radio name="feel" onChange={onWorseCheck} value="Getting Worse" checked={healthCheck === "Getting Worse"} />
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                id="feel3" 
                                                value="Getting Worse"
                                            />
                                        </InputGroup>
                                    </Row>
                                </ol>
                            </Row>
                            <Button className="ml-5">
                                Submit
                            </Button>
                        </Container>
                        {/* ----------------------The page content ends here---------------------- */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default HealthCheckComponent;