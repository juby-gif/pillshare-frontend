import React, { Component } from 'react';

import BodyTemperatureComponent from '../../components/measurementComponents/bodyTemperatureComponent';

interface IProps {
  
}
interface BodyTemperatureProps {
  readOnly: boolean;
  reading: number;
  date: string;
  time: string;

}

export default class BodyTemperatureContainer extends Component<IProps,BodyTemperatureProps> {
    constructor(props:IProps) {
      super(props);
      this.state = {
        readOnly:false,
        reading:0,
        date:"",
        time:"",
        
      };
      this.onBodyTemperatureReadingChange = this.onBodyTemperatureReadingChange.bind(this);
      this.onDateChange = this.onDateChange.bind(this);
      this.onTimeChange = this.onTimeChange.bind(this);
      this.onSaveClick = this.onSaveClick.bind(this);
    }

    onBodyTemperatureReadingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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
      const { onBodyTemperatureReadingChange,onDateChange,onTimeChange,onSaveClick } = this;
      
      return (
        <BodyTemperatureComponent 
          readOnly={readOnly}
          reading={reading}
          date={date}
          time={time}
          onBodyTemperatureReadingChange={onBodyTemperatureReadingChange}
          onDateChange={onDateChange}
          onTimeChange={onTimeChange}
          onSaveClick={onSaveClick}
        />
      );
    }
  }