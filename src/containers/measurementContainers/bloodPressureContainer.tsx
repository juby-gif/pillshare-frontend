import React, { Component } from 'react';

import BloodPressureComponent from '../../components/measurementComponents/bloodPressureComponent';
import { BLOODPRESSUREDATA, BLOOD_PRESSURE_INSTRUMENT, LOGGED_IN_USER } from '../../constants';

interface IProps {
  
}
interface BloodPressureProps {
  diastoleReading: number;
  systoleReading: number;
  date: string;
  time: string;
  instrumentID: number;
  user_id:string;

}

export default class BloodPressureContainer extends Component<IProps,BloodPressureProps> {
    
    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps) {
      super(props);
      this.state = {
        diastoleReading:0,
        systoleReading:0,
        date:"",
        time:"",
        instrumentID:0,
        user_id:"",
        
      };
      this.onBloodPressureSystoleReadingChange = this.onBloodPressureSystoleReadingChange.bind(this);
      this.onBloodPressureDiastoleReadingChange = this.onBloodPressureDiastoleReadingChange.bind(this);
      this.onDateChange = this.onDateChange.bind(this);
      this.onTimeChange = this.onTimeChange.bind(this);
      this.onSaveClick = this.onSaveClick.bind(this);
    }
    /* *
        *  Utility
        *------------------------------------------------------------
    */
    //Nothing

    /* *
        *  Component Life-cycle Management
        *------------------------------------------------------------
    */
   componentDidMount(){
    if(localStorage.getItem(BLOODPRESSUREDATA) !== null || localStorage.getItem(BLOODPRESSUREDATA) !== undefined){
      const bloodPressureReadingData: BloodPressureProps = JSON.parse(localStorage.getItem(BLOODPRESSUREDATA)|| '{}');
      const user_id = JSON.parse(sessionStorage.getItem(LOGGED_IN_USER)|| '{}' ).user_id;
      this.setState({
        systoleReading: bloodPressureReadingData.systoleReading,
        diastoleReading: bloodPressureReadingData.diastoleReading,
        date: bloodPressureReadingData.date,
        time: bloodPressureReadingData.time,
        user_id:user_id,
      })
      }
    }
    
    /* *
        *  API callback functions
        *------------------------------------------------------------
    */
    //Nothing

    /* *
        *  Event handling functions
        *------------------------------------------------------------
    */

    onBloodPressureSystoleReadingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
        systoleReading:event.currentTarget.valueAsNumber,
      })
      }

    onBloodPressureDiastoleReadingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
          diastoleReading:event.currentTarget.valueAsNumber,
      })
      }

    onDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
          date:event.currentTarget.value,
      })
      }

    onTimeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
          time:event.currentTarget.value,
      })
      }

    onSaveClick = (event: React.SyntheticEvent): void => {
      const { systoleReading,diastoleReading,date,time,user_id } = this.state;
      const bloodPressureData = {
        instrumentID:BLOOD_PRESSURE_INSTRUMENT,
        systoleReading:systoleReading,
        diastoleReading:diastoleReading,
        date:date,
        time:time,
        user_id:user_id,
      }
      localStorage.setItem(BLOODPRESSUREDATA,JSON.stringify(bloodPressureData));
    }

    /* *
      *  Main render function
      *------------------------------------------------------------
    */
    render() {
      const { diastoleReading,systoleReading,date,time } = this.state;
      const { onBloodPressureSystoleReadingChange,onBloodPressureDiastoleReadingChange,onDateChange,onTimeChange,onSaveClick } = this;
      
      return (
        <BloodPressureComponent 
          diastoleReading={diastoleReading}
          systoleReading={systoleReading}
          date={date}
          time={time}
          onBloodPressureSystoleReadingChange={onBloodPressureSystoleReadingChange}
          onBloodPressureDiastoleReadingChange={onBloodPressureDiastoleReadingChange}
          onDateChange={onDateChange}
          onTimeChange={onTimeChange}
          onSaveClick={onSaveClick}
        />
      );
    }
  }