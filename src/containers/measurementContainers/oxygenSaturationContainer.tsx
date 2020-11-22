import React, { Component } from 'react';

import OxygenSaturationComponent from '../../components/measurementComponents/oxygenSaturationComponent';

interface IProps {
}
interface OxygenSaturationProps {
  readOnly: boolean;
  reading: number;
  date: string;
  time: string;

}

export default class OxygenSaturationContainer extends Component<IProps,OxygenSaturationProps> {
    constructor(props:IProps) {
      super(props);
      this.state = {
        readOnly:false,
        reading:0,
        date:"",
        time:"",
        
      };
      this.onOxygenSaturationReadingChange = this.onOxygenSaturationReadingChange.bind(this);
      this.onDateChange = this.onDateChange.bind(this);
      this.onTimeChange = this.onTimeChange.bind(this);
      this.onSaveClick = this.onSaveClick.bind(this);
    }

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
      alert("Saved")
    }

    render() {
      const { readOnly,reading,date,time } = this.state;
      const { onOxygenSaturationReadingChange,onDateChange,onTimeChange,onSaveClick } = this;
      
      return (
        <OxygenSaturationComponent 
          readOnly={readOnly}
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