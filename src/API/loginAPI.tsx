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
  length ?:number;
}

  export const postLoginAPI = async (username:string, password:string, onSuccessCallBack: (responseData: ResponseProps) => void, onFailureCallBack: (responseData: ResponseProps) => void) :Promise<void> =>{
    const axios = require('axios').default;
    const lengthChecker = (data:any) => {
      let count:number = 0;
      for (let datum in data){
        if (data.hasOwnProperty(datum)) count++;
      }
      if(count !== 0) { return count; }
      else {return 0};
    }
    
    await axios({
        method: 'get',
        url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/users",
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
                          message : "Success! You're Logging in",
                          token : USER_TOKEN,
                          length : lengthChecker(userObj),
                      }
                      onSuccessCallBack(responseData);
                      return;
                  } else {
                      const responseData = {
                          message : "The password you entered is incorrect",
                      }
                      onFailureCallBack(responseData);
                      return;
                  }
              }
          }
          const responseData = {
              message : "This user does not match our records",
          }
          onFailureCallBack(responseData);
        }
      })

      .catch(function (error:ServerResponse) {
        console.log(error);
      });
  }