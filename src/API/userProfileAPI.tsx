interface Props{
    firstName: string;
    middleName: string;
    lastName: string;
    username: string;
    email: string;
    weight: string;
    height: string;
    age:number;
    gender:string;
    dob:string;
    address:string;
    city:string;
    province:string;
    country:string;
    zip:string;
    phone:string;
    bodyMassIndexValue:string;
    BMI:string;
    bloodGroup:string;
    underlyingHealthIssues:string[];
    otherHealthIssues:string[];
    images:ImageType[];
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
      }

        )
      .catch(function (error:ServerResponse) {
         onFailureCallBack(error)
      })
}

export const updateUserProfileAPI = async (user_id: string|null, onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void, data:Props) :Promise<void> =>{
    const axios = require('axios').default;
    await axios({
            method: 'put',
            url: 'http://localhost:3001/users?user_id=' + user_id,
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