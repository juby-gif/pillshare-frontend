import React, { Component } from 'react';

import HeartRateComponent from '../../components/measurementComponents/heartRateComponent';
import { HEARTRATEDATA, HEART_RATE_INSTRUMENT, LOGGED_IN_USER_ID } from '../../constants';

interface IProps {

}
interface HeartRateProps {
  reading?: number;
  date?: string;
  time?: string;
  instrumentID?: number;
  user_id?: string;

}

export default class HeartRateContainer extends Component<IProps,HeartRateProps> {
  
    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    user_id = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID)|| '' )
    constructor(props:IProps) {
      super(props);
      this.state = {
        reading:0,
        date:undefined,
        time:undefined,
        instrumentID:0,
        user_id:this.user_id,
        
      };
      this.onHeartRateReadingChange = this.onHeartRateReadingChange.bind(this);
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
    if(localStorage.getItem(HEARTRATEDATA) !== '{}' || localStorage.getItem(HEARTRATEDATA) !== undefined){
      const heartRateReadingData: HeartRateProps = JSON.parse(localStorage.getItem(HEARTRATEDATA)|| '{}');
      this.setState({
        reading:heartRateReadingData.reading,
        date: heartRateReadingData.date,
        time:heartRateReadingData.time,
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
    onHeartRateReadingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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
      const heartRateData = {
        instrumentID:HEART_RATE_INSTRUMENT,
        reading:reading,
        date:date,
        time:time,
        user_id:user_id,
      }
      localStorage.setItem(HEARTRATEDATA,JSON.stringify(heartRateData));
    }

    /* *
        *  Main render function
        *------------------------------------------------------------
    */
       render() {
      const { reading,date,time } = this.state;
      const { onHeartRateReadingChange,onDateChange,onTimeChange, } = this;
      
      return (
        <HeartRateComponent 
          reading={reading}
          date={date}
          time={time}
          onHeartRateReadingChange={onHeartRateReadingChange}
          onDateChange={onDateChange}
          onTimeChange={onTimeChange}
        />
      );
    }
  }