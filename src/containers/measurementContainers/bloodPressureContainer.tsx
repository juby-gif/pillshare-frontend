import React, { Component } from 'react';

import BloodPressureComponent from '../../components/measurementComponents/bloodPressureComponent';
import { BLOODPRESSUREDATA, BLOOD_PRESSURE_INSTRUMENT, LOGGED_IN_USER_ID } from '../../constants';

interface IProps {
  
}
interface BloodPressureProps {
  diastoleReading?: number;
  systoleReading?: number;
  time?: string;
  instrumentID?: number;
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
        time:undefined,
        instrumentID:undefined,
        validated:false,
        
      };
      this.onBloodPressureSystoleReadingChange = this.onBloodPressureSystoleReadingChange.bind(this);
      this.onBloodPressureDiastoleReadingChange = this.onBloodPressureDiastoleReadingChange.bind(this);
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
      this.setState({
        systoleReading: bloodPressureReadingData.systoleReading,
        diastoleReading: bloodPressureReadingData.diastoleReading,
        time: bloodPressureReadingData.time,
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
      const { systoleReading,diastoleReading,time } = this.state;
      const bloodPressureData = {
          instrumentID:BLOOD_PRESSURE_INSTRUMENT,
          systoleReading:systoleReading,
          diastoleReading:diastoleReading,
          time:time,
        }
        localStorage.setItem(BLOODPRESSUREDATA,JSON.stringify(bloodPressureData));
    }

    /* *
      *  Main render function
      *------------------------------------------------------------
    */
    render() {
      const { diastoleReading,systoleReading,time } = this.state;
      const { onBloodPressureSystoleReadingChange,onBloodPressureDiastoleReadingChange,onTimeChange, } = this;
      
      return (
        <BloodPressureComponent 
          diastoleReading={diastoleReading}
          systoleReading={systoleReading}
          time={time}
          onBloodPressureSystoleReadingChange={onBloodPressureSystoleReadingChange}
          onBloodPressureDiastoleReadingChange={onBloodPressureDiastoleReadingChange}
          onTimeChange={onTimeChange}
        />
      );
    }
  }