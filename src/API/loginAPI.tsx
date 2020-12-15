import { USER_TOKEN, LOGGED_IN_USER_ID, LOGGED_IN_USER_NAME, USER_IMAGE } from '../constants';

interface ServerResponse {
    data: ServerData[];
  }

interface ImageType{
  dataURL?: string;
  file?: File;
  [key: string]: any;
  }

interface ServerData {
  username: string;
  password: string;
  user_id:string;
  firstName:string;
  lastName:string;
  images:ImageType[];
}

interface ResponseProps {
  message : string;
  token ?: string;
}

export const postLoginAPI = async (username:string, password:string, onSuccessCallBack: (responseData: ResponseProps) => void, onFailureCallBack: (responseData: ResponseProps) => void) :Promise<void> =>{
    const axios = require('axios').default;
    await axios({
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
                    localStorage.setItem(LOGGED_IN_USER_ID,JSON.stringify(userObj.user_id));
                    localStorage.setItem(LOGGED_IN_USER_NAME,JSON.stringify({firstName:userObj.firstName,lastName:userObj.lastName}));
                    localStorage.setItem(USER_IMAGE,JSON.stringify(userObj.images));

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