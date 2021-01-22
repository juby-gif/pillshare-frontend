interface ServerResponse{
    data:ServerData[];
}
interface ServerData{
    systoleReading:string;
    diastoleReading:string;
    date:string;
    time:string;
}

export const getBloodPressureData = async (user_id: string|null, onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void) :Promise<void> =>{
    const axios = require('axios').default;
    await axios({
        method: 'get',
        url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/blood_pressure_measurements?user_id=" + user_id,        
      })
      .then(function (response:ServerResponse){
          onSuccessCallBack(response)
      }

        )
      .catch(function (error:ServerResponse) {
         onFailureCallBack(error)
      })
}