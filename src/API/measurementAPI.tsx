interface BodyTemperatureProps {
    reading ?: number;
    date ?: string;
    time ?: string;
    instrumentID?: number;
    user_id?: string;
  
  }
  
  interface BloodPressureProps {
    diastoleReading ?: number;
    systoleReading ?: number;
    date ?: string;
    time ?: string;
    instrumentID?: number;
    user_id?: string;
  
  }
  
  interface GlucoseProps {
    reading ?: number;
    date ?: string;
    time ?: string;
    instrumentID?: number;
    user_id?: string;
  
  }
  interface HeartRateProps {
    reading ?: number;
    date ?: string;
    time ?: string;
    instrumentID?: number;
    user_id?: string;
  
  }
  interface OxygenSaturationProps {
    reading ?: number;
    date ?: string;
    time ?: string;
    instrumentID?: number;
    user_id?: string;
  
  }
  
  interface ServerResponse {
    data: ServerData[];
  }
  
  interface ServerData {
    token ?: string;
    user_id ?: string;
    heartRateData ?: HeartRateProps;
    bloodPressureData ?: BloodPressureProps;
    bodyTemperatureData ?: BodyTemperatureProps;
    glucoseData ?: GlucoseProps;
    oxygenSaturationData ?: OxygenSaturationProps;
  }
export const postTimeSeriesData = async (data:ServerData | undefined,name:string,onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void) :Promise<void> =>{
    const axios = require('axios').default;
    await axios( {
          method: 'post',
          url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/" + name,
          data: data,
          headers: {'Content-Type':'application/json'}})
          .then(function (responseData:ServerResponse) {
                onSuccessCallBack(responseData);
              }) 
  
          .catch(function (error:ServerResponse) {
            onFailureCallBack(error);
            });
  }