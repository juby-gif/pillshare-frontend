import React from 'react';
import { Col,Container,Form } from 'react-bootstrap';

import '../../App.css';

interface IProps {
    onDoseChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onMeasureChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDosageChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBeforeOrAfterFoodChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPillNameChange ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    dose ?: string;
    dosage ?: string;
    measure ?: string;
    beforeOrAfter ?: string;
    name ?: string;
}

const PillDescriptionComponent = (props: IProps) : JSX.Element => {
    const { 
            onDosageChange,
            onMeasureChange,
            onDoseChange,
            onBeforeOrAfterFoodChange,
            onPillNameChange,
            name,
            dose,
            dosage,
            measure,
            beforeOrAfter
          } = props;
    return(
        <React.Fragment>
            <div id="app" style={{height: "100%"}}>
                <div id="outer-container" style={{height: "100%"}}>
                    <Container style={{margin: "auto",width: "80%",border: "3px solid white",padding: "16px"}} fluid>
                        <Form  noValidate validated={true}>
                            <Form.Row>
                                <Col xs="9" md="5" lg="3">
                                    <Form.Group controlId="pill-name">
                                        <Form.Label>Pill Name</Form.Label>
                                        <Form.Control type="input" placeholder="Pill Name" value={name} onChange={onPillNameChange} required/>
                                    </Form.Group>
                                </Col>
                                <Col xs="6" md="3" lg="3">
                                    <Form.Group controlId="pill-dose">
                                        <Form.Label>Dose</Form.Label >
                                        <Form.Control as="select" value={dose} onChange={onDoseChange} required>
                                        <option value="0">Dose...</option>
                                        <option value="0.5">0.5</option>
                                        <option value="1">1</option>
                                        <option value="1.5">1.5</option>
                                        <option value="2">2</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col xs="7" md="4" lg="3">
                                    <Form.Group controlId="pill-dose-measure">
                                        <Form.Label>Measure</Form.Label>
                                        <Form.Control as="select" value={measure} onChange={onMeasureChange} required>
                                            <option value="0">Measure...</option>
                                            <option value="Tablet">Tablet</option>
                                            <option value="Ampule">Ampule</option>
                                            <option value="Capsule">Capsule</option>
                                            <option value="Pound(s)">Pound(s)</option>
                                            <option value="Milligram">Milligram</option>
                                            <option value="gram">gram</option>
                                            <option value="Kilogram">Kilogram</option>
                                            <option value="Milliliter">Milliliter</option>
                                            <option value="Ounce">Ounce</option>
                                            <option value="Tablespoon">Tablespoon</option>
                                            <option value="Teaspoon">Teaspoon</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col xs="10" md="5" lg="4">
                                    <Form.Group controlId="pill-dosage">
                                        <Form.Label>Dosage</Form.Label>
                                        <Form.Control as="select" value={dosage} onChange={onDosageChange} required>
                                            <option value="0">Dosage...</option>
                                            <option value="EOD - Every other day">EOD - Every other day</option>
                                            <option value="SID - Once daily">SID - Once daily</option>
                                            <option value="BID - Twice daily">BID - Twice daily</option>
                                            <option value="TID - Three time daily">TID - Three time daily</option>
                                            <option value="QID - Four time daily">QID - Four time daily</option>
                                            <option value="PRN - As needed">PRN - As needed</option>
                                            <option value="qh - Every hour">qh - Every hour</option>
                                            <option value="q4h - Every 4 hours">q4h - Every 4 hours</option>
                                            <option value="q30min - Every 30 minutes">q30min - Every 30 minutes</option>
                                            <option value="Qd - Every day">Qd - Every day</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col xs="9" md="5" lg="3">
                                    <Form.Group controlId="before-or-after-food">
                                        <Form.Label>Before / After Food</Form.Label>
                                        <Form.Control as="select" value={beforeOrAfter} onChange={onBeforeOrAfterFoodChange} required>
                                            <option value="0">Before / After Food...</option>
                                            <option value="Before">Before</option>
                                            <option value="After">After</option>
                                            <option value="Both">Both</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Container>
                    {/* ----------------------The page content ends here---------------------- */}
                </div>
            </div>
        </React.Fragment>
    );
}
export default PillDescriptionComponent;