import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

interface ServerResponse {
    data:ServerData;
  }
interface ServerData{
  accessToken: string;
  refreshToken: string;
  length: number;
  message: string;
}

interface ServerErrResponse {
  response:ServerResponse;
}

interface ResponseProps {
  message : string;
  length :number;
}

  export const postLoginAPI = async (email:string, password:string, onSuccessCallBack: (responseData: ResponseProps) => void, onFailureCallBack: (responseData: string) => void) :Promise<void> =>{
    const axios = require('axios').default;
    
    const postData = {
      email:email,
      password:password,
    }
    
    await axios({
        method: 'post',
        data: postData,
        headers: {'Content-Type':'application/json'},
        url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/api/v1/login",
      })
      .then(function (response:ServerResponse) {

        //For Debugging purpose only
        // console.log(response.data.refreshToken)
        // console.log(response.data.accessToken)
        // console.log(response.data.length)
        // console.log(response.data.message)

        localStorage.setItem(ACCESS_TOKEN,response.data.accessToken)
        localStorage.setItem(REFRESH_TOKEN,response.data.refreshToken)
        const responseData = {
          message : response.data.message,
          length : response.data.length,
      }
      onSuccessCallBack(responseData);
      return;
      
      })

      .catch(function (error:ServerErrResponse) {
        const errorResponse:string = error.response?error.response.data.message:"Server Error"
        onFailureCallBack(errorResponse)
      });
  }