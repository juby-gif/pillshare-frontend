import React, { Component } from 'react';

import RemoteTableComponent from '../components/remoteTableComponent';
import { getRemoteMedicalTableInfo } from '../API/remoteTableDataAPI';
import { REMOTE_PAYLOAD } from '../../constants';


interface IProps {
  debuggMode:boolean,
}

interface StateProps {
  data:DataProps[];
  debuggMode:boolean;
}

interface DataProps{
  index:number;
  before_or_after ?: string;
  dosage ?: string;
  dose ?: number;
  duration ?: number;
  end_date ?: string;
  start_date ?: string;
  missed ?: string[];
  measure ?: string;
  name ?: string;
  reason ?: string;
  taken ?: string[];
  intervals ?: IntervalProps;
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

interface ParamProps {
  id:string;
}


export default class TableContainer extends Component<IProps,StateProps> { 
    constructor(props:IProps){
        super(props);
    this.state={
        data:[],
        debuggMode:props.debuggMode,
    }
  }

  componentDidMount(){
    const { onSuccessCallBack,onFailureCallBack } = this;
    if(localStorage.getItem(REMOTE_PAYLOAD) !== null){
      const payload:ParamProps = JSON.parse(localStorage.getItem(REMOTE_PAYLOAD) || "");
      const {Base64} = require('js-base64');
      const remoteObjJSON:string = Base64.decode(payload.id);
      const OBJ = JSON.parse(remoteObjJSON);
      getRemoteMedicalTableInfo(OBJ.user_id,onSuccessCallBack,onFailureCallBack);
      
    }
  }

  onSuccessCallBack = (data:DataProps[]): void => {
    // For debugging purpose only
    // console.log(responseData.data);
      this.setState({
          data:data,
      })
    }
    
    onFailureCallBack = (error: ServerResponse): void => {
        alert(error);
    }
    
    

    render(){
        const { data,debuggMode } = this.state;
        return(
            <RemoteTableComponent 
                data={data}
                debuggMode={debuggMode}
            />
        );
    }
}