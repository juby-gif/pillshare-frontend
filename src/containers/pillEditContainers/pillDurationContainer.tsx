import React, { Component } from 'react';

import PillDurationComponent from '../../components/pillEditComponents/pillDurationComponent';
import { PILL_DURATION, USER_MEDICAL_TABLE_EDIT } from '../../constants';


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

interface DataProps{
  duration ?: string;
  start_date ?: string;
  end_date ?: string;
  morning ?: string;
  afternoon ?: string;
  evening ?: string;
  night ?: string;
  intervals ?: IntervalProps;
}

interface IntervalProps {
  part:string[];
  time:string[];
}

const lengthChecker = (data: any) => {
  let count:number = 0;
  for (let datum in data){
    if (data.hasOwnProperty(datum)) count++;
  }
  if(count !== 0) { return count; }
  else {return 0};
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
      let { morning,afternoon,evening,night } = this.state;
      setTimeout(() => {
        if(localStorage.getItem(PILL_DURATION) !== null && localStorage.getItem(PILL_DURATION) !== undefined && localStorage.getItem(PILL_DURATION) !== '{}'){
          const descriptionData: DataProps = JSON.parse(localStorage.getItem(PILL_DURATION)|| '{}');
          this.setState({
            numberOfDays:descriptionData.duration,
            startDate:descriptionData.start_date,
            endDate: descriptionData.end_date,
            morning:descriptionData.morning,
            evening:descriptionData.evening,
            afternoon:descriptionData.afternoon,
            night:descriptionData.night,
          })
        } else if(localStorage.getItem(USER_MEDICAL_TABLE_EDIT) !== null && localStorage.getItem(USER_MEDICAL_TABLE_EDIT) !== undefined && localStorage.getItem(USER_MEDICAL_TABLE_EDIT) !== '{}'){
          const descriptionData: DataProps = JSON.parse(localStorage.getItem(USER_MEDICAL_TABLE_EDIT)|| '{}');
          for (let i=0; i< lengthChecker(descriptionData?.intervals?.part);i++){
              if (descriptionData?.intervals?.part[i] === "Morning"){
                morning = descriptionData?.intervals?.time[i];
              }else if (descriptionData?.intervals?.part[i] === "Evening"){
                evening = descriptionData?.intervals?.time[i];
              }else if (descriptionData?.intervals?.part[i] === "Afternoon"){
                afternoon = descriptionData?.intervals?.time[i];
              }else if (descriptionData?.intervals?.part[i] === "Night"){
                night = descriptionData?.intervals?.time[i];
              }
            }
            this.setState({
                numberOfDays:descriptionData.duration,
                startDate:descriptionData.start_date,
                endDate: descriptionData.end_date,
                morning:morning,
                evening:evening,
                afternoon:afternoon,
                night:night,
            })
      }},500);
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
        duration : numberOfDays,
        start_date : startDate,
        end_date : endDate,
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