import React, { Component } from 'react';

import HealthCheckComponent from '../components/healthCheckComponent';
import { SYMPTOMS_DROPDOWN_LIST } from '../constants';


interface IProps {

}
interface valueProps {
  id:number;
  value:string;
}

interface StateProps {
values:valueProps[];
selectedList:valueProps[];
}

export default class HealthCheckContainer extends Component<IProps,StateProps> {
    constructor(props:IProps){
        super(props);
        this.state = {
          values: SYMPTOMS_DROPDOWN_LIST,
          selectedList:[],
        }
        this.showSettings = this.showSettings.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
  showSettings = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    alert("hii")  
  }
  handleChange = (arr: string[]): void => {
    console.log(arr);
    // localStorage.setItem("DATA_ARR",JSON.stringify(arr))
  }
 
  render () {
      const { showSettings,handleChange } = this;
      const { values } = this.state;
    return (
        <HealthCheckComponent 
        showSettings={showSettings}
        values={values}
        handleChange={handleChange}
        />
        );
    }
}