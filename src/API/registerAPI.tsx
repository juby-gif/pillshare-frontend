

interface ServerResponse {
    data: ServerData[];
  }
  
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

interface ResponseProps {
    message : string;
   
}

export const postRegisterAPI = async (postData:ServerData, onSuccessCallBack: (responseData: ResponseProps) => void, onFailureCallBack: (responseData: ResponseProps) => void) :Promise<void> =>{
    const axios = require('axios').default;
        await axios({
            method: 'post',
            url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/users",
            data: postData,
            headers: {'Content-Type':'application/json'}
            
          })
          .then(function (response:ServerResponse) {
              if(response.data !== [] || response.data !== undefined || response.data !== null){
                const responseData : ResponseProps = {
                    message : "Congratulations! You are successfully registered!",
                }
                onSuccessCallBack(responseData);
              } else {
                const responseData : ResponseProps = {
                    message:"Registration Failed"
                }
                onFailureCallBack(responseData);
              }
          })
          .catch(function (error:ServerResponse) {
            console.log(error);
          });
    }