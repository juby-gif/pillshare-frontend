import React, { Component } from 'react';

import BloodPressureComponent from '../../components/measurementComponents/bloodPressureComponent';
import { BLOODPRESSUREDATA } from '../../constants';

interface IProps {
  
}
interface BloodPressureProps {
  diastoleReading: number;
  systoleReading: number;
  date: string;
  time: string;

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
      this.setState({
        systoleReading: bloodPressureReadingData.systoleReading,
        diastoleReading: bloodPressureReadingData.diastoleReading,
        date: bloodPressureReadingData.date,
        time: bloodPressureReadingData.time,
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
      const { systoleReading,diastoleReading,date,time } = this.state;
      const bloodPressureData = {
        systoleReading:systoleReading,
        diastoleReading:diastoleReading,
        date:date,
        time:time,
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