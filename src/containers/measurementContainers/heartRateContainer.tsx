import React, { Component } from 'react';

import HeartRateComponent from '../../components/measurementComponents/heartRateComponent';
import { HEARTRATEDATA, HEART_RATE_INSTRUMENT, LOGGED_IN_USER_ID } from '../../constants';

interface IProps {

}
interface HeartRateProps {
  reading?: number;
  time?: string;
  instrumentID?: number;
  validated:boolean;

}

export default class HeartRateContainer extends Component<IProps,HeartRateProps> {
  
    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
   
    constructor(props:IProps) {
      super(props);
      this.state = {
        reading:undefined,
        time:undefined,
        instrumentID:undefined,
        validated:false,
        
      };
      this.onHeartRateReadingChange = this.onHeartRateReadingChange.bind(this);
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
      const { reading,time } = this.state;
        const heartRateData = {
          instrumentID:HEART_RATE_INSTRUMENT,
          reading:reading,
          time:time,
        }
        localStorage.setItem(HEARTRATEDATA,JSON.stringify(heartRateData));

    }

    /* *
        *  Main render function
        *------------------------------------------------------------
    */
       render() {
      const { reading,time } = this.state;
      const { onHeartRateReadingChange,onTimeChange, } = this;
      
      return (
        <HeartRateComponent 
          reading={reading}
          time={time}
          onHeartRateReadingChange={onHeartRateReadingChange}
          onTimeChange={onTimeChange}
        />
      );
    }
  }