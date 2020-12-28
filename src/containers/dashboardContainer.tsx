import React, { Component } from 'react';
import DashboardComponent from '../components/dashboardComponent';
import {RouteComponentProps} from 'react-router-dom';

// import SideBarComponent from '../components/sideBarComponent';
import { getDashboard } from '../API/dashboardAPI';
import { LOGGED_IN_USER_ID } from '../constants';
 
interface IProps {

}
interface StateProps {
  show:boolean;
  alerts_responded : number;
  alerts_sent : number;
  blood_pressure ?: BloodPressureProps;
  body_temperature ?: BodyTemperatureProps;
  glucose ?: GlucoseProps;
  health_check ?: HealthCheckProps;
  heart_rate ?: HeartRateProps;
  medical_information ?: MedicalProps[];
  oxygen_saturation ?: OxygenSaturationProps;
}

interface BloodPressureProps {
  diastole_reading:number;
  systole_reading:number;
  percentage:number;
  instrument_id:number;
  time:string;
}
interface BodyTemperatureProps {
  reading :number;
  percentage :number;
  instrument_id :number;
  time :string;
}

interface GlucoseProps {
  reading:number;
  percentage:number;
  instrument_id:number;
  time:string;
}

interface HealthCheckProps {
  health_status:string;
  time:string;
}

interface HeartRateProps {
  reading:number;
  percentage:number;
  instrument_id:number;
  time:string;
}

interface OxygenSaturationProps {
  reading:number;
  percentage:number;
  instrument_id:number;
  time:string;
}


interface MedicalProps {
  before_or_after : string;
  dosage : string;
  dose : number;
  duration : number;
  end_date : string;
  start_date : string;
  intervals : IntervalProps;
  missed : string[];
  measure : string;
  name : string;
  reason : string;
  taken: string[];
  id: number;
}

interface IntervalProps {
  part: string[];
  time: string[];
}

interface ServerResponse {
data: ServerData[];
}

interface ServerData {
  alerts_responded : number,
  alerts_sent : number,
  blood_pressure : BloodPressureProps,
  body_temperature : BodyTemperatureProps,
  glucose : GlucoseProps,
  health_check : HealthCheckProps,
  heart_rate : HeartRateProps,
  medical_information : MedicalProps[],
  oxygen_saturation : OxygenSaturationProps,
}
export default class DashboardContainer extends Component<IProps & RouteComponentProps,StateProps> {

  /*  *
      *  Initializer
      *------------------------------------------------------------
  */
    constructor(props:IProps & RouteComponentProps){
        super(props);
        this.state = {
          alerts_responded : 0,
          alerts_sent : 0,
          blood_pressure : undefined,
          body_temperature : undefined,
          glucose : undefined,
          health_check : undefined,
          heart_rate : undefined,
          medical_information : [],
          oxygen_saturation : undefined,
          show: false,
        }
        this.onSuccessCallBack = this.onSuccessCallBack.bind(this);
        this.onFailureCallBack = this.onFailureCallBack.bind(this);
    }

    /*  *
        *  Component Life-cycle Management
        *------------------------------------------------------------
    */
    componentDidMount(){
      const { onSuccessCallBack,onFailureCallBack } = this;
      const user_id:string = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID) || '')

    /*  *
        *  API callback functions
        *------------------------------------------------------------
    */
      getDashboard(user_id,onSuccessCallBack,onFailureCallBack);
     }

    /* *
      *  Utility
      *------------------------------------------------------------
    */
    //Nothing

    /* *
        *  Event handling functions
        *------------------------------------------------------------
    */
    onSuccessCallBack = (responseData: ServerResponse): void => {
      // For debugging purpose only
      //console.log(responseData);

      for(let datum of responseData.data){
        this.setState({
          alerts_responded : datum.alerts_responded,
          alerts_sent : datum.alerts_sent,
          blood_pressure : datum.blood_pressure,
          body_temperature : datum.body_temperature,
          glucose : datum.glucose,
          health_check : datum.health_check,
          heart_rate : datum.heart_rate,
          medical_information : datum.medical_information,
          oxygen_saturation : datum.oxygen_saturation,

        })
        return;
      }
    }
      
    onFailureCallBack = (responseData: ServerResponse): void => {
        alert(responseData);
    }
    
  /*  *
      *  Main render function
      *------------------------------------------------------------
  */
  render () {
    const { show,alerts_responded,alerts_sent,blood_pressure,body_temperature,glucose,health_check,heart_rate,medical_information,oxygen_saturation } = this.state;
    
    //For Debugging purpose only
    // console.log(
    //   alerts_responded,alerts_sent,blood_pressure,body_temperature,glucose,health_check,heart_rate,medical_information,oxygen_saturation
    // )

    return (
        <DashboardComponent 
          alertsResponded = {alerts_responded}
          show={show}
          alertsSent = {alerts_sent}
          bloodPressure = {blood_pressure}
          bodyTemperature = {body_temperature}
          glucose = {glucose}
          healthCheck = {health_check}
          heartRate = {heart_rate}
          medicalInformation = {medical_information}
          oxygenSaturation  ={oxygen_saturation}

        />
      
    );
  }
}