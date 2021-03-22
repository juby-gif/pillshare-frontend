import React, { Component } from 'react';

import BodyTemperatureComponent from '../../components/measurementComponents/bodyTemperatureComponent';
import { BODYTEMPERATURE, BODY_TEMPERATURE_INSTRUMENT, LOGGED_IN_USER_ID } from '../../constants';

interface IProps {
  
}
interface BodyTemperatureProps {
  reading?: number;
  time?: string;
  instrumentID?: number;
  validated:boolean;

}

export default class BodyTemperatureContainer extends Component<IProps,BodyTemperatureProps> {
    
    /*  *
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
      this.onBodyTemperatureReadingChange = this.onBodyTemperatureReadingChange.bind(this);
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
      this.setState({
        reading:bodyTemperatureReadingData.reading,
        time:bodyTemperatureReadingData.time,
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
        const bodyTemperatureData = {
          instrumentID:BODY_TEMPERATURE_INSTRUMENT,
          reading:reading,
          time:time,
      }
      localStorage.setItem(BODYTEMPERATURE,JSON.stringify(bodyTemperatureData));
    }

    /*  *
        *  Main render function
        *------------------------------------------------------------
    */
    render() {
      const { reading,time } = this.state;
      const { onBodyTemperatureReadingChange,onTimeChange, } = this;
      
      return (
        <BodyTemperatureComponent 
          reading={reading}
          time={time}
          onBodyTemperatureReadingChange={onBodyTemperatureReadingChange}
          onTimeChange={onTimeChange}
        />
      );
    }
  }