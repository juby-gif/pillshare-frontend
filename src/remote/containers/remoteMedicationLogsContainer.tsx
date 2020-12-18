import React, { Component } from 'react';

import RemoteMedicationLogsComponent from '../components/remoteMedicationLogsComponent';
import { getRemoteMedicalLogs } from '../API/remoteMedicalLogsAPI';
import { REMOTE_PAYLOAD } from '../../constants';


interface IProps {

}

interface StateProps {
  theme:string;
  data:MedicalProps[];
  column:({ name: string; selector: string; sortable: boolean; } | { name: string; selector: string; sortable: boolean; right: boolean; })[];

}

interface DataProps {
  before_or_after ?: string;
  dosage ?: string;
  dose ?: number;
  duration ?: number;
  end_date ?: string;
  start_date ?: string;
  part ?: string;
  time ?:string;
  missed ?: string;
  measure ?: string;
  name ?: string;
  reason ?: string;
  taken ?: string;
  number : number;
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
  number : number;
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
interface ParamProps{
  id:string;
}

export default class RemoteMedicationLogsContainer extends Component<IProps,StateProps> {
  
  /*  *
      *  Initializer
      *------------------------------------------------------------
  */
    constructor(props:IProps){
        super(props);
        this.state={
          theme : "",
          column:[],
          data:[],
      }
        this.handleChange = this.handleChange.bind(this);
        this.onSuccessCallBack = this.onSuccessCallBack.bind(this);
        this.onFailureCallBack = this.onFailureCallBack.bind(this);
    }
    

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

    /* *
        *  API callback functions
        *------------------------------------------------------------
    */
    getRemoteMedicalLogs(OBJ.user_id,onSuccessCallBack,onFailureCallBack);
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
      let columnData = [
        {
          name: 'Sl.No',
          selector: 'number',
          sortable: true,
        },
        {
          name: 'Pill Name',
          selector: 'name',
          sortable: true,
        },
        {
          name: 'Dose',
          selector: 'dose',
          sortable: true,
        },
        {
          name: 'Measure',
          selector: 'measure',
          sortable: true,
        },
        {
          name: 'Dosage',
          selector: 'dosage',
          sortable: true,
        },
        {
          name: 'Before / After Food',
          selector: 'before_or_after',
          sortable: true,
        },
        {
          name: 'Duration',
          selector: 'duration',
          sortable: true,
        },
        {
          name: 'Start Date',
          selector: 'start_date',
          sortable: true,
        },
        {
          name: 'End Date',
          selector: 'end_date',
          sortable: true,
        },
        {
          name: 'Part',
          selector: 'part',
          sortable: true,
        },
        {
          name: 'Time',
          selector: 'time',
          sortable: true,
        },
        {
          name: 'Taken',
          selector: 'taken',
          sortable: true,
        },
        {
          name: 'Missed',
          selector: 'missed',
          sortable: true,
        },
      ]

      let medicalData =[];
      for (let i=0; i<responseData.data.length; i++){
        let data:DataProps = {
          number:i+1,
          before_or_after:responseData.data[i].before_or_after,
          dosage: responseData.data[i].dosage,
          dose : responseData.data[i].dose,
          measure : responseData.data[i].measure,
          duration : responseData.data[i].duration,
          end_date : responseData.data[i].end_date,
          start_date : responseData.data[i].start_date,
          part : responseData.data[i].time_taken?.part,
          time : responseData.data[i].time_taken?.time,
          missed : responseData.data[i].missed?responseData.data[i].missed:"-",
          name : responseData.data[i].name,
          reason : responseData.data[i].reason,
          taken : responseData.data[i].taken?responseData.data[i].taken:"-",

        }
        medicalData.push(data);
      }

        this.setState({
          column:columnData,
          data:medicalData,
        })
      }
      
      onFailureCallBack = (error: ServerResponse): void => {
          alert(error);
      }

      handleChange = () => {
        const { theme } = this.state;
       if (theme === 'dark') {
         this.setState({
           theme:"default",
         })
       } else {
         this.setState({
           theme:"dark",
         })
       }
     };
  /*  *
      *  Main render function
      *------------------------------------------------------------
  */
  render () {
    const { theme,column,data } = this.state;
    const { handleChange } = this;
    return (
        <RemoteMedicationLogsComponent 
          theme={theme}
          column={column}
          data={data}
          handleChange={handleChange}
        />
        );
    }
}