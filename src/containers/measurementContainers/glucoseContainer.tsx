import React, { Component } from 'react';

import GlucoseComponent from '../../components/measurementComponents/glucoseComponent';
import { GLUCOSE,GLUCOSE_INSTRUMENT, LOGGED_IN_USER_ID } from '../../constants';

interface IProps {
  
}
interface GlucoseProps {
  reading?: number;
  time?: string;
  instrumentID?: number;
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
        time:undefined,
        instrumentID:undefined,
        validated:false,
        
      };
      this.onGlucoseReadingChange = this.onGlucoseReadingChange.bind(this);
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
      this.setState({
        reading:glucoseReadingData.reading,
        time:glucoseReadingData.time,
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
        const glucoseData = {
          instrumentID:GLUCOSE_INSTRUMENT,
          reading:reading,
          time:time,
        }
        localStorage.setItem(GLUCOSE,JSON.stringify(glucoseData));
  
    }

    /* *
        *  Main render function
        *------------------------------------------------------------
    */
    render() {
      const { reading,time } = this.state;
      const { onGlucoseReadingChange,onTimeChange, } = this;
      
      return (
        <GlucoseComponent 
          reading={reading}
          time={time}
          onGlucoseReadingChange={onGlucoseReadingChange}
          onTimeChange={onTimeChange}
        />
      );
    }
  }