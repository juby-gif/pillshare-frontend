import React, { Component } from 'react';

import BodyTemperatureComponent from '../../components/measurementComponents/bodyTemperatureComponent';
import { BODYTEMPERATURE, BODY_TEMPERATURE_INSTRUMENT, LOGGED_IN_USER_ID } from '../../constants';

interface IProps {
  
}
interface BodyTemperatureProps {
  reading?: number;
  date?: string;
  time?: string;
  instrumentID?: number;
  user_id?: string;

}

export default class BodyTemperatureContainer extends Component<IProps,BodyTemperatureProps> {
    
    /*  *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps) {
      super(props);
      this.state = {
        reading:0,
        date:undefined,
        time:undefined,
        instrumentID:0,
        user_id: undefined,        
      };
      this.onBodyTemperatureReadingChange = this.onBodyTemperatureReadingChange.bind(this);
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
    if(localStorage.getItem(BODYTEMPERATURE) !== '{}' || localStorage.getItem(BODYTEMPERATURE) !== undefined){
      const bodyTemperatureReadingData: BodyTemperatureProps = JSON.parse(localStorage.getItem(BODYTEMPERATURE)|| '{}');
      const user_id = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID)|| '' )
      this.setState({
        reading:bodyTemperatureReadingData.reading,
        date: bodyTemperatureReadingData.date,
        time:bodyTemperatureReadingData.time,
        user_id: user_id,
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
    onBodyTemperatureReadingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if(event.currentTarget.valueAsNumber !== 0 && !isNaN(event.currentTarget.valueAsNumber) && event.currentTarget.valueAsNumber !== undefined) {
        this.setState({
          reading:event.currentTarget.valueAsNumber,
        })
      } else{
        this.setState({
          reading:undefined,
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
      const { reading,date,time,user_id } = this.state;

      const bodyTemperatureData = {
        instrumentID:BODY_TEMPERATURE_INSTRUMENT,
        reading:reading,
        date:date,
        time:time,
        user_id:user_id,
      }
      localStorage.setItem(BODYTEMPERATURE,JSON.stringify(bodyTemperatureData));
    }

    /*  *
        *  Main render function
        *------------------------------------------------------------
    */
    render() {
      const { reading,date,time } = this.state;
      const { onBodyTemperatureReadingChange,onDateChange,onTimeChange, } = this;
      
      return (
        <BodyTemperatureComponent 
          reading={reading}
          date={date}
          time={time}
          onBodyTemperatureReadingChange={onBodyTemperatureReadingChange}
          onDateChange={onDateChange}
          onTimeChange={onTimeChange}
        />
      );
    }
  }