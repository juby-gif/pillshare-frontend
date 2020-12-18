import { REMOTE_PAYLOAD } from '../../constants';

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
    firstName :string;
  }

  interface ParamProps {
    id?:string;
    user_id?:string;
  }

  export const getRemoteDashboard = async (payload:ParamProps, onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void) :Promise<void> =>{
    const axios = require('axios').default;
    const {Base64} = require('js-base64');

    //For Debugging purpose only
    // console.log(payload.id)

    const remoteObjJSON:string = Base64.decode(payload.id);
    localStorage.setItem(REMOTE_PAYLOAD,JSON.stringify(payload));
    const remoteObj:ParamProps = JSON.parse(remoteObjJSON);
    await axios({
        method: 'get',
        url: 'http://localhost:3001/dashboard_dataset/?user_id=' + remoteObj.user_id,
      })
      .then(function (response:ServerResponse){
          onSuccessCallBack(response)
      }

        )
      .catch(function (error:ServerResponse) {
         onFailureCallBack(error)
      })
}