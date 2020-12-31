import React, { Component } from 'react';
import { RouteComponentProps  } from 'react-router';

import RemoteDashboardComponent from '../components/remoteDashboardComponent';
import { getRemoteDashboard } from '../API/remoteDashboardAPI';
 

interface IProps {
}

interface StateProps {
  alerts_responded : number;
  alerts_sent : number;
  blood_pressure ?: BloodPressureProps;
  body_temperature ?: BodyTemperatureProps;
  glucose ?: GlucoseProps;
  health_check ?: HealthCheckProps;
  heart_rate ?: HeartRateProps;
  medical_information ?: MedicalProps[];
  oxygen_saturation ?: OxygenSaturationProps;
  payload?:ParamProps;
  firstName?:string;
}

interface ParamProps {
  id?:string;
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
  firstName :string;
  blood_pressure : BloodPressureProps,
  body_temperature : BodyTemperatureProps,
  glucose : GlucoseProps,
  health_check : HealthCheckProps,
  heart_rate : HeartRateProps,
  medical_information : MedicalProps[],
  oxygen_saturation : OxygenSaturationProps,
}

export default class RemoteDashboardContainer extends Component<IProps & RouteComponentProps,StateProps> {

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
          payload:undefined,
          firstName:"",
        }
        console.log();
        this.onSuccessCallBack = this.onSuccessCallBack.bind(this);
        this.onFailureCallBack = this.onFailureCallBack.bind(this);
    }

    /*  *
        *  Component Life-cycle Management
        *------------------------------------------------------------
    */
    componentDidMount(){
      const { onSuccessCallBack,onFailureCallBack } = this;
      const payload:ParamProps = this.props.match.params;

    /*  *
        *  API callback functions
        *------------------------------------------------------------
    */
      getRemoteDashboard(payload,onSuccessCallBack,onFailureCallBack);
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
          firstName : datum.firstName,

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
    const { alerts_responded,alerts_sent,blood_pressure,body_temperature,glucose,health_check,heart_rate,medical_information,oxygen_saturation,firstName } = this.state;
    
    //For Debugging purpose only
    // console.log(
    //   alerts_responded,alerts_sent,blood_pressure,body_temperature,glucose,health_check,heart_rate,medical_information,oxygen_saturation
    // )

    return (
        <RemoteDashboardComponent 
          alertsResponded = {alerts_responded}
          alertsSent = {alerts_sent}
          bloodPressure = {blood_pressure}
          bodyTemperature = {body_temperature}
          glucose = {glucose}
          healthCheck = {health_check}
          heartRate = {heart_rate}
          medicalInformation = {medical_information}
          oxygenSaturation  ={oxygen_saturation}
          firstName = {firstName}
          

        />
      
    );
  }
}