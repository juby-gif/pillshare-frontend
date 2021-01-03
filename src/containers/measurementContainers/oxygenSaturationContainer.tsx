import React, { Component } from 'react';

import OxygenSaturationComponent from '../../components/measurementComponents/oxygenSaturationComponent';
import { LOGGED_IN_USER_ID, OXYGENSATURATION, OXYGEN_SATURATION_INSTRUMENT } from '../../constants';

interface IProps {
}
interface OxygenSaturationProps {
  reading?: number;
  date?: string;
  time?: string;
  instrumentID?: number;
  user_id?: string;
  validated: boolean;

}

export default class OxygenSaturationContainer extends Component<IProps,OxygenSaturationProps> {
    
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
    if(localStorage.getItem(OXYGENSATURATION) !== '{}' || localStorage.getItem(OXYGENSATURATION) !== undefined){
      const oxygenSaturationReadingData: OxygenSaturationProps = JSON.parse(localStorage.getItem(OXYGENSATURATION)|| '{}');
      const user_id = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID)|| '' )
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
        const oxygenSaturationData = {
          instrumentID:OXYGEN_SATURATION_INSTRUMENT,
          reading:reading,
          date:date,
          time:time,
          user_id:user_id,
        }
        localStorage.setItem(OXYGENSATURATION,JSON.stringify(oxygenSaturationData));
      }
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