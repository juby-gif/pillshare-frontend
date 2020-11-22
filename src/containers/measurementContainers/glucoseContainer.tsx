import React, { Component } from 'react';

import GlucoseComponent from '../../components/measurementComponents/glucoseComponent';

interface IProps {
  
}
interface GlucoseProps {
  readOnly: boolean;
  reading: number;
  date: string;
  time: string;

}

export default class GlucoseContainer extends Component<IProps,GlucoseProps> {
    constructor(props:IProps) {
      super(props);
      this.state = {
        readOnly:false,
        reading:0,
        date:"",
        time:"",
        
      };
      this.onGlucoseReadingChange = this.onGlucoseReadingChange.bind(this);
      this.onDateChange = this.onDateChange.bind(this);
      this.onTimeChange = this.onTimeChange.bind(this);
      this.onSaveClick = this.onSaveClick.bind(this);
    }

    onGlucoseReadingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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
      const { onGlucoseReadingChange,onDateChange,onTimeChange,onSaveClick } = this;
      
      return (
        <GlucoseComponent 
          readOnly={readOnly}
          reading={reading}
          date={date}
          time={time}
          onGlucoseReadingChange={onGlucoseReadingChange}
          onDateChange={onDateChange}
          onTimeChange={onTimeChange}
          onSaveClick={onSaveClick}
        />
      );
    }
  }