interface TakenProps{
  part ?: string;
  time ?: string;
}

interface ServerResponse {
  data: ServerData[];
  }

interface ServerData {
  before_or_after ?: string;
  dosage ?: string;
  dose ?: number;
  duration ?: number;
  end_date ?: string;
  start_date ?: string;
  time_taken ?: TakenProps;
  missed ?: string;
  measure ?: string;
  name ?: string;
  reason ?: string;
  taken ?: string;
  id :  number;
}

export const getMedicalLogs = async (user_id: string|null, onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void) :Promise<void> =>{
    const axios = require('axios').default;
    await axios({
        method: 'get',
        url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/medication_logs?user_id=" + user_id,
      })
      .then(function (response:ServerResponse){
          onSuccessCallBack(response)
      }

        )
      .catch(function (error:ServerResponse) {
         onFailureCallBack(error)
      })
}