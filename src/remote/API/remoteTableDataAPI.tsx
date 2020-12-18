

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
export const getRemoteMedicalTableInfo = async (user_id: string|null, onSuccessCallBack: (data:DataProps[])=>void, onFailureCallBack: (responseData: ServerResponse) => void) : Promise<void> =>{
    const axios = require('axios').default;
    let data:DataProps[]=[];
    await axios({
        method: 'get',
        url: 'http://localhost:3001/dashboard_dataset?user_id=' + user_id,
      })
      .then(function (response:ServerResponse){
        
        
        for (let datum of response.data){
            for(let i=0;i< datum.medical_information.length;i++){
                let medicalData:DataProps = {
                  index: i+1,
                    before_or_after : datum.medical_information[i].before_or_after,
                    dosage : datum.medical_information[i].dosage,
                    dose : datum.medical_information[i].dose,
                    duration : datum.medical_information[i].duration,
                    end_date : datum.medical_information[i].end_date,
                    start_date : datum.medical_information[i].start_date,
                    missed : datum.medical_information[i].missed,
                    measure : datum.medical_information[i].measure,
                    name : datum.medical_information[i].name,
                    reason : datum.medical_information[i].reason,
                    taken : datum.medical_information[i].taken,
                    intervals: datum.medical_information[i].intervals,
                }
                data.push(medicalData)
            }
        }
        onSuccessCallBack(data);
      })
      .catch(function (error:ServerResponse) {
         onFailureCallBack(error)
      })
}