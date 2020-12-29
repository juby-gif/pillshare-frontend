import React, { Component } from 'react';
import {RouteComponentProps,withRouter} from 'react-router-dom';

import RemoteTableComponent from '../components/remoteTableComponent';
import { getRemoteMedicalTableInfo, getRemoteMedicalTableInfoById, patchRemotePillData } from '../API/remoteTableDataAPI';
import { LOGGED_IN_USER_ID, USER_MEDICAL_TABLE } from '../../constants';


interface IProps extends RouteComponentProps {
  debuggMode:boolean,
}

interface StateProps {
data:DataProps[];
debuggMode:boolean;
isDeleted ?:boolean;
deleteShow?:boolean;
id?:number;
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
interface DeleteProps{
  isDeleted:boolean;
}

class RemoteTableContainer extends Component<IProps & RouteComponentProps,StateProps> { 
    constructor(props:IProps & RouteComponentProps){
      super(props);
      this.state={
          data:[],
          debuggMode:props.debuggMode,
          isDeleted:undefined,
          deleteShow:false,
          id:0,
        }
        this.onSuccessCallBack = this.onSuccessCallBack.bind(this);
        this.onFailureCallBack = this.onFailureCallBack.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onDeleteClick =  this.onDeleteClick.bind(this);
        this.onDeleteConfirmationClick = this.onDeleteConfirmationClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onSuccessPatchRequestCallBack = this.onSuccessPatchRequestCallBack.bind(this);
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
      const user_id:string|null = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID) || '')

      getRemoteMedicalTableInfo(user_id,onSuccessCallBack,onFailureCallBack)
    }

    /* *
        *  API callback functions
        *------------------------------------------------------------
    */

    //To get table data that needs to be updated
    onProcessAPICall(){
      const { id } = this.state;
      const { onSuccessPillTableByIdCallBack,onFailureCallBack } = this;
      getRemoteMedicalTableInfoById(JSON.stringify(id),onSuccessPillTableByIdCallBack,onFailureCallBack);
    }

    // Updated the pill data using PATCH request
    onPatchProcessAPICall(data:DeleteProps){
      const { id } = this.state;
      const { onSuccessPatchRequestCallBack,onFailureCallBack } = this;
      patchRemotePillData(JSON.stringify(id),data,onSuccessPatchRequestCallBack,onFailureCallBack)
    }
    
    /* *
        *  Event handling functions
        *------------------------------------------------------------
    */
    onEditClick = (event : React.SyntheticEvent,id:number) : void =>{
      event.preventDefault();
      this.props.history.push(`/edit/${id}`);
    }

    onDeleteClick = (event : React.SyntheticEvent,id:number) : void =>{
      event.preventDefault();
      this.setState({
        deleteShow:true,
        id:id,
      })
    }

    onCancelClick = (event : React.SyntheticEvent):void => {
      event.preventDefault();
      this.setState({
        deleteShow:false,
      })
    }
    onDeleteConfirmationClick = (event : React.SyntheticEvent):void => {
      event.preventDefault();
      this.onProcessAPICall();
      this.setState({
        deleteShow:false,
      })
    }

    /************** Success Call Backs ***************/ 

    onSuccessCallBack = (data:DataProps[]): void => {
      // For debugging purpose only
      // console.log(data);
      let tableData:DataProps[] = [];
      for(let i=0; i< data.length;i++){
        if (data[i].isDeleted === false){
          data[i].index = i+1;
          tableData.push(data[i])
        }
      }
      localStorage.setItem(USER_MEDICAL_TABLE,JSON.stringify(tableData));
        this.setState({
            data:tableData,
        })
      }
  
    onSuccessPillTableByIdCallBack = (response:DataProps) => {
      const data:{isDeleted:boolean} = {
        isDeleted:true,
      }
      this.onPatchProcessAPICall(data); 
    }
  
    onSuccessPatchRequestCallBack = (response:PatchRequestProps) => {
      // console.log(response)
      const { onSuccessCallBack,onFailureCallBack } = this;
      const user_id:string|null = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID) || '')
      localStorage.removeItem(USER_MEDICAL_TABLE)

      // Calling Table API with GET Request to reflect the changes and re-render
      getRemoteMedicalTableInfo(user_id,onSuccessCallBack,onFailureCallBack)
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
        const { data,debuggMode,isDeleted,deleteShow } = this.state;
        const { onEditClick,onDeleteClick ,onCancelClick,onDeleteConfirmationClick} = this;
        return(
            <RemoteTableComponent 
                data={data}
                isDeleted={isDeleted}
                deleteShow={deleteShow}
                debuggMode={debuggMode}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
                onCancelClick={onCancelClick}
                onDeleteConfirmationClick={onDeleteConfirmationClick}
            />
        );
    }
}

export default withRouter(RemoteTableContainer);