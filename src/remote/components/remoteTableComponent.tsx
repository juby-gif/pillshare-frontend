import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
interface IProps {
  data : DataProps[];
  debuggMode : boolean;
}

interface IntervalProps {
  part: string[];
  time: string[];
}

interface DataProps{
  index:number;
  before_or_after ?: string;
  dosage ?: string;
  dose ?: number;
  duration ?: number;
  end_date ?: string;
  start_date ?: string;
  missed ?: string[];
  measure ?: string;
  name ?: string;
  reason ?: string;
  taken ?: string[];
  intervals ?: IntervalProps;
}

 
const RemoteTableComponent = (props:IProps):JSX.Element => {
  const {data,debuggMode } = props;
  // console.log(data)
    return (
      <React.Fragment>
        <Table style={{backgroundColor:"#fff"}} size="sm" className="mt-3" responsive="lg" bordered hover={false}>
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
                  {debuggMode && <th>Settings</th>}
              </tr>
          </thead>
          <tbody style={{backgroundColor:"#fff"}}>
            {data?data.map((info,index) => (
              <tr key={index}>
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
                            <td>
                              <Button>Edit</Button>
                            </td>
                            <td>
                              <Button>Delete</Button>
                            </td>
                          </tr>
                )}
              </tr>
            )):<tr>No data available</tr>
          }               
          </tbody>
        </Table>
      </React.Fragment>
    )
  }

export default RemoteTableComponent;