import React, { Component } from 'react';
import {RouteComponentProps,withRouter} from 'react-router-dom';

import RemoteTableComponent from '../components/remoteTableComponent';
import { getRemoteMedicalTableInfo } from '../API/remoteTableDataAPI';
import { REMOTE_PAYLOAD, USER_MEDICAL_TABLE } from '../../constants';


interface IProps extends RouteComponentProps {
  debuggMode:boolean,
}

interface StateProps {
data:DataProps[];
}

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

interface ParamProps {
  id?:string;
}

class RemoteTableContainer extends Component<IProps & RouteComponentProps,StateProps> { 
    constructor(props:IProps & RouteComponentProps){
      super(props);
      this.state={
          data:[],
        }
        this.onSuccessCallBack = this.onSuccessCallBack.bind(this);
        this.onFailureCallBack = this.onFailureCallBack.bind(this);
      }
    /* *
        *  Utility
        *------------------------------------------------------------
    */
    //Nothing

    /* *
        *  Component Life-cycle Management
        *------------------------------------------------------------
    */
    componentDidMount(){
      const { onSuccessCallBack,onFailureCallBack } = this;
      const payload:ParamProps = JSON.parse(localStorage.getItem(REMOTE_PAYLOAD) || "");
      const {Base64} = require('js-base64');
      const remoteObjJSON:string = Base64.decode(payload.id);
      const OBJ = JSON.parse(remoteObjJSON);

      getRemoteMedicalTableInfo(OBJ.user_id,onSuccessCallBack,onFailureCallBack)
    }

    /* *
        *  API callback functions
        *------------------------------------------------------------
    */

    /************** Success Call Backs ***************/ 

    onSuccessCallBack = (data:DataProps[]): void => {
      // For debugging purpose only
      // console.log(data);
      let tableData:DataProps[] = [];
      let count:number = 0;
      for(let i=0; i< data.length;i++){
        if (data[i].isDeleted === false){
          data[i].index = ++count;
          tableData.push(data[i])
        }
      }
      localStorage.setItem(USER_MEDICAL_TABLE,JSON.stringify(tableData));
        this.setState({
            data:tableData,
        })
      }
  
    /************** Success Call Backs ***************/ 


    /************** Failure Call Backs ***************/ 

    onFailureCallBack = (error: ServerResponse): void => {
      console.log(error);
    }
    
    /************** Failure Call Backs ***************/ 
  
  
    
    /* *
        *  Main render function
        *------------------------------------------------------------
    */

    render(){
        const { data } = this.state;
        return(
            <RemoteTableComponent 
                data={data}
            />
        );
    }
}

export default withRouter(RemoteTableContainer);