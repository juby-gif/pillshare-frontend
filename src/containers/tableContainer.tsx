import React, { Component } from 'react';
import {RouteComponentProps,withRouter} from 'react-router-dom';

import TableComponent from '../components/tableComponent';
import { getMedicalTableInfo, getMedicalTableInfoById, patchPillData } from '../API/tableDataAPI';
import { LOGGED_IN_USER_ID, USER_MEDICAL_TABLE } from '../constants';


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


class TableContainer extends Component<IProps & RouteComponentProps,StateProps> { 
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

  componentDidMount(){
    const { onSuccessCallBack,onFailureCallBack } = this;
    const user_id:string|null = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID) || '')

    getMedicalTableInfo(user_id,onSuccessCallBack,onFailureCallBack)
  }

  onProcessAPICall(){
    const { id } = this.state;
    const { onSuccessPillTableByIdCallBack,onFailureCallBack } = this;

    // Get the data to be deleted
    getMedicalTableInfoById(JSON.stringify(id),onSuccessPillTableByIdCallBack,onFailureCallBack);
  }

  onPatchProcessAPICall(data:DeleteProps){
    const { id } = this.state;
    const { onSuccessPatchRequestCallBack,onFailureCallBack } = this;
    patchPillData(JSON.stringify(id),data,onSuccessPatchRequestCallBack,onFailureCallBack)
}
   onSuccessCallBack = (data:DataProps[]): void => {
    // For debugging purpose only
    // console.log(data);
    localStorage.setItem(USER_MEDICAL_TABLE,JSON.stringify(data));
      this.setState({
          data:JSON.parse(localStorage.getItem(USER_MEDICAL_TABLE)|| '{}'),
      })
    }

    onSuccessPillTableByIdCallBack = (response:DataProps) => {
      const data:{isDeleted:boolean} = {
        isDeleted:true,
      }
      this.onPatchProcessAPICall(data); 
    }

    onSuccessPatchRequestCallBack = (response:PatchRequestProps) => {
      console.log(response)
    }
    
    onFailureCallBack = (error: ServerResponse): void => {
      console.log(error);
    }
    
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
    

    render(){
        const { data,debuggMode,isDeleted,deleteShow } = this.state;
        const { onEditClick,onDeleteClick ,onCancelClick,onDeleteConfirmationClick} = this;
        return(
            <TableComponent 
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

export default withRouter(TableContainer);