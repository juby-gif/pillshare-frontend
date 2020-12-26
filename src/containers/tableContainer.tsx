import React, { Component } from 'react';

import TableComponent from '../components/tableComponent';
import { getMedicalTableInfo } from '../API/tableDataAPI';
import { LOGGED_IN_USER_ID, USER_MEDICAL_TABLE } from '../constants';


interface IProps {
  debuggMode:boolean,
}

interface StateProps {
data:DataProps[];
debuggMode:boolean;
isDeleted ?:boolean;
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
  intervals:IntervalProps,
  reason?:string;
  taken?:string[];
  missed?:string[];
  index?:number;
}


export default class TableContainer extends Component<IProps,StateProps> { 
    constructor(props:IProps){
        super(props);
    this.state={
        data:[],
        debuggMode:props.debuggMode,
        isDeleted:undefined,
    }
    this.onSuccessCallBack = this.onSuccessCallBack.bind(this);
    this.onFailureCallBack = this.onFailureCallBack.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick =  this.onDeleteClick.bind(this);
  }

  componentDidMount(){
    const { onSuccessCallBack,onFailureCallBack } = this;
    const user_id:string|null = JSON.parse(localStorage.getItem(LOGGED_IN_USER_ID) || '')

    getMedicalTableInfo(user_id,onSuccessCallBack,onFailureCallBack)
  }

  onSuccessCallBack = (data:DataProps[]): void => {
    // For debugging purpose only
    // console.log(data);
    localStorage.setItem(USER_MEDICAL_TABLE,JSON.stringify(data));
      this.setState({
          data:JSON.parse(localStorage.getItem(USER_MEDICAL_TABLE)|| '{}'),
      })
    }
    
    onFailureCallBack = (error: ServerResponse): void => {
      console.log(error);
    }
    
    onEditClick = (event : React.SyntheticEvent,index:number) : void =>{
      event.preventDefault();
      alert(index);
    }

    onDeleteClick = (event : React.SyntheticEvent,index:number) : void =>{
      event.preventDefault();
      alert(index);
    }
    

    render(){
        const { data,debuggMode,isDeleted } = this.state;
        const { onEditClick,onDeleteClick } = this;
        return(
            <TableComponent 
                data={data}
                isDeleted={isDeleted}
                debuggMode={debuggMode}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
            />
        );
    }
}