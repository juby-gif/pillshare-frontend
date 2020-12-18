import React from 'react';
import { Form, Container, Button, InputGroup, Card, FormControl, Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';


import NavigationComponent from '../Menu/navigationComponent';
import SidebarComponent from '../Menu/sideBarComponent';


interface IProps {
validated : boolean;
modalShow:boolean;
payload?:string
onAgreementChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
onModalClickShow : (event: React.SyntheticEvent) => void;
onBackClick : (event: React.SyntheticEvent) => void;
}

const ShareComponent = (props:IProps): JSX.Element =>  {
    const { 
        validated,
        modalShow,
        payload,
        onModalClickShow,
        onAgreementChange,
        onBackClick,

     } = props;
    return (
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

                    <Container className="d-flex justify-content-center mt-5" fluid>
                        <Card>
                            <Card.Body>
                                <Card.Title className="d-flex justify-content-center" as="h5">You will be sharing the following vitals:</Card.Title>
                                <Card.Text>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Checkbox readOnly disabled checked={true} aria-label="Checkbox for following text input" />
                                        </InputGroup.Prepend>
                                        <FormControl readOnly disabled value="Heart Rate Stats" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Checkbox readOnly disabled checked={true} aria-label="Checkbox for following text input" />
                                        </InputGroup.Prepend>
                                        <FormControl readOnly disabled value="Blood Pressure Stats" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Checkbox readOnly disabled checked={true} aria-label="Checkbox for following text input" />
                                        </InputGroup.Prepend>
                                        <FormControl readOnly disabled value="Body Temperature Stats" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Checkbox readOnly disabled checked={true} aria-label="Checkbox for following text input" />
                                        </InputGroup.Prepend>
                                        <FormControl readOnly disabled value="Glucose Stats" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Checkbox readOnly disabled checked={true} aria-label="Checkbox for following text input" />
                                        </InputGroup.Prepend>
                                        <FormControl readOnly disabled value="Oxygen Saturation Stats" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Checkbox readOnly disabled checked={true} aria-label="Checkbox for following text input" />
                                        </InputGroup.Prepend>
                                        <FormControl readOnly disabled value="Pill Tracking Information" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Checkbox readOnly disabled checked={true} aria-label="Checkbox for following text input" />
                                    </InputGroup.Prepend>
                                    <FormControl readOnly disabled value="Medical History Logs" />
                                </InputGroup>
                                </Card.Text>
                                <Form.Group className="mt-5 mb-3">
                                    <Form.Check
                                        label="I agree and understand the risk in sharing my health stats remotely"
                                        feedback="You must agree before submitting."
                                        checked={validated}
                                        onChange={onAgreementChange}
                                        required
                                    />
                                </Form.Group>
                                <Button onClick={onModalClickShow} variant="primary">Get sharable link</Button>
                            </Card.Body>
                        </Card>
                    </Container>

                    {/* Modal with sharable link */}
                    {modalShow && (<Modal backdrop="static" keyboard={false} size="lg" show={modalShow} aria-labelledby="contained-modal-title-vcenter">
                        <Modal.Header>
                            <Modal.Title className="d-flex justify-content-center" id="contained-modal-title-vcenter">
                                Here's your sharable link.
                            </Modal.Title>
                            <OverlayTrigger
                                trigger="click"
                                key={'bottom'}
                                placement={'bottom'}
                                overlay={
                                    <Popover id={`popover-positioned-${'bottom'}`}>
                                        <Popover.Title as="h3">{`How to use it?`}</Popover.Title>
                                        <Popover.Content>
                                            This is a payload generated by <strong>Pillshare</strong>. You can just copy the link and share it to the remote user. Using this you will be giving consent to see your health stats live.
                                        </Popover.Content>
                                    </Popover>
                                    }
                            >
                                <Link style={{color:"#0b4dad",textDecoration:"none"}} to="#">How can i use it?</Link>
                            </OverlayTrigger>
                        </Modal.Header>
                        <Modal.Body className="show-grid">
                            <div className="">
                                <span style={{wordWrap:"break-word"}}>
                                {process.env.REACT_APP_WWW_PROTOCOL}://{process.env.REACT_APP_WWW_DOMAIN}/remote/{payload}
                                </span>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <CopyToClipboard text={process.env.REACT_APP_WWW_DOMAIN + '/user/share/' + payload}>
                                <Button>Copy to clipboard</Button>
                            </CopyToClipboard>
                            <Link to="#" onClick={onBackClick}><Button>Back</Button></Link>
                        </Modal.Footer>
                    </Modal>)}

        {/* ----------------------The page content ends here---------------------- */}

                </div>
            </div>
        </div>

    </React.Fragment>
    );
}
export default ShareComponent;