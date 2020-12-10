import React, { Component } from 'react';
import { MultiSelectChangeEventArgs } from '@syncfusion/ej2-react-dropdowns'

import HealthCheckComponent from '../components/healthCheckComponent';
import { SYMPTOMS_DROPDOWN_LIST } from '../constants';


interface IProps {

}
interface StateProps {
date : string;
time : string;
intensity ?: number;
anxietyCheck ?: boolean;
depressionCheck ?: boolean;
irritabilityCheck ?: boolean;
peacefulCheck ?: boolean;
happyCheck ?: boolean;
othersCheck ?: boolean;
othersValue ?: string;
healthCheck ?: string;
values ?: string[];
}

export default class HealthCheckContainer extends Component<IProps,StateProps> {
    
    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps){
        super(props);
        this.state = {
          date:"",
          time:"",
          intensity:0,
          anxietyCheck:false,
          depressionCheck: false,
          irritabilityCheck: false,
          peacefulCheck: false,
          happyCheck:false,
          othersCheck:false,
          othersValue:"",
          healthCheck:"",
          values:[],
        }
      this.onDateChange = this.onDateChange.bind(this);
      this.onTimeChange = this.onTimeChange.bind(this); 
      this.onIntensityClick = this.onIntensityClick.bind(this);
      this.onAnxietyCheck = this.onAnxietyCheck.bind(this);
      this.onIrritabilityCheck = this.onIrritabilityCheck.bind(this);
      this.onDepressionCheck = this.onDepressionCheck.bind(this);
      this.onPeacefulCheck = this.onPeacefulCheck.bind(this);
      this.onHappyCheck = this.onHappyCheck.bind(this);
      this.onOthersCheck = this.onOthersCheck.bind(this);
      this.onImprovingCheck = this.onImprovingCheck.bind(this);
      this.onSameCheck = this.onSameCheck.bind(this);
      this.onBadCheck = this.onBadCheck.bind(this);
      this.onWorseCheck = this.onWorseCheck.bind(this);
      this.onValuesChange = this.onValuesChange.bind(this);
      this.onSubmitClick = this.onSubmitClick.bind(this);
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
  //Nothing

  /* *
      *  API callback functions
      *------------------------------------------------------------
  */
  /* *
      *  Event handling functions
      *------------------------------------------------------------
  */
    onDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
          date:event.currentTarget.value,
      })
      }

    onTimeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
          time:event.currentTarget.value,
      })
      }
    
    onIntensityClick = (rating: number): void => {
      this.setState({
          intensity:rating,
      })
      }
    
    onAnxietyCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        anxietyCheck:event.currentTarget.checked,
      })
    } 
    
    onIrritabilityCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        irritabilityCheck:event.currentTarget.checked,
      })
    } 

    onDepressionCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        depressionCheck:event.currentTarget.checked,
      })
    } 

    onPeacefulCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        peacefulCheck:event.currentTarget.checked,
      })
    } 

    onHappyCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        happyCheck:event.currentTarget.checked,
      })
    } 

    onOthersCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        othersCheck:event.currentTarget.checked,
      })
    } 

    onOthersValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        othersValue:event.currentTarget.value,
      })
    } 

    onImprovingCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        healthCheck:event.currentTarget.value,
      })
    } 

    onSameCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        healthCheck:event.currentTarget.value,
      })
    } 

    onBadCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        healthCheck:event.currentTarget.value,
          })
    } 

    onWorseCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      this.setState({
        healthCheck:event.currentTarget.value,
      })
    } 

    onValuesChange = (value: MultiSelectChangeEventArgs | undefined): void => {
     console.log(value? value.value:null);
    } 

    onSubmitClick = (event:React.SyntheticEvent):void => {
      event.preventDefault();
      alert("Good!")
    }
    
    private dropdownArray: { [key: number]: Object }[] = SYMPTOMS_DROPDOWN_LIST;
    private fieldsObj: object = { text: 'value', value: 'id' };
    
 

  /* *
      *  Main render function
      *------------------------------------------------------------
  */
  render () {
      const { onIntensityClick,
              onAnxietyCheck,
              onIrritabilityCheck,
              onDepressionCheck,
              onPeacefulCheck,
              onHappyCheck,
              onOthersCheck,
              onOthersValueChange,
              onImprovingCheck,
              onSameCheck,
              onBadCheck,
              onWorseCheck,
              dropdownArray,
              fieldsObj,
              onValuesChange,
              onSubmitClick,
            } = this;
      const { intensity,
              anxietyCheck,
              depressionCheck,
              irritabilityCheck,
              peacefulCheck,
              happyCheck,
              othersCheck,
              othersValue,
              healthCheck,
              values
            } = this.state;
      return (
        <HealthCheckComponent
        intensity={intensity}
        anxietyCheck={anxietyCheck}
        depressionCheck= {depressionCheck}
        irritabilityCheck={irritabilityCheck}
        peacefulCheck={peacefulCheck}
        happyCheck={happyCheck}
        othersCheck={othersCheck}
        othersValue={othersValue}
        healthCheck={healthCheck}
        fieldsObj={fieldsObj}
        dropdownArray={dropdownArray}
        values={values}
        onIntensityClick={onIntensityClick}
        onAnxietyCheck={onAnxietyCheck}
        onIrritabilityCheck={onIrritabilityCheck}
        onDepressionCheck={onDepressionCheck}
        onPeacefulCheck={onPeacefulCheck}
        onHappyCheck={onHappyCheck}
        onOthersCheck={onOthersCheck}
        onOthersValueChange={onOthersValueChange}
        onImprovingCheck={onImprovingCheck}
        onSameCheck={onSameCheck}
        onBadCheck={onBadCheck}
        onWorseCheck={onWorseCheck}
        onValuesChange={onValuesChange}
        onSubmitClick={onSubmitClick}
        />
        );
    }
}