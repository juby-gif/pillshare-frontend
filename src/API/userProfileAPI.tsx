import { LOGGED_IN_USER } from "../constants";
import  LocalStorageService from '../localStorageService';

interface ServerData{
    firstName?: string;
    middleName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    weight?: string;
    height?: string;
    age?:string;
    gender?:string;
    dob?:string;
    address?:string;
    city?:string;
    province?:string;
    country?:string;
    zip?:string;
    phone?:string;
    bodyMassIndexValue?:string;
    BMI?:string;
    bloodGroup?:string;
    underlyingHealthIssues?:string;
    otherHealthIssues?:string;
    // images:ImageType[];
    id?:number
}

interface ImageType{
    dataURL?: string;
    file?: File;
    [key: string]: any;
    }
    
interface ServerPatchResponse{
 data:ServerPatchData;
}
interface ServerPatchData{
  message: string;
  length: number;
}
interface ServerResponse {
    data: ServerData;
}

const localStorageService:any = LocalStorageService.getService()
export const getUserProfileAPI = async (onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerPatchResponse) => void) :Promise<void> =>{
    const axios = require('axios').default;
    await axios({
        headers: {
          'Authorization': `JWT ${localStorageService.getAccessToken()}`,
          'Content-Type': 'application/json', 
          'Accept' : 'application/json',
        },
        url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/api/v1/user",
      })
      .then(function (response:ServerResponse){
          onSuccessCallBack(response)
        //   For Debugging purpose only
          // console.log(response.data)
      }

        )
      .catch(function (error:ServerPatchResponse) {
         onFailureCallBack(error)
      })
}

export const updateUserProfileAPI = async (onSuccessCallBack: (responseData: ServerPatchResponse) => void, onFailureCallBack: (responseData: ServerPatchResponse) => void, data:ServerData) :Promise<void> =>{
    
    const axios = require('axios').default;
    await axios({
            method: 'patch',
            url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/api/v1/update-user",            
            data: data,
            headers: {
              'Authorization': `JWT ${localStorageService.getAccessToken()}`,
              'Content-Type': 'application/json', 
              'Accept' : 'application/json',
            }
        })
      .then(function (response:ServerPatchResponse){
          onSuccessCallBack(response)
      }

        )
      .catch(function (error:ServerPatchResponse) {
         onFailureCallBack(error)
      })
}