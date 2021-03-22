import  LocalStorageService from '../localStorageService';
interface BodyTemperatureProps {
    reading ?: number;
    time ?: string;
    instrumentID?: number;
  
  }
  
  interface BloodPressureProps {
    diastoleReading ?: number;
    systoleReading ?: number;
    time ?: string;
    instrumentID?: number;
  
  }
  
  interface GlucoseProps {
    reading ?: number;
    time ?: string;
    instrumentID?: number;
  
  }
  interface HeartRateProps {
    reading ?: number;
    time ?: string;
    instrumentID?: number;
  
  }
  interface OxygenSaturationProps {
    reading ?: number;
    time ?: string;
    instrumentID?: number;
  
  }
  
  interface ServerResponse {
    data: ServerData;
  }
  
  interface ServerData {
    heartRate ?: HeartRateProps;
    bloodPressure ?: BloodPressureProps;
    bodyTemperature ?: BodyTemperatureProps;
    glucose ?: GlucoseProps;
    oxygenSaturation ?: OxygenSaturationProps;
  }
const localStorageService:any = LocalStorageService.getService();
export const postTimeSeriesData = async (heartRateData:HeartRateProps,bloodPressureData:BloodPressureProps,bodyTemperatureData:BodyTemperatureProps,glucoseData:GlucoseProps,oxygenSaturationData:OxygenSaturationProps,onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void) :Promise<void> =>{
    const axios = require('axios').default;
    const data:ServerData = {
      heartRate:heartRateData,
      bloodPressure:bloodPressureData,
      bodyTemperature:bodyTemperatureData,
      glucose:glucoseData,
      oxygenSaturation:oxygenSaturationData,
    }
    await axios( {
          method: 'post',
          headers: {
            'Authorization': `JWT ${localStorageService.getAccessToken()}`,
            'Content-Type': 'application/json', 
            'Accept' : 'application/json',
          },
          url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/api/v1/vitals-data",
          data: data
        })
          .then(function (responseData:ServerResponse) {
                onSuccessCallBack(responseData);
                // console.log(responseData.data)
              }) 
  
          .catch(function (error:ServerResponse) {
            onFailureCallBack(error);
            });
  }