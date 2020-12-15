import React, { Component } from 'react';

import GlucoseComponent from '../../components/measurementComponents/glucoseComponent';
import { GLUCOSE,GLUCOSE_INSTRUMENT, LOGGED_IN_USER_ID } from '../../constants';

interface IProps {
  
}
interface GlucoseProps {
  reading: number;
  date: string;
  time: string;
  instrumentID: number;
  user_id: string;

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
        user_id:"",
        
      };
      this.onGlucoseReadingChange = this.onGlucoseReadingChange.bind(this);
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
    if(localStorage.getItem(GLUCOSE) !== null || localStorage.getItem(GLUCOSE) !== undefined){
      const glucoseReadingData: GlucoseProps = JSON.parse(localStorage.getItem(GLUCOSE)|| '{}');
      const user_id = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID)|| '' )
      this.setState({
        reading:glucoseReadingData.reading,
        date: glucoseReadingData.date,
        time:glucoseReadingData.time,
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

      onUpdate = (): void => {
      const { reading,date,time,user_id } = this.state;
      const glucoseData = {
        instrumentID:GLUCOSE_INSTRUMENT,
        reading:reading,
        date:date,
        time:time,
        user_id:user_id,
      }
      localStorage.setItem(GLUCOSE,JSON.stringify(glucoseData));
    }

    /* *
        *  Main render function
        *------------------------------------------------------------
    */
    render() {
      const { reading,date,time } = this.state;
      const { onGlucoseReadingChange,onDateChange,onTimeChange, } = this;
      
      return (
        <GlucoseComponent 
          reading={reading}
          date={date}
          time={time}
          onGlucoseReadingChange={onGlucoseReadingChange}
          onDateChange={onDateChange}
          onTimeChange={onTimeChange}
        />
      );
    }
  }