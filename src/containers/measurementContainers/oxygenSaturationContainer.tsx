import React, { Component } from 'react';

import OxygenSaturationComponent from '../../components/measurementComponents/oxygenSaturationComponent';
import { LOGGED_IN_USER_ID, OXYGENSATURATION, OXYGEN_SATURATION_INSTRUMENT } from '../../constants';

interface IProps {
}
interface OxygenSaturationProps {
  reading?: number;
  time?: string;
  instrumentID?: number;
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
          time:undefined,
          instrumentID:undefined,
          validated:false,
      };
      this.onOxygenSaturationReadingChange = this.onOxygenSaturationReadingChange.bind(this);
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
      this.setState({
        reading:oxygenSaturationReadingData.reading,
        time:oxygenSaturationReadingData.time,
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
        const oxygenSaturationData = {
          instrumentID:OXYGEN_SATURATION_INSTRUMENT,
          reading:reading,
          time:time,
        }
        localStorage.setItem(OXYGENSATURATION,JSON.stringify(oxygenSaturationData));
    }

    /* *
        *  Main render function
        *------------------------------------------------------------
    */
    render() {
      const { reading,time } = this.state;
      const { onOxygenSaturationReadingChange,onTimeChange, } = this;
      
      return (
        <OxygenSaturationComponent 
          reading={reading}
          time={time}
          onOxygenSaturationReadingChange={onOxygenSaturationReadingChange}
          onTimeChange={onTimeChange}
        />
      );
    }
  }