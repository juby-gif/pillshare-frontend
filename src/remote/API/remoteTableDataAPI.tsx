
interface DataProps{
  index?:number;
  before_or_after ?: string;
  dosage ?: string;
  dose ?: string;
  duration ?: string;
  end_date ?: string;
  start_date ?: string;
  missed ?: string[];
  measure ?: string;
  name ?: string;
  reason ?: string;
  taken ?: string[];
  intervals ?: IntervalProps;
  isDeleted ?:boolean;
  id?:number;
}
interface IntervalProps {
  part: string[];
  time: string[];
}

interface ServerResponse {
data: ServerData[];
}

interface ServerData {
  user_id?:string|undefined;
  name?:string;
  dose?:string;
  measure?:string;
  isDeleted:boolean;
  dosage?:string;
  before_or_after?:string;
  duration?:string;
  start_date?:string;
  end_date?:string;
  intervals?:IntervalProps,
  reason?:string;
  taken?:string[];
  missed?:string[];
  index?:number;
  id?:number;
}



export const getRemoteMedicalTableInfo = async (user_id: string|null, onSuccessCallBack: (data:DataProps[])=>void, onFailureCallBack: (responseData: ServerResponse) => void) : Promise<void> =>{
    const axios = require('axios').default;
    let data:DataProps[]=[];
    await axios({
        method: 'get',
        url: 'http://localhost:3001/medical_information?user_id=' + user_id,
      })
      .then(function (response:ServerResponse){
        
        
        for (let i=0;i<response.data.length;i++){
                let medicalData:DataProps = {
                    index: i+1,
                    before_or_after : response.data[i].before_or_after,
                    dosage : response.data[i].dosage,
                    dose : response.data[i].dose,
                    duration : response.data[i].duration,
                    end_date : response.data[i].end_date,
                    start_date : response.data[i].start_date,
                    missed : response.data[i].missed,
                    measure : response.data[i].measure,
                    name : response.data[i].name,
                    reason : response.data[i].reason,
                    taken : response.data[i].taken,
                    intervals: response.data[i].intervals,
                    isDeleted : response.data[i].isDeleted,
                    id : response.data[i].id,
                }
                data.push(medicalData)
        }
        onSuccessCallBack(data);
      })
      .catch(function (error:ServerResponse) {
         onFailureCallBack(error)
      })
}