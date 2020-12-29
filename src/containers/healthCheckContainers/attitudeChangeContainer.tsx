import React, { Component } from 'react';

import AttitudeChangeComponent from '../../components/healthCheckComponents/attitudeChangeComponent';
import { ATTITUDE_CHECK } from '../../constants';


interface IProps {

}
interface StateProps {
anxietyCheck ?: boolean;
depressionCheck ?: boolean;
irritabilityCheck ?: boolean;
peacefulCheck ?: boolean;
happyCheck ?: boolean;
othersCheck ?: boolean;
othersValue ?: string;
}

export default class AttitudeChangeContainer extends Component<IProps,StateProps> {
    
    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props:IProps){
        super(props);
        this.state = {
          anxietyCheck:undefined,
          depressionCheck: undefined,
          irritabilityCheck: undefined,
          peacefulCheck: undefined,
          happyCheck:undefined,
          othersCheck:undefined,
          othersValue:undefined,
        }
      this.onAnxietyCheck = this.onAnxietyCheck.bind(this);
      this.onIrritabilityCheck = this.onIrritabilityCheck.bind(this);
      this.onDepressionCheck = this.onDepressionCheck.bind(this);
      this.onPeacefulCheck = this.onPeacefulCheck.bind(this);
      this.onHappyCheck = this.onHappyCheck.bind(this);
      this.onOthersCheck = this.onOthersCheck.bind(this);
      this.onUpdate = this.onUpdate.bind(this);
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
      if(localStorage.getItem(ATTITUDE_CHECK) !== null || localStorage.getItem(ATTITUDE_CHECK) !== undefined){
        const attitudeCheckData: StateProps = JSON.parse(localStorage.getItem(ATTITUDE_CHECK)|| '{}');
        this.setState({
            anxietyCheck : attitudeCheckData.anxietyCheck,
            depressionCheck : attitudeCheckData.depressionCheck,
            irritabilityCheck : attitudeCheckData.irritabilityCheck,
            peacefulCheck : attitudeCheckData.peacefulCheck,
            happyCheck : attitudeCheckData.happyCheck,
            othersCheck : attitudeCheckData.othersCheck,
            othersValue : attitudeCheckData.othersValue,
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
    
    onAnxietyCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.checked === true  && event.currentTarget.value !== undefined) {
        this.setState({
          anxietyCheck:event.currentTarget.checked,
        })
      } else if(event.currentTarget.checked === false  || event.currentTarget.value !== undefined){
        this.setState({
          anxietyCheck:undefined,
        })
      } 
      }
    
    onIrritabilityCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.checked === true  && event.currentTarget.value !== undefined) {
        this.setState({
          irritabilityCheck:event.currentTarget.checked,
        })
      } else if(event.currentTarget.checked === false  || event.currentTarget.value !== undefined){
        this.setState({
          irritabilityCheck:undefined,
        })
      } 
      }

    onDepressionCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.checked === true  && event.currentTarget.value !== undefined) {
        this.setState({
          depressionCheck:event.currentTarget.checked,
        })
      } else if(event.currentTarget.checked === false || event.currentTarget.value === undefined){
        this.setState({
          depressionCheck:undefined,
        })
      } 
      }

    onPeacefulCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.checked === true  && event.currentTarget.value !== undefined) {
        this.setState({
          peacefulCheck:event.currentTarget.checked,
        })
      } else if(event.currentTarget.checked === false  || event.currentTarget.value !== undefined){
        this.setState({
          peacefulCheck:undefined,
        })
      } 
      }

    onHappyCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.checked === true  && event.currentTarget.value !== undefined) {
        this.setState({
          happyCheck:event.currentTarget.checked,
        })
      } else if(event.currentTarget.checked === false  || event.currentTarget.value !== undefined){
        this.setState({
          happyCheck:undefined,
        })
      } 
      }

    onOthersCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.checked === true  && event.currentTarget.value !== undefined) {
        this.setState({
          othersCheck:event.currentTarget.checked,
        })
      } else if(event.currentTarget.checked === false  || event.currentTarget.value !== undefined){
        this.setState({
          othersCheck:undefined,
        })
      } 
      }

    onOthersValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.currentTarget.value !== ""  && event.currentTarget.value !== undefined) {
        this.setState({
          othersValue:event.currentTarget.value,
        })
      } else {
        this.setState({
          othersValue:undefined,
        })
      } 
      }

    onUpdate = ():void => {
      const { anxietyCheck,depressionCheck,irritabilityCheck,peacefulCheck,happyCheck,othersCheck,othersValue } = this.state;
      localStorage.setItem(ATTITUDE_CHECK,JSON.stringify({
          anxietyCheck : anxietyCheck,
          depressionCheck : depressionCheck,
          irritabilityCheck : irritabilityCheck,
          peacefulCheck : peacefulCheck,
          happyCheck : happyCheck,
          othersCheck : othersCheck,
          othersValue : othersValue,
      }))
    }
 

  /* *
      *  Main render function
      *------------------------------------------------------------
  */
  render () {
      const { onAnxietyCheck,
              onIrritabilityCheck,
              onDepressionCheck,
              onPeacefulCheck,
              onHappyCheck,
              onOthersCheck,
              onOthersValueChange,
            } = this;
      const { anxietyCheck,
              depressionCheck,
              irritabilityCheck,
              peacefulCheck,
              happyCheck,
              othersCheck,
              othersValue,
            } = this.state;
      return (
        <AttitudeChangeComponent
            anxietyCheck={anxietyCheck}
            depressionCheck= {depressionCheck}
            irritabilityCheck={irritabilityCheck}
            peacefulCheck={peacefulCheck}
            happyCheck={happyCheck}
            othersCheck={othersCheck}
            othersValue={othersValue}
            onAnxietyCheck={onAnxietyCheck}
            onIrritabilityCheck={onIrritabilityCheck}
            onDepressionCheck={onDepressionCheck}
            onPeacefulCheck={onPeacefulCheck}
            onHappyCheck={onHappyCheck}
            onOthersCheck={onOthersCheck}
            onOthersValueChange={onOthersValueChange}
        />
        );
    }
}