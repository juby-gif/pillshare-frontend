import React, { Component } from 'react';

import PillDurationComponent from '../../components/pillAdditionComponents/pillDurationComponent';
import { PILL_DURATION } from '../../constants';


interface IProps {

}
interface StateProps {
  numberOfDays ?: string;
  startDate ?: string;
  endDate ?: string;
  morning ?: string;
  afternoon ?: string;
  evening ?: string;
  night ?: string;
}

export default class PillDurationContainer extends Component<IProps,StateProps> {
    
    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps){
        super(props);
        this.state = {
          numberOfDays : "",
          startDate : "",
          endDate : "",
          morning : "",
          afternoon : "",
          evening : "",
          night : "",
        }

      this.onNumberOfDaysChange = this.onNumberOfDaysChange.bind(this);
      this.onStartDateChange = this.onStartDateChange.bind(this);
      this.onEndDateChange = this.onEndDateChange.bind(this);
      this.onMorningTimeChange = this.onMorningTimeChange.bind(this);
      this.onAfternoonTimeChange = this.onAfternoonTimeChange.bind(this);
      this.onEveningTimeChange = this.onEveningTimeChange.bind(this);
      this.onNightTimeChange = this.onNightTimeChange.bind(this);
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
    if(localStorage.getItem(PILL_DURATION) !== null || localStorage.getItem(PILL_DURATION) !== undefined){
      const durationData: StateProps = JSON.parse(localStorage.getItem(PILL_DURATION)|| '{}');
      this.setState({
        numberOfDays : durationData.numberOfDays,
        startDate : durationData.startDate,
        endDate : durationData.endDate,
        morning : durationData.morning,
        afternoon : durationData.afternoon,
        evening : durationData.evening,
        night : durationData.night,
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
  /* *
      *  Event handling functions
      *------------------------------------------------------------
  */
    onNumberOfDaysChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        numberOfDays:event.currentTarget.value,
      })
    }
    onStartDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        startDate:event.currentTarget.value,
      })
    } 
    
    onEndDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        endDate:event.currentTarget.value,
      })
    } 

    onMorningTimeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        morning:event.currentTarget.value,
      })
    } 

    onAfternoonTimeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        afternoon:event.currentTarget.value,
      })
    } 

    onEveningTimeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        evening:event.currentTarget.value,
      })
    }

    onNightTimeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        night:event.currentTarget.value,
      })
    }
        
    onUpdate = ():void => {
      const { numberOfDays,startDate,endDate,morning,afternoon,evening,night } = this.state;
      localStorage.setItem(PILL_DURATION,JSON.stringify({
        numberOfDays : numberOfDays,
        startDate : startDate,
        endDate : endDate,
        morning : morning,
        afternoon : afternoon,
        evening : evening,
        night : night,
      }))
    }
  /* *
      *  Main render function
      *------------------------------------------------------------
  */
  render () {
    
      const { onNumberOfDaysChange,
              onStartDateChange,
              onEndDateChange,
              onMorningTimeChange,
              onAfternoonTimeChange,
              onEveningTimeChange,
              onNightTimeChange,
            } = this;

      const { numberOfDays,
              startDate,
              endDate,
              morning,
              afternoon,
              evening,
              night,
            } = this.state;

      return (
        <PillDurationComponent
        onNumberOfDaysChange = {onNumberOfDaysChange}
        onStartDateChange  = {onStartDateChange}
        onEndDateChange  = {onEndDateChange}
        onMorningTimeChange = {onMorningTimeChange}
        onAfternoonTimeChange = {onAfternoonTimeChange} 
        onEveningTimeChange = {onEveningTimeChange} 
        onNightTimeChange = {onNightTimeChange} 
        numberOfDays = {numberOfDays}
        startDate = {startDate}
        endDate = {endDate}
        morning = {morning}
        afternoon = {afternoon}
        evening = {evening}
        night = {night}
        />
        );
    }
}