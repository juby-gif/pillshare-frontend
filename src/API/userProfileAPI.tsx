interface Props{
    firstName: string,
    middleName: string,
    lastName: string,
    username: string,
    email: string,
    weight: string;
    height: string;
    bodyMassIndexValue:string;
    age:number,
    gender:string,
    dob:string,
    address:string,
    city:string,
    province:string,
    country:string,
    zip:string,
    phone:string,
    BMI:string,
    bloodGroup:string,
    underlyingHealthIssues:string[],
    otherHealthIssues:string[]
}

interface ServerResponse {
    data: Props[];
}

export function getUserProfileAPI(user_id: string|null, onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void){
    const axios = require('axios').default;
    axios({
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