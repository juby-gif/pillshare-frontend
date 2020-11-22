import React, { Component } from 'react';

import BloodPressureComponent from '../../components/measurementComponents/bloodPressureComponent';

interface IProps {
  
}
interface BloodPressureProps {
  readOnly: boolean;
  reading: number;
  date: string;
  time: string;

}

export default class BloodPressureContainer extends Component<IProps,BloodPressureProps> {
    constructor(props:IProps) {
      super(props);
      this.state = {
        readOnly:false,
        reading:0,
        date:"",
        time:"",
        
      };
      this.onBloodPressureReadingChange = this.onBloodPressureReadingChange.bind(this);
      this.onDateChange = this.onDateChange.bind(this);
      this.onTimeChange = this.onTimeChange.bind(this);
      this.onSaveClick = this.onSaveClick.bind(this);
    }

    onBloodPressureReadingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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
      const { onBloodPressureReadingChange,onDateChange,onTimeChange,onSaveClick } = this;
      
      return (
        <BloodPressureComponent 
          readOnly={readOnly}
          reading={reading}
          date={date}
          time={time}
          onBloodPressureReadingChange={onBloodPressureReadingChange}
          onDateChange={onDateChange}
          onTimeChange={onTimeChange}
          onSaveClick={onSaveClick}
        />
      );
    }
  }