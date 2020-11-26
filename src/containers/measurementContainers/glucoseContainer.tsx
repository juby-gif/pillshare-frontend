import React, { Component } from 'react';

import GlucoseComponent from '../../components/measurementComponents/glucoseComponent';
import { GLUCOSE,GLUCOSE_INSTRUMENT } from '../../constants';

interface IProps {
  
}
interface GlucoseProps {
  reading: number;
  date: string;
  time: string;
  instrumentID: number;

}

export default class GlucoseContainer extends Component<IProps,GlucoseProps> {
    
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
      this.onGlucoseReadingChange = this.onGlucoseReadingChange.bind(this);
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
    if(localStorage.getItem(GLUCOSE) !== null || localStorage.getItem(GLUCOSE) !== undefined){
      const glucoseReadingData: GlucoseProps = JSON.parse(localStorage.getItem(GLUCOSE)|| '{}');
      this.setState({
        reading:glucoseReadingData.reading,
        date: glucoseReadingData.date,
        time:glucoseReadingData.time,
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

    onGlucoseReadingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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
      const glucoseData = {
        instrumentID:GLUCOSE_INSTRUMENT,
        reading:reading,
        date:date,
        time:time,
      }
      localStorage.setItem(GLUCOSE,JSON.stringify(glucoseData));
    }

    /* *
        *  Main render function
        *------------------------------------------------------------
    */
    render() {
      const { reading,date,time } = this.state;
      const { onGlucoseReadingChange,onDateChange,onTimeChange,onSaveClick } = this;
      
      return (
        <GlucoseComponent 
          reading={reading}
          date={date}
          time={time}
          onGlucoseReadingChange={onGlucoseReadingChange}
          onDateChange={onDateChange}
          onTimeChange={onTimeChange}
          onSaveClick={onSaveClick}
        />
      );
    }
  }