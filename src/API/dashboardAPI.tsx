import  LocalStorageService from '../localStorageService';

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

interface DashboardRequestProps {
  params : string|null;
}

const localStorageService:any = LocalStorageService.getService()
// console.log(`JWT ${localStorageService.getAccessToken()}`)
export const getDashboard = async (onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void) :Promise<void> =>{
    const axios = require('axios').default;
    const postData: DashboardRequestProps ={
      params : "36ac075a-8881-417d-9b56-fa6d2b7d9b3e",
    }
    
    await axios({
        method: 'get',
        // data: postData,
        // headers: {
        //   'Authorization': `JWT ${localStorageService.getAccessToken()}`,
        //   'Content-Type': 'application/json', 
        //   'Accept' : 'application/json',
        // },
        url:"http://innovationspace.ca:3001/dashboard_dataset?user_id=1fc257ec-5449-4491-a3fe-d961ed685270"
        // url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/api/v1/dashboard",
      })
      .then(function (response:ServerResponse){
          onSuccessCallBack(response)
          console.log(response.data)
      }

        )
      .catch(function (error:ServerResponse) {
         onFailureCallBack(error)
      })
}