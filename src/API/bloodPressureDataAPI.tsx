import  LocalStorageService from '../localStorageService';
interface ServerResponse{
    data:ServerData[];
}
interface ServerData{
    systoleReading:string;
    diastoleReading:string;
    date:string;
    time:string;
}

const localStorageService:any = LocalStorageService.getService();

export const getBloodPressureData = async (onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void) :Promise<void> =>{
    const axios = require('axios').default;
    await axios({
        method: 'get',
        headers: {
            'Authorization': `JWT ${localStorageService.getAccessToken()}`,
            'Content-Type': 'application/json', 
            'Accept' : 'application/json',
          },
        url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/api/v1/blood-pressure-datum",        
      })
      .then(function (response:ServerResponse){
          onSuccessCallBack(response)
      }

        )
      .catch(function (error:ServerResponse) {
         onFailureCallBack(error)
      })
}