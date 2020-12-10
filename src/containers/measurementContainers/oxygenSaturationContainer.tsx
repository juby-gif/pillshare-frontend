import React, { Component } from 'react';

import OxygenSaturationComponent from '../../components/measurementComponents/oxygenSaturationComponent';
import { LOGGED_IN_USER, OXYGENSATURATION, OXYGEN_SATURATION_INSTRUMENT } from '../../constants';

interface IProps {
}
interface OxygenSaturationProps {
  reading: number;
  date: string;
  time: string;
  instrumentID: number;
  user_id: string;

}

export default class OxygenSaturationContainer extends Component<IProps,OxygenSaturationProps> {
    
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
      this.onOxygenSaturationReadingChange = this.onOxygenSaturationReadingChange.bind(this);
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
    if(localStorage.getItem(OXYGENSATURATION) !== null || localStorage.getItem(OXYGENSATURATION) !== undefined){
      const oxygenSaturationReadingData: OxygenSaturationProps = JSON.parse(localStorage.getItem(OXYGENSATURATION)|| '{}');
      const user_id = JSON.parse(sessionStorage.getItem(LOGGED_IN_USER)|| '{}' ).user_id;
      this.setState({
        reading:oxygenSaturationReadingData.reading,
        date: oxygenSaturationReadingData.date,
        time:oxygenSaturationReadingData.time,
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

    onOxygenSaturationReadingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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
      const oxygenSaturationData = {
        instrumentID:OXYGEN_SATURATION_INSTRUMENT,
        reading:reading,
        date:date,
        time:time,
        user_id:user_id,
      }
      localStorage.setItem(OXYGENSATURATION,JSON.stringify(oxygenSaturationData));
    }

    /* *
        *  Main render function
        *------------------------------------------------------------
    */
    render() {
      const { reading,date,time } = this.state;
      const { onOxygenSaturationReadingChange,onDateChange,onTimeChange, } = this;
      
      return (
        <OxygenSaturationComponent 
          reading={reading}
          date={date}
          time={time}
          onOxygenSaturationReadingChange={onOxygenSaturationReadingChange}
          onDateChange={onDateChange}
          onTimeChange={onTimeChange}
        />
      );
    }
  }