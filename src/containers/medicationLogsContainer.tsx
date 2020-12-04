import React, { Component } from 'react';

import MedicationLogsComponent from '../components/medicationLogsComponent';
import { getMedicalLogs } from '../API/medicalLogsAPI';
import { LOGGED_IN_USER } from '../constants';


interface IProps {

}

interface StateProps {
  medical_information : MedicalProps[];
}

interface MedicalProps {
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
  id : number;
}

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

export default class MedicationLogsContainer extends Component<IProps,StateProps> {
  
  /*  *
      *  Initializer
      *------------------------------------------------------------
  */
    constructor(props:IProps){
        super(props);
        this.state = {
          medical_information : [],
        }
        this.onSuccessCallBack = this.onSuccessCallBack.bind(this);
        this.onFailureCallBack = this.onFailureCallBack.bind(this);
    }
    

    /* *
        *  Component Life-cycle Management
        *------------------------------------------------------------
    */
    componentDidMount(){
      const { onSuccessCallBack,onFailureCallBack } = this;
      const user_id:string|null = JSON.parse(sessionStorage.getItem(LOGGED_IN_USER) || '{}').user_id;

    /* *
        *  API callback functions
        *------------------------------------------------------------
    */
      getMedicalLogs(user_id,onSuccessCallBack,onFailureCallBack);
      }

    /* *
      *  Utility
      *------------------------------------------------------------
    */
    //Nothing

    /* *
        *  Event handling functions
        *------------------------------------------------------------
    */
    onSuccessCallBack = (responseData: ServerResponse): void => {
      // For debugging purpose only
      // console.log(responseData.data);
        this.setState({
          medical_information : responseData.data,
        })
      }
      
      onFailureCallBack = (error: ServerResponse): void => {
          alert(error);
      }
  /*  *
      *  Main render function
      *------------------------------------------------------------
  */
  render () {
    const { medical_information } = this.state;
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <MedicationLogsComponent 
            medical_information={medical_information}
        />
        );
    }
}