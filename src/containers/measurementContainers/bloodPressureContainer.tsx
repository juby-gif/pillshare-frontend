import React, { Component } from 'react';

import BloodPressureComponent from '../../components/measurementComponents/bloodPressureComponent';
import { BLOODPRESSUREDATA, BLOOD_PRESSURE_INSTRUMENT, LOGGED_IN_USER_ID } from '../../constants';

interface IProps {
  
}
interface BloodPressureProps {
  diastoleReading?: number;
  systoleReading?: number;
  date?: string;
  time?: string;
  instrumentID?: number;
  user_id?:string;
  validated :boolean;

}

export default class BloodPressureContainer extends Component<IProps,BloodPressureProps> {
    
    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps) {
      super(props);
      this.state = {
        diastoleReading:undefined,
        systoleReading:undefined,
        date:undefined,
        time:undefined,
        instrumentID:undefined,
        user_id:undefined,
        validated:false,
        
      };
      this.onBloodPressureSystoleReadingChange = this.onBloodPressureSystoleReadingChange.bind(this);
      this.onBloodPressureDiastoleReadingChange = this.onBloodPressureDiastoleReadingChange.bind(this);
      this.onDateChange = this.onDateChange.bind(this);
      this.onTimeChange = this.onTimeChange.bind(this);
      this.onUpdate = this.onUpdate.bind(this);
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
    if(localStorage.getItem(BLOODPRESSUREDATA) !== '{}' || localStorage.getItem(BLOODPRESSUREDATA) !== undefined){
      const bloodPressureReadingData: BloodPressureProps = JSON.parse(localStorage.getItem(BLOODPRESSUREDATA)|| '{}');
      const user_id = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID)|| '' )
      this.setState({
        systoleReading: bloodPressureReadingData.systoleReading,
        diastoleReading: bloodPressureReadingData.diastoleReading,
        date: bloodPressureReadingData.date,
        time: bloodPressureReadingData.time,
        user_id:user_id,
      })
      }
    }

    componentDidUpdate(){
      this.onUpdate();
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
      if(event.currentTarget.valueAsNumber !== 0 && !isNaN(event.currentTarget.valueAsNumber) && event.currentTarget.valueAsNumber !== undefined) {
        this.setState({
          systoleReading:event.currentTarget.valueAsNumber,
        })
      } else{
        this.setState({
          systoleReading:undefined,
        })
      } 
    }

    onBloodPressureDiastoleReadingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.valueAsNumber !== 0 && !isNaN(event.currentTarget.valueAsNumber) && event.currentTarget.valueAsNumber !== undefined) {
        this.setState({
          diastoleReading:event.currentTarget.valueAsNumber,
        })
      } else{
        this.setState({
          diastoleReading:undefined,
        })
      } 
    }

    onDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== ""  && event.currentTarget.value !== undefined) {
        this.setState({
          date:event.currentTarget.value,
        })
      } else{
        this.setState({
          date:undefined,
        })
      } 
    }

    onTimeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== ""  && event.currentTarget.value !== undefined) {
        this.setState({
          time:event.currentTarget.value,
        })
      } else{
        this.setState({
          time:undefined,
        })
      } 
    }

      onUpdate = (): void => {
      const { systoleReading,diastoleReading,date,time,user_id } = this.state;
      if(systoleReading !== 0 && systoleReading !== undefined && diastoleReading !== 0 && diastoleReading !== undefined && date !== undefined && date !== "" && time !== undefined && time !== ""){
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
    }

    /* *
      *  Main render function
      *------------------------------------------------------------
    */
    render() {
      const { diastoleReading,systoleReading,date,time } = this.state;
      const { onBloodPressureSystoleReadingChange,onBloodPressureDiastoleReadingChange,onDateChange,onTimeChange, } = this;
      
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
        />
      );
    }
  }