import React from 'react';
import { Row,Col,Container,InputGroup, FormControl } from 'react-bootstrap';

import '../../App.css';

interface IProps {
    onAnxietyCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onIrritabilityCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDepressionCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPeacefulCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onHappyCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onOthersCheck ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onOthersValueChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    anxietyCheck ?: boolean;
    depressionCheck ?: boolean;
    irritabilityCheck ?: boolean;
    peacefulCheck ?: boolean;
    happyCheck ?: boolean;
    othersCheck ?: boolean;
    othersValue ?: string;
}

const PillDescriptionComponent = (props: IProps) : JSX.Element => {

    const { onAnxietyCheck,
            onIrritabilityCheck,
            onDepressionCheck,
            onPeacefulCheck,
            onHappyCheck,
            onOthersCheck,
            onOthersValueChange,
            anxietyCheck,
            depressionCheck,
            irritabilityCheck,
            peacefulCheck,
            happyCheck,
            othersCheck,
            othersValue,
        } = props;
    return(
        <React.Fragment>
            <div id="app" style={{height: "100%"}}>
                <div id="outer-container" style={{height: "100%"}}>
                    <Container style={{margin: "auto",width: "80%",border: "3px solid white",padding: "16px"}} fluid>
                        <Row>
                            <ol className="ml-5 mt-5">
                                <li className="mt-3">Do you feel any transition in your disposition? If yes, select the ones that suits</li>
                                <Row className="mt-3 p-2">
                                    <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                        <InputGroup.Prepend>
                                        <InputGroup.Checkbox aria-label="mood" value="Anxiety" onChange={onAnxietyCheck} checked={anxietyCheck} />
                                        </InputGroup.Prepend>
                                        <FormControl 
                                            value="Anxiety"
                                        />
                                    </InputGroup>
                                    <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                        <InputGroup.Prepend>
                                        <InputGroup.Checkbox aria-label="mood" value="Irritability" onChange={onIrritabilityCheck} checked={irritabilityCheck} />
                                        </InputGroup.Prepend>
                                        <FormControl aria-label="Text input with checkbox"
                                            value="Irritability"
                                        />
                                    </InputGroup>
                                    <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                        <InputGroup.Prepend>
                                        <InputGroup.Checkbox aria-label="mood" value="Depression" onChange={onDepressionCheck} checked={depressionCheck} />
                                        </InputGroup.Prepend>
                                        <FormControl aria-label="Text input with checkbox"
                                            value="Depression"
                                        />
                                    </InputGroup>
                                    <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                        <InputGroup.Prepend>
                                        <InputGroup.Checkbox aria-label="mood" value="Peaceful" onChange={onPeacefulCheck} checked={peacefulCheck} />
                                        </InputGroup.Prepend>
                                        <FormControl aria-label="Text input with checkbox"
                                            value="Peaceful"
                                        />
                                    </InputGroup>
                                    <InputGroup as={Col} xs="10" md="5" lg="4" className="mb-3">
                                        <InputGroup.Prepend>
                                        <InputGroup.Checkbox aria-label="mood" value="Happy" onChange={onHappyCheck} checked={happyCheck} />
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
                            </ol>
                        </Row>
                    </Container>
                    {/* ----------------------The page content ends here---------------------- */}
                </div>
            </div>
        </React.Fragment>
    );
}
export default PillDescriptionComponent;