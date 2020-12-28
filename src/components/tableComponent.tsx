import React from 'react';
import { Button, Table, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCog, faPencilAlt, faPlus, faTrash, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import PillDeleteModalContainer from '../containers/modalContainers/pillDeleteModalContainer';


interface IProps {
  data : DataProps[];
  debuggMode : boolean;
  isDeleted ?:boolean;
  onEditClick : (event : React.SyntheticEvent,id:number) => void;
  onDeleteClick : (event : React.SyntheticEvent,id:number) => void;
  onCancelClick : (event : React.SyntheticEvent) => void;
  onDeleteConfirmationClick : (event : React.SyntheticEvent) => void;
  deleteShow ?:boolean;
}

interface IntervalProps {
  part: string[];
  time: string[];
}

interface DataProps{
  index?:number;
  before_or_after ?: string;
  dosage ?: string;
  dose ?: string;
  duration ?: string;
  end_date ?: string;
  start_date ?: string;
  missed ?: string[];
  measure ?: string;
  name ?: string;
  reason ?: string;
  taken ?: string[];
  intervals ?: IntervalProps;
  isDeleted ?:boolean;
  id?:number;
}

const TableComponent = (props:IProps):JSX.Element => {
  const {
        data,
        debuggMode,
        // isDeleted,
        deleteShow,
        onEditClick,
        onDeleteClick,
        onCancelClick,
        onDeleteConfirmationClick,
       } = props;
  // console.log(data)
    return (
      <React.Fragment>
        <Table className="table-responsive mt-3" style={{backgroundColor:"#fff",overflowX: "scroll",whiteSpace: "nowrap",wordBreak: "break-word", tableLayout: "fixed"}} size="sm"  responsive="lg" bordered hover={false}>
          <thead style={{backgroundColor:"#fff"}}>
              <tr>
                  <th>SL.No</th>
                  <th>Pill Name</th>
                  <th>Dose</th>
                  <th>Dosage</th>
                  <th>Before / After Food</th>
                  <th>Duration(days)</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Prescribed Intervals</th>
                  <th>Reason for taking this medication</th>
                  <th><tr>Status: <div></div><div></div><div></div><div></div><FontAwesomeIcon className="yaggrw" style={{fontSize:"1.5rem",color:"red"}} icon={faCircle} /></tr>Taken / Missed<tr></tr></th>
                  {debuggMode && <th><FontAwesomeIcon style={{fontSize:"1.1rem",color:" #0b4dad"}} icon={faCog} /></th>}
              </tr>
          </thead>
          <tbody style={{backgroundColor:"#fff"}}>
            {data?data.map((info,index) => (
              info.isDeleted === false && (<tr key={index}>
                <td>
                  {info.index}
                </td>
                <td>
                  {info.name}
                </td>
                <td>
                  {info.dose} {' '}{info.measure}
                </td>
                <td>
                  {info.dosage}
                </td>
                <td>
                  {info.before_or_after}
                </td>
                <td>
                  {info.duration}
                </td>
                <td style={{width: '6rem', textAlign: 'center'}}>
                  {info.start_date}
                </td>
                <td style={{width: '6rem', textAlign: 'center'}}>
                  {info.end_date}
                </td>
                <td>
                  <Table borderless={true} hover={false} variant="light" responsive="xl">
                    <thead>
                      <tr>
                        <td>
                          <th>
                            Part
                          </th>
                        </td>
                        <td>
                          <th>
                            Time
                          </th>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {info.intervals?info.intervals.part.map((part,index)=>
                              <tr key={index}>
                                  <b>{part}:</b>
                              </tr>):"-"}
                        </td>
                        <td>
                          {info.intervals?info.intervals.time.map((time,index)=>
                              <tr key={index}>
                                  {time}
                              </tr>):"-"}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </td>
                <td>
                  {info.reason}
                </td>
                <td>
                  <Table borderless={true} hover={false} variant="light" responsive="xl">
                    <tbody>
                      <tr>
                        <tr>
                          {info.taken?info.taken.map((part,index)=>
                              <tr key={index}>
                                  <b>Taken:</b>&nbsp;&nbsp;{part}
                              </tr>):"-"}
                        </tr>
                        <tr>
                          {info.missed?info.missed.map((part,index)=>
                              <tr key={index}>
                                  <b>Missed:</b>&nbsp;&nbsp;{part}
                              </tr>):"-"}
                        </tr>
                      </tr>
                    </tbody>
                  </Table>
                </td>
                {debuggMode && (
                          <tr>
                            <td style={{border: "none"}}>
                              <Link to="#" onClick={e => onEditClick(e,info.id?info.id:0)}><FontAwesomeIcon style={{fontSize:"1rem",color:" #fb8c0d"}} icon={faPencilAlt} /></Link>
                            </td>
                            <td style={{border: "none"}}>
                              <Link to="#" onClick={e => onDeleteClick(e,info.id?info.id:0)}><FontAwesomeIcon style={{fontSize:"1rem",color:" #fb8c0d"}} icon={faTrash} /></Link>
                            </td>
                          </tr>
                )}
              </tr>
           ))):<tr>No data available</tr>
          }               
          </tbody>
        </Table>
        {debuggMode && <Link to="/add-pills"><Button className="m-3"><FontAwesomeIcon style={{fontSize:"0.8rem",color:"#fff"}} icon={faPlus} /> Add new pill</Button></Link>}
        {deleteShow === true && (
        <Modal
        backdrop="static"
        keyboard={false} 
        show={deleteShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        
        <Modal.Body style={{textAlign:"center"}}>
        <FontAwesomeIcon style={{fontSize:"3.8rem",color:"#ff0d0d",display: "block",height: "100%",width: "15%",margin: "auto"}} icon={faExclamationCircle} />
          <h1 className="mt-4" style={{color:"rgba(0,0,0,0.7)"}}>
            Are you sure?
          </h1>
          <p className="m-4" style={{fontSize:"20px",color:"grey"}}>
            Do you really want to delete this pill record? You won't have access to this record once deleted.
          </p>
          <Button style={{width:"7rem",fontSize:"1.1rem"}} variant="secondary" className="mt-3 mr-5 p-3" onClick={onCancelClick}>Cancel</Button>
          <Button style={{width:"7rem",fontSize:"1.1rem"}} variant="danger" className="mt-3 p-3" onClick={onDeleteConfirmationClick}>Delete</Button>
        </Modal.Body>
      </Modal>)}
      </React.Fragment>
    )
  }

export default TableComponent;