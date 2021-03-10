interface ServerData {
    firstName : string;
    middleName : string;
    lastName : string;
    username : string;
    email : string;
    password : string;
    checkedStatus : boolean;
    authCode?:string;
    user_id ?: string;
}

interface MessageProps{
  message:string;
}
interface ResponseProps {
  data : MessageProps;
}

interface ServerErrResponse {
  response : ResponseProps;
}

export const postRegisterAPI = async (postData:ServerData, onSuccessCallBack: (responseData: string) => void, onFailureCallBack: (responseData: string) => void) :Promise<void> =>{
    const axios = require('axios').default;
        await axios({
            method: 'post',
            url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/api/v1/register",
            data: postData,
            headers: {'Content-Type':'application/json'}
          })
          .then(function (response:ResponseProps) {
              const message:string  = response.data.message
                onSuccessCallBack(message);
          })
          .catch(function (error:ServerErrResponse) {
            onFailureCallBack(error.response.data.message);
          });
    }