import React, { Component } from 'react';
import DashboardComponent from '../components/dashboardComponent';

// import SideBarComponent from '../components/sideBarComponent';
import { getDashboard } from '../API/dashboardAPI';
import { LOGGED_IN_USER } from '../constants';
 
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
export default class DashboardContainer extends Component<IProps,StateProps> {
    constructor(props:IProps){
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
        }
        this.onSuccessCallBack = this.onSuccessCallBack.bind(this);
        this.onFailureCallBack = this.onFailureCallBack.bind(this);
    }
    
    componentDidMount(){
      const { onSuccessCallBack,onFailureCallBack } = this;
      const user_id:string|null = JSON.parse(sessionStorage.getItem(LOGGED_IN_USER) || '{}').user_id;
      getDashboard(user_id,onSuccessCallBack,onFailureCallBack);
     
      }
  


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
 
  render () {
    const { alerts_responded,alerts_sent,blood_pressure,body_temperature,glucose,health_check,heart_rate,medical_information,oxygen_saturation } = this.state;
    console.log(
      alerts_responded,alerts_sent,blood_pressure,body_temperature,glucose,health_check,heart_rate,medical_information,oxygen_saturation
    )
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <DashboardComponent 
          alertsResponded = {alerts_responded}
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