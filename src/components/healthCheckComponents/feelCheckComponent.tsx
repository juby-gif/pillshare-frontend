import React from 'react';
import { Row,Col,Container,InputGroup, FormControl } from 'react-bootstrap';

import '../../App.css';

interface IProps {
    onImprovingCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSameCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBadCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onWorseCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    healthCheck ?: string;
}

const FeelCheckComponent = (props: IProps) : JSX.Element => {

    const { onImprovingCheck,
            onSameCheck,
            onBadCheck,
            onWorseCheck,
            healthCheck,
        } = props;
    return(
        <React.Fragment>
            <div id="app" style={{height: "100%"}}>
                <div id="outer-container" style={{height: "100%"}}>
                    <Container style={{margin: "auto",width: "80%",border: "3px solid white",padding: "16px"}} fluid>
                        <Row>
                            <ol className="ml-5 mt-5">
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
                    </Container>
                    {/* ----------------------The page content ends here---------------------- */}
                </div>
            </div>
        </React.Fragment>
    );
}
export default FeelCheckComponent;