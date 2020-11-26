import React, { Component } from 'react';

import OxygenSaturationComponent from '../../components/measurementComponents/oxygenSaturationComponent';
import { OXYGENSATURATION, OXYGEN_SATURATION_INSTRUMENT } from '../../constants';

interface IProps {
}
interface OxygenSaturationProps {
  reading: number;
  date: string;
  time: string;
  instrumentID: number;

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
      };
      this.onOxygenSaturationReadingChange = this.onOxygenSaturationReadingChange.bind(this);
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
    if(localStorage.getItem(OXYGENSATURATION) !== null || localStorage.getItem(OXYGENSATURATION) !== undefined){
      const oxygenSaturationReadingData: OxygenSaturationProps = JSON.parse(localStorage.getItem(OXYGENSATURATION)|| '{}');
      this.setState({
        reading:oxygenSaturationReadingData.reading,
        date: oxygenSaturationReadingData.date,
        time:oxygenSaturationReadingData.time,
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

    onSaveClick = (event: React.SyntheticEvent): void => {
      const { reading,date,time } = this.state;
      const oxygenSaturationData = {
        instrumentID:OXYGEN_SATURATION_INSTRUMENT,
        reading:reading,
        date:date,
        time:time,
      }
      localStorage.setItem(OXYGENSATURATION,JSON.stringify(oxygenSaturationData));
    }

    /* *
        *  Main render function
        *------------------------------------------------------------
    */
    render() {
      const { reading,date,time } = this.state;
      const { onOxygenSaturationReadingChange,onDateChange,onTimeChange,onSaveClick } = this;
      
      return (
        <OxygenSaturationComponent 
          reading={reading}
          date={date}
          time={time}
          onOxygenSaturationReadingChange={onOxygenSaturationReadingChange}
          onDateChange={onDateChange}
          onTimeChange={onTimeChange}
          onSaveClick={onSaveClick}
        />
      );
    }
  }