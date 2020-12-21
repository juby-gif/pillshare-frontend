interface ServerResponse{
    data:ServerData[];
}
interface ServerData {
    reading:string;
    date:string;
    time:string;
}

export const getRemoteBodyTemperatureData = async (user_id: string|null, onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void) :Promise<void> =>{
    const axios = require('axios').default;
    await axios({
        method: 'get',
        url: 'http://localhost:3001/body_temperature_measurements?user_id=' + user_id,
      })
      .then(function (response:ServerResponse){
          onSuccessCallBack(response)
      }

        )
      .catch(function (error:ServerResponse) {
         onFailureCallBack(error)
      })
}