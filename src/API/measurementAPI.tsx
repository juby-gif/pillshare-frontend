
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
    token : string;
    user_id : string;
    heartRateData ?: HeartRateProps | null;
    bloodPressureData ?: BloodPressureProps | null;
    bodyTemperatureData ?: BodyTemperatureProps | null;
    glucoseData ?: GlucoseProps | null;
    oxygenSaturationData ?: OxygenSaturationProps | null;
  }
export const postTimeSeriesData = async (data:HeartRateProps | BloodPressureProps | BodyTemperatureProps | GlucoseProps | OxygenSaturationProps | null,name:string,onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void) :Promise<void> =>{
    const axios = require('axios').default;
    await axios( {
          method: 'post',
          url: URL + name,
          data: data,
          headers: {'Content-Type':'application/json'}})
          .then(function (responseData:ServerResponse) {
                onSuccessCallBack(responseData);
              }) 
  
          .catch(function (error:ServerResponse) {
            onFailureCallBack(error);
            });
  }