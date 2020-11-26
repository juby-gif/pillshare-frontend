import React, { Component } from 'react';

import BodyTemperatureComponent from '../../components/measurementComponents/bodyTemperatureComponent';
import { BODYTEMPERATURE, BODY_TEMPERATURE_INSTRUMENT } from '../../constants';

interface IProps {
  
}
interface BodyTemperatureProps {
  reading: number;
  date: string;
  time: string;
  instrumentID: number;

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
        date:"",
        time:"",
        instrumentID:0,
        
      };
      this.onBodyTemperatureReadingChange = this.onBodyTemperatureReadingChange.bind(this);
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
    if(localStorage.getItem(BODYTEMPERATURE) !== null || localStorage.getItem(BODYTEMPERATURE) !== undefined){
      const bodyTemperatureReadingData: BodyTemperatureProps = JSON.parse(localStorage.getItem(BODYTEMPERATURE)|| '{}');
      this.setState({
        reading:bodyTemperatureReadingData.reading,
        date: bodyTemperatureReadingData.date,
        time:bodyTemperatureReadingData.time,
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
    onBodyTemperatureReadingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
        reading:event.currentTarget.valueAsNumber,
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
      const { reading,date,time } = this.state;

      const bodyTemperatureData = {
        instrumentID:BODY_TEMPERATURE_INSTRUMENT,
        reading:reading,
        date:date,
        time:time,
      }
      localStorage.setItem(BODYTEMPERATURE,JSON.stringify(bodyTemperatureData));
    }

    /*  *
        *  Main render function
        *------------------------------------------------------------
    */
    render() {
      const { reading,date,time } = this.state;
      const { onBodyTemperatureReadingChange,onDateChange,onTimeChange,onSaveClick } = this;
      
      return (
        <BodyTemperatureComponent 
          reading={reading}
          date={date}
          time={time}
          onBodyTemperatureReadingChange={onBodyTemperatureReadingChange}
          onDateChange={onDateChange}
          onTimeChange={onTimeChange}
          onSaveClick={onSaveClick}
        />
      );
    }
  }