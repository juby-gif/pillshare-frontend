import { USER_MEDICAL_TABLE_EDIT } from "../constants";
import  LocalStorageService from '../localStorageService';


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
  beforeOrAfter?:string;
  duration?:string;
  startDate?:string;
  endDate?:string;
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

const localStorageService:any = LocalStorageService.getService()
export const getMedicalTableInfo = async (onSuccessCallBack: (data:DataProps[])=>void, onFailureCallBack: (responseData: ServerResponse) => void) : Promise<void> =>{
    const axios = require('axios').default;
    let data:DataProps[]=[];
    await axios({
        method: 'get',
        headers: {
          'Authorization': `JWT ${localStorageService.getAccessToken()}`,
          'Content-Type': 'application/json', 
          'Accept' : 'application/json',
        },
        url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/api/v1/medical-datum",
      })
      .then(function (response:ServerResponse){
        
        
        for (let i=0;i<response.data.length;i++){
                let medicalData:DataProps = {
                    index: i+1,
                    before_or_after : response.data[i].beforeOrAfter,
                    dosage : response.data[i].dosage,
                    dose : response.data[i].dose,
                    duration : response.data[i].duration,
                    end_date : response.data[i].endDate,
                    start_date : response.data[i].startDate,
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
        // console.log(response.data)
      })
      .catch(function (error:ServerResponse) {
         onFailureCallBack(error)
      })
}

export const getMedicalTableInfoById = async (id:string, onSuccessCallBack: (responseData:DataProps)=>void, onFailureCallBack: (responseData: ServerResponse) => void) : Promise<void> =>{
  const axios = require('axios').default;
  await axios({
      method: 'get',
      headers: {
        'Authorization': `JWT ${localStorageService.getAccessToken()}`,
        'Content-Type': 'application/json', 
        'Accept' : 'application/json',
      },
      url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/api/v1/medical-datum",      
    })
    .then(function (response:ServerResponse){
      for(let datum of response.data){
              let medicalData:DataProps = {
                  before_or_after : datum.beforeOrAfter,
                  dosage : datum.dosage,
                  dose : datum.dose,
                  duration : datum.duration,
                  end_date : datum.endDate,
                  start_date : datum.startDate,
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
      console.log(response)
      
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
          url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/medical_information?user_id=" + user_id,
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
          url: process.env.REACT_APP_API_PROTOCOL + "://" + process.env.REACT_APP_API_DOMAIN + "/medical_information/" + id,
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