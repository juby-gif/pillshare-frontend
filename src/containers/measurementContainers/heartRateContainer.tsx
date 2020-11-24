import React, { Component } from 'react';

import HeartRateComponent from '../../components/measurementComponents/heartRateComponent';
import { HEARTRATEDATA } from '../../constants';

interface IProps {
  
}
interface HeartRateProps {
  reading: number;
  date: string;
  time: string;

}

export default class HeartRateContainer extends Component<IProps,HeartRateProps> {
  
    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps) {
      super(props);
      this.state = {
        reading:0,
        date:"",
        time:"",
        
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
      const { reading,date,time } = this.state;
      const heartRateData = {
        reading:reading,
        date:date,
        time:time,
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