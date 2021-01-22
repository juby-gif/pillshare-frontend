interface ServerData {
    user_id ?: string;
    date ?: string;
    time ?: string;
    intensity ?: number;
    values ?: string[] | number[] | boolean[];
    anxietyCheck ?: boolean;
    depressionCheck ?: boolean;
    irritabilityCheck ?: boolean;
    peacefulCheck ?: boolean;
    happyCheck ?: boolean;
    othersCheck ?: boolean;
    othersValue ?: string;
    healthCheck ?: string;
}

interface ServerResponse {
    data : ServerData[];
}


export const postHealthCheckData = async (data:ServerData, onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void) :Promise<void> =>{
    const axios = require('axios').default;
    console.log(data)
        await axios({
            method: 'post',
            url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/health_check_data",            
            data: data,
            headers: {'Content-Type':'application/json'}
            
          })
          .then(function (response:ServerResponse) {
              if(response.data !== [] || response.data !== undefined || response.data !== null){
                onSuccessCallBack(response);
              } 
          })
          .catch(function (error:ServerResponse) {
            onFailureCallBack(error);
          });
    }