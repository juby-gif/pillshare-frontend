import { USER_TOKEN, LOGGED_IN_USER } from '../constants';

interface ServerResponse {
    data: ServerData[];
  }
  
  interface ServerData {
    username: string;
    password: string;
  }
  interface ResponseProps {
    message : string;
    token ?: string;
  }

export function postLoginAPI(username:string, password:string, onSuccessCallBack: (responseData: ResponseProps) => void, onFailureCallBack: (responseData: ResponseProps) => void){
    const axios = require('axios').default;
    axios({
        method: 'get',
        url: 'http://localhost:3001/users',
        
      })
      .then(function (response:ServerResponse) {

        //For Debugging purpose only
        // console.log(response.data)
        
        let userArray: ServerData[] = response.data;
        if (userArray !== null || userArray !== undefined || userArray !== []){
    
        for (let userObj of userArray){
            if(userObj.username === username){
                if(userObj.password === password){
                    sessionStorage.setItem(LOGGED_IN_USER,JSON.stringify(userObj));
                    const responseData = {
                        message : "Successfully logged-in",
                        token : USER_TOKEN,
                    }
                    onSuccessCallBack(responseData);
                    return;
                } else {
                    const responseData = {
                        message : "Incorrect Password",
                    }
                    onFailureCallBack(responseData);
                    return;
                }
            }
        }
        const responseData = {
            message : "You are not a registered User",
        }
        onFailureCallBack(responseData);
        }
      })
      .catch(function (error:ServerResponse) {
        console.log(error);
      });
}