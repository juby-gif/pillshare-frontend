import React, { Component } from 'react';

import HeartRateComponent from '../../components/measurementComponents/heartRateComponent';
import { HEARTRATEDATA, HEART_RATE_INSTRUMENT, LOGGED_IN_USER } from '../../constants';

interface IProps {
  
}
interface HeartRateProps {
  reading: number;
  date: string;
  time: string;
  instrumentID: number;
  user_id?: string | null;

}

export default class HeartRateContainer extends Component<IProps,HeartRateProps> {
  
    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    user_id:string | null = JSON.parse(sessionStorage.getItem(LOGGED_IN_USER)|| '{}' ).user_id;
    constructor(props:IProps) {
      super(props);
      this.state = {
        reading:0,
        date:"",
        time:"",
        instrumentID:0,
        user_id:this.user_id,
        
      };
      this.onHeartRateReadingChange = this.onHeartRateReadingChange.bind(this);
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
    if(localStorage.getItem(HEARTRATEDATA) !== null || localStorage.getItem(HEARTRATEDATA) !== undefined){
      const heartRateReadingData: HeartRateProps = JSON.parse(localStorage.getItem(HEARTRATEDATA)|| '{}');
      this.setState({
        reading:heartRateReadingData.reading,
        date: heartRateReadingData.date,
        time:heartRateReadingData.time,
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
    onHeartRateReadingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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
      const { onHeartRateReadingChange,onDateChange,onTimeChange,onSaveClick } = this;
      
      return (
        <HeartRateComponent 
          reading={reading}
          date={date}
          time={time}
          onHeartRateReadingChange={onHeartRateReadingChange}
          onDateChange={onDateChange}
          onTimeChange={onTimeChange}
          onSaveClick={onSaveClick}
        />
      );
    }
  }