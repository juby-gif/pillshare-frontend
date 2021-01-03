import React, { Component } from 'react';

import GlucoseComponent from '../../components/measurementComponents/glucoseComponent';
import { GLUCOSE,GLUCOSE_INSTRUMENT, LOGGED_IN_USER_ID } from '../../constants';

interface IProps {
  
}
interface GlucoseProps {
  reading?: number;
  date?: string;
  time?: string;
  instrumentID?: number;
  user_id?: string;
  validated : boolean;

}

export default class GlucoseContainer extends Component<IProps,GlucoseProps> {
    
    /*  *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps) {
      super(props);
      this.state = {
        reading:undefined,
        date:undefined,
        time:undefined,
        instrumentID:undefined,
        user_id:undefined,
        validated:false,
        
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
    if(localStorage.getItem(GLUCOSE) !== '{}' || localStorage.getItem(GLUCOSE) !== undefined){
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
      if( reading !== undefined && date !== undefined && time !== undefined){
        const glucoseData = {
          instrumentID:GLUCOSE_INSTRUMENT,
          reading:reading,
          date:date,
          time:time,
          user_id:user_id,
        }
        localStorage.setItem(GLUCOSE,JSON.stringify(glucoseData));
      } 
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