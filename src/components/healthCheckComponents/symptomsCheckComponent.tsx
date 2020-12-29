import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Row,Col,Container,InputGroup, FormControl } from 'react-bootstrap';
// import Rating from 'react-rating';
import { MultiSelectComponent,MultiSelectChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';

import '../../App.css';

interface IProps {
    onIntensityClick: (rating:number) => void;
    onValuesChange ?: (value: MultiSelectChangeEventArgs | undefined) => void;
    onTimeChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDateChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
    date ?: string;
    time ?: string;
    intensity ?:number;
    fieldsObj ?: object;
    dropdownArray ?: {[key: string]: Object }[];
    values ?: string[] | number[] | boolean[];
}

const SymptomsCheckComponent = (props: IProps) : JSX.Element => {

    const { 
        // onIntensityClick,
        onValuesChange,
        onDateChange,
        onTimeChange,
        date,
        time,
        // intensity,
        dropdownArray,
        fieldsObj,
        values
        } = props;
    return(
        <React.Fragment>
            <div id="app" style={{height: "100%"}}>
                <div id="outer-container" style={{height: "100%"}}>
                    <Container style={{margin: "auto",width: "80%",border: "3px solid white",padding: "16px"}} fluid>
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
                                                onChange = {onDateChange}
                                                value = {date}
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
                                                onChange = {onTimeChange}
                                                value = {time}
                                            />
                                        </InputGroup>
                                    </Col>


                                    {/********************** Intensity checker(Phase 2) *********************/}

                                    {/* <Col xs="8" md="5" lg="4"  className="ml-2 mr-4 mb-3">
                                    <label>Intensity:</label><br/>
                                        <Rating 
                                            start = {0}
                                            stop = {5}
                                            step = {1}
                                            initialRating={intensity}
                                            onClick={e=>onIntensityClick(e)}
                                            fullSymbol= {<FontAwesomeIcon icon={faStar} /> }
                                        />
                                    </Col> */}

                                    {/********************** Intensity checker *********************/}


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
export default SymptomsCheckComponent;