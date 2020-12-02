export function getDashboard(user_id, onSuccessCallBack, onFailureCallBack){
    const axios = require('axios').default;
    axios({
        method: 'get',
        url: 'http://localhost:3001/dashboard_dataset?user_id=' + user_id,
      })
      .then(function (response){
          onSuccessCallBack(response)
      }

        )
      .catch(function (error) {
         onFailureCallBack(error)
      })
}