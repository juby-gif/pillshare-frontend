import { USER_MEDICAL_TABLE_EDIT } from "../constants";


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

interface PatchProps {
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
  isDeleted :boolean;
  id?:number;
}

interface PatchRequestProps{
data:PatchProps[];
}

export const getMedicalTableInfo = async (user_id: string|null, onSuccessCallBack: (data:DataProps[])=>void, onFailureCallBack: (responseData: ServerResponse) => void) : Promise<void> =>{
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

export const getMedicalTableInfoById = async (id:string, onSuccessCallBack: (responseData:DataProps)=>void, onFailureCallBack: (responseData: ServerResponse) => void) : Promise<void> =>{
  const axios = require('axios').default;
  await axios({
      method: 'get',
      url: 'http://localhost:3001/medical_information?id=' + id,
    })
    .then(function (response:ServerResponse){
      for(let datum of response.data){
              let medicalData:DataProps = {
                  before_or_after : datum.before_or_after,
                  dosage : datum.dosage,
                  dose : datum.dose,
                  duration : datum.duration,
                  end_date : datum.end_date,
                  start_date : datum.start_date,
                  missed : datum.missed,
                  measure : datum.measure,
                  name : datum.name,
                  reason : datum.reason,
                  taken : datum.taken,
                  intervals: datum.intervals,
                  isDeleted : datum.isDeleted,
                  id : datum.id,
              }
        localStorage.setItem(USER_MEDICAL_TABLE_EDIT, JSON.stringify(medicalData));
        onSuccessCallBack(medicalData);
        return;
      }
      
    })
    .catch(function (error:ServerResponse) {
       onFailureCallBack(error)
    })
}

export const postPillData = async (user_id:string|undefined,data:ServerData, onSuccessCallBack: (responseData: ServerResponse) => void, onFailureCallBack: (responseData: ServerResponse) => void) :Promise<void> =>{
  const axios = require('axios').default;
  console.log(data)
      await axios({
          method: 'post',
          url: 'http://localhost:3001/medical_information?user_id=' + user_id,
          data: data,
          headers: {'Content-Type':'application/json'}
          
        })
        .then(function (response:ServerResponse) {
            if(response.data !== [] || response.data !== undefined || response.data !== null){
              onSuccessCallBack(response);
            } 
        })
        .catch(function (error:ServerResponse) {
          onFailureCallBack(error);
        });
  }

export const patchPillData = async (id:string,data:ServerData, onSuccessCallBack: (responseData: PatchRequestProps) => void, onFailureCallBack: (responseData: ServerResponse) => void) :Promise<void> =>{
  const axios = require('axios').default;
      await axios({
          method: 'patch',
          url: 'http://localhost:3001/medical_information/' + id,
          data: data,
          headers: {'Content-Type':'application/json'}
          
        })
        .then(function (response:PatchRequestProps) {
            if(response.data !== [] || response.data !== undefined || response.data !== null){
              onSuccessCallBack(response);
            } 
        })
        .catch(function (error:ServerResponse) {
          onFailureCallBack(error);
        });
  }