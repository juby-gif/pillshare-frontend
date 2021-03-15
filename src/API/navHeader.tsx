
interface ServerData{
    firstName?: string;
    lastName?: string;
}
interface ServerResponse {
    data: ServerData;
}


export const getNavHeader = async (onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void) :Promise<void> =>{
    const axios = require('axios').default;
    await axios({
        method: 'get',
        headers: {
            'Content-Type': 'application/json', 
            'Accept' : 'application/json',
        },
        url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/api/v1/nav-header",
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

