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
  alertsResponded : number;
  alertsSent : number;
  bloodPressure ?: BloodPressureProps;
  bodyTemperature ?: BodyTemperatureProps;
  glucose ?: GlucoseProps;
  heartRate ?: HeartRateProps;
  medicalInformation ?: MedicalProps[];
  oxygenSaturation ?: OxygenSaturationProps;
}

interface BloodPressureProps {
  diastoleReading:number;
  systoleReading:number;
  percentage:number;
  instrumentId:number;
  time:string;
}
interface BodyTemperatureProps {
  reading :number;
  percentage :number;
  instrumentId :number;
  time :string;
}

interface GlucoseProps {
  reading:number;
  percentage:number;
  instrumentId:number;
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
data: ServerData;
}

interface ServerData {
  alertsResponded : number,
  alertsSent : number,
  bloodPressure : BloodPressureProps,
  bodyTemperature : BodyTemperatureProps,
  glucose : GlucoseProps,
  heartRate : HeartRateProps,
  medicalInformation : MedicalProps[],
  oxygenSaturation : OxygenSaturationProps,
}
export default class DashboardContainer extends Component<IProps & RouteComponentProps,StateProps> {

  /*  *
      *  Initializer
      *------------------------------------------------------------
  */
    constructor(props:IProps & RouteComponentProps){
        super(props);
        this.state = {
          alertsResponded : 0,
          alertsSent : 0,
          bloodPressure : undefined,
          bodyTemperature : undefined,
          glucose : undefined,
          heartRate : undefined,
          medicalInformation : [],
          oxygenSaturation : undefined,
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
      // const user_id:string = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID) || '');
    /*  *
        *  API callback functions
        *------------------------------------------------------------
    */
      getDashboard(onSuccessCallBack,onFailureCallBack);
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
      // console.log(responseData);
      if (responseData !== undefined && responseData !== null){
            
              this.setState({
                alertsResponded : responseData.data?.alertsResponded,
                alertsSent : responseData.data?.alertsSent,
                bloodPressure : responseData.data?.bloodPressure,
                bodyTemperature : responseData.data?.bodyTemperature,
                glucose : responseData.data?.glucose,
                heartRate : responseData.data?.heartRate,
                oxygenSaturation : responseData.data?.oxygenSaturation,
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
    const { show,alertsResponded,alertsSent,bloodPressure,bodyTemperature,glucose,heartRate,medicalInformation,oxygenSaturation } = this.state;
    
    //For Debugging purpose only
    // console.log(
    //   alerts_responded,alerts_sent,blood_pressure,body_temperature,glucose,health_check,heart_rate,medical_information,oxygen_saturation
    // )

    return (
        <DashboardComponent 
          alertsResponded = {alertsResponded}
          show={show}
          alertsSent = {alertsSent}
          bloodPressure = {bloodPressure}
          bodyTemperature = {bodyTemperature}
          glucose = {glucose}
          heartRate = {heartRate}
          medicalInformation = {medicalInformation}
          oxygenSaturation  ={oxygenSaturation}

        />
      
    );
  }
}