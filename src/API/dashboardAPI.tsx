import  LocalStorageService from '../localStorageService';

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



const localStorageService:any = LocalStorageService.getService();
// console.log(`JWT ${localStorageService.getAccessToken()}`)
export const getDashboard = async (onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void) :Promise<void> =>{
    const axios = require('axios').default;
   
    
    await axios({
        method: 'get',
        headers: {
          'Authorization': `JWT ${localStorageService.getAccessToken()}`,
          'Content-Type': 'application/json', 
          'Accept' : 'application/json',
        },
         url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/api/v1/dashboard-datum",
      })
      .then(function (response:ServerResponse){
          onSuccessCallBack(response)
          // console.log(response.data)
      }

        )
      .catch(function (error:ServerResponse) {
         onFailureCallBack(error)
      })
}