import { LOGGED_IN_USER } from "../constants";

interface Props{
    firstName?: string;
    middleName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    weight?: string;
    height?: string;
    age?:number;
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
    images:ImageType[];
    id?:number
}

interface ImageType{
    dataURL?: string;
    file?: File;
    [key: string]: any;
    }
    

interface ServerResponse {
    data: Props[];
}

export const getUserProfileAPI = async (user_id: string|null, onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void) :Promise<void> =>{
    const axios = require('axios').default;
    await axios({
        method: 'get',
        url: 'http://localhost:3001/users?user_id=' + user_id,
      })
      .then(function (response:ServerResponse){
          onSuccessCallBack(response)
        //   For Debugging purpose only
          console.log(response.data)
      }

        )
      .catch(function (error:ServerResponse) {
         onFailureCallBack(error)
      })
}

export const updateUserProfileAPI = async (user_id: string|null, onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void, data:Props) :Promise<void> =>{
    let userObjArr = JSON.parse(localStorage.getItem(LOGGED_IN_USER)|| '[]')
    const getUserID = (userObjArr:Props[]):number|undefined => {
    for (let userObj of userObjArr){
        return userObj.id;
        }
    }   
    
    const axios = require('axios').default;
    await axios({
            method: 'patch',
            url: 'http://localhost:3001/users/' + getUserID(userObjArr) +'/',
            data: data,
            headers: {'Content-Type':'application/json'}
        })
      .then(function (response:ServerResponse){
          onSuccessCallBack(response)
      }

        )
      .catch(function (error:ServerResponse) {
         onFailureCallBack(error)
      })
}