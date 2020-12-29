import React, { Component } from 'react';
import { MultiSelectChangeEventArgs } from '@syncfusion/ej2-react-dropdowns'

import SymptomsCheckComponent from '../../components/healthCheckComponents/symptomsCheckComponent';
import { SYMPTOMS_CHECK, SYMPTOMS_DROPDOWN_LIST } from '../../constants';


interface IProps {

}

interface StateProps {
date ?: string;
time ?: string;
intensity ?: number;
values ?: string[] | number[] | boolean[];
}

export default class SymptomsCheckContainer extends Component<IProps,StateProps> {
    
    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps){
        super(props);
        this.state = {
          date:undefined,
          time:undefined,
          intensity:0,
          values:[],
        }
      this.onDateChange = this.onDateChange.bind(this);
      this.onTimeChange = this.onTimeChange.bind(this); 
      this.onIntensityClick = this.onIntensityClick.bind(this);
      this.onValuesChange = this.onValuesChange.bind(this);
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
    if(localStorage.getItem(SYMPTOMS_CHECK) !== null && localStorage.getItem(SYMPTOMS_CHECK) !== undefined && '{}'){
      const symptomsCheckData: StateProps = JSON.parse(localStorage.getItem(SYMPTOMS_CHECK)|| '{}');
      this.setState({
        date:symptomsCheckData?.date,
        time:symptomsCheckData?.time,
        // intensity:symptomsCheckData.intensity,
        values:symptomsCheckData?.values,
      })
      }
  }

  componentDidUpdate(){
    this.onUpdate();
  }

  /* *
      *  API callback functions
      *------------------------------------------------------------
  */
  /* *
      *  Event handling functions
      *------------------------------------------------------------
  */
    onDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== "") {
        this.setState({
          date:event.currentTarget.value,
        })
      } else {
        this.setState({
          date:undefined,
        })
      } 
      }

    onTimeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== "") {
        this.setState({
          time:event.currentTarget.value,
        })
      } else {
        this.setState({
          time:undefined,
        })
      } 
      }
    
    onIntensityClick = (rating: number): void => {
      this.setState({
          intensity:rating,
      })
      }

    onValuesChange = (value: MultiSelectChangeEventArgs | undefined): void => {
      if(value?.value.length !== 0) {
        this.setState({
          values:value?.value,
        })
      } else {
        this.setState({
          values:undefined,
        })
      } 
      }

    onUpdate = ():void => {
      const { date,time,values } = this.state;
      localStorage.setItem(SYMPTOMS_CHECK,JSON.stringify({
          date:date,
          time:time,
          // intensity:intensity,
          values:values,
      }))
    }
    
    private dropdownArray: { [key: number]: Object }[] = SYMPTOMS_DROPDOWN_LIST;
    private fieldsObj: object = { text: 'value', value: 'id' };
    
 

  /* *
      *  Main render function
      *------------------------------------------------------------
  */
  render () {
      const { onIntensityClick,
              dropdownArray,
              fieldsObj,
              onValuesChange,
              onDateChange,
              onTimeChange,
            } = this;
      const { intensity,
              values,
              date,
              time,
            } = this.state;
      return (
        <SymptomsCheckComponent
            date={date}
            time={time}
            intensity={intensity}
            fieldsObj={fieldsObj}
            dropdownArray={dropdownArray}
            values={values}
            onDateChange={onDateChange}
            onTimeChange={onTimeChange}
            onIntensityClick={onIntensityClick}
            onValuesChange={onValuesChange}
        />
        );
    }
}