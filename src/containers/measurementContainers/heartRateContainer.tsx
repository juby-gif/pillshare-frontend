import React, { Component } from 'react';

import HeartRateComponent from '../../components/measurementComponents/heartRateComponent';

interface IProps {
  
}
interface HeartRateProps {
  readOnly: boolean;
  reading: number;
  date: string;
  time: string;

}

export default class HeartRateContainer extends Component<IProps,HeartRateProps> {
    constructor(props:IProps) {
      super(props);
      this.state = {
        readOnly:false,
        reading:0,
        date:"",
        time:"",
        
      };
      this.onHeartRateReadingChange = this.onHeartRateReadingChange.bind(this);
      this.onDateChange = this.onDateChange.bind(this);
      this.onTimeChange = this.onTimeChange.bind(this);
      this.onSaveClick = this.onSaveClick.bind(this);
    }

    onHeartRateReadingChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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
      const { onHeartRateReadingChange,onDateChange,onTimeChange,onSaveClick } = this;
      
      return (
        <HeartRateComponent 
          readOnly={readOnly}
          reading={reading}
          date={date}
          time={time}
          onHeartRateReadingChange={onHeartRateReadingChange}
          onDateChange={onDateChange}
          onTimeChange={onTimeChange}
          onSaveClick={onSaveClick}
        />
      );
    }
  }