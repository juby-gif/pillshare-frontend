


interface BodyTemperatureProps {
  reading ?: number;
  date ?: string;
  time ?: string;
  instrumentID: number;
  user_id: string | null;

}

interface BloodPressureProps {
  diastoleReading ?: number;
  systoleReading ?: number;
  date ?: string;
  time ?: string;
  instrumentID: number;
  user_id: string | null;

}

interface GlucoseProps {
  reading ?: number;
  date ?: string;
  time ?: string;
  instrumentID: number;
  user_id: string | null;

}
interface HeartRateProps {
  reading ?: number;
  date ?: string;
  time ?: string;
  instrumentID: number;
  user_id: string | null;

}
interface OxygenSaturationProps {
  reading ?: number;
  date ?: string;
  time ?: string;
  instrumentID: number;
  user_id: string | null;

}

interface ServerResponse {
  data: ServerData[];
}

interface ServerData {
  token ?: string;
  user_id ?: string;
  authCode?:string;
  heartRateData ?: HeartRateProps | null;
  bloodPressureData ?: BloodPressureProps | null;
  bodyTemperatureData ?: BodyTemperatureProps | null;
  glucoseData ?: GlucoseProps | null;
  oxygenSaturationData ?: OxygenSaturationProps | null;
}
interface DataProps{
  user_id ?: string;
  authCode?:string;
}

export const getSharableLinkAPI = async (user_id:string|undefined, onSuccessCallBack: (responseData: string) => void, onFailureCallBack: (responseData: ServerResponse) => void) :Promise<void> =>{
    const axios = require('axios').default;
    const {Base64} = require('js-base64');
    await axios({
        method: 'get',
        url: 'http://localhost:3001/users?user_id='+ user_id,
      })
      .then(function (response:ServerResponse){
        for (let datum of response.data){
          let data:DataProps = {
            user_id:datum.user_id,
            authCode:datum.authCode,
        }
        let payload = Base64.encode(JSON.stringify(data));
        onSuccessCallBack(payload)
        return;
        }
    })
    .catch(function (error:ServerResponse) {
       onFailureCallBack(error)
    })
}