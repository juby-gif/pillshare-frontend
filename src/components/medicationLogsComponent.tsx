import React from 'react';import { Container,Table } from 'react-bootstrap';

import '../App.css';
import SidebarComponent from '../Menu/sideBarComponent';
import NavigationComponent from '../Menu/navigationComponent';


interface IProps {
    medical_information : MedicalProps[];
  }
  
  interface MedicalProps {
    before_or_after ?: string;
    dosage ?: string;
    dose ?: number;
    duration ?: number;
    end_date ?: string;
    start_date ?: string;
    time_taken ?: TakenProps;
    missed ?: string;
    measure ?: string;
    name ?: string;
    reason ?: string;
    taken ?: string;
    id : number;
  }
  interface TakenProps{
    part ?: string;
    time ?: string;
  }

const MedicationLogsComponent = (props: IProps) : JSX.Element => {
    const { medical_information } = props;
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
                            <h3 className="display-3 d-flex justify-content-center">Medication Logs</h3>
                            <Table className="mt-3" responsive="xl" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>SL.No</th>
                                        <th>Pill Name</th>
                                        <th>Dose</th>
                                        <th>Dosage</th>
                                        <th>Before / After Food</th>
                                        <th>Duration</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Time Taken</th>
                                        <th>Reason for taking this medication</th>
                                        <th>Taken / Missed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {medical_information.length!==0?medical_information.map((datum) =>(
                                        <tr key={datum.id}>
                                            <td>{datum.id}</td>
                                            <td>{datum.name}</td>
                                            <td>{datum.dose}{' '}{datum.measure}</td>
                                            <td>{datum.dosage}</td>
                                            <td>{datum.before_or_after}</td>
                                            <td>{datum.duration}</td>
                                            <td>{datum.start_date}</td>
                                            <td>{datum.end_date}</td>
                                            <td>{datum.time_taken?datum.time_taken.part + " ":""}{datum.time_taken?datum.time_taken.time:""}</td>
                                            <td>{datum.reason}</td>
                                            <td>{datum.taken}{''}{datum.missed}</td>
                                        </tr>
                                    )):<div>{" "}</div>}
                                </tbody>
                        </Table>
                        </Container>
                        {/* ----------------------The page content ends here---------------------- */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default MedicationLogsComponent;
